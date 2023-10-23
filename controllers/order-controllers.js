const Docket = require("../models/docket");
const Order = require("../models/order");
const fs = require("fs");
const csvParser = require("csv-parser");

const createDocket = (req, res) => {};

const processCsv = async (req, res) => {
  const csvFilePath = "./public/export29913.csv";
  // const csvFilePath = "./public/temp.csv";

  const results = [];
  const stream = fs.createReadStream(csvFilePath);
  let lastSupplier = null;
  let lastPONumber = null;
  let lastDate = null;

  for await (const data of stream.pipe(csvParser())) {
    // Process the data from each row of the CSV file
    // Implement the supplier logic here

    try {
      if (data["Supplier"] !== "") {
        lastSupplier = data["Supplier"];
        lastPONumber = data["PO Number"];
        lastDate = data["Order Date"];
      } else if (lastSupplier !== null) {
        data["Supplier"] = lastSupplier;
        data["PO Number"] = lastPONumber;
        data["Order Date"] = lastDate;
      }
      // Create a new Docket document and save it to the database
      const dataDate = data["Order Date"];
      const [day, month, year] = dataDate?.split("-");
      const jsDate = new Date(`${year}-${month}-${day}`);

      const newDocket = new Docket({
        RecordType: data["Record Type"],
        PONumber: data["PO Number"],
        Chg: data["Chg"],
        Com: data["Com"],
        Type: data["Type"],
        Conf: data["Conf"],
        OrderDate: jsDate,
        Buyer: data["Buyer"],
        AccountNumber: data["Account Number"],
        Supplier: lastSupplier,
        Curr: data["Curr"],
        Item: data["Item"],
        CommodityCode: data["Commodity Code"],
        Description: data["Description"],
        Qty: parseFloat(data["Qty"]), // Ensure Qty is parsed as a number
        Un: data["Un"],
        OrderValue: parseFloat(data["Order Value"]), // Ensure OrderValue is parsed as a number
        AmountInvoiced: parseFloat(data["Amount Invoiced"]), // Ensure AmountInvoiced is parsed as a number
        WBSCode: data["WBS Code"],
        Contract: data["Contract"],
        Remarks: data["Remarks"],
      });

      await newDocket.save();
    } catch (error) {
      console.error("Error saving to MongoDB:", error);
    }

    results.push(data);
  }

  return res.json({
    message: "CSV file processed and saved to MongoDB",
    data: results,
  });
};

const getDockets = async (req, res) => {
  try {
    const orders = await Docket.find();
    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    console.log(err);
  }
};

const createOrder = async (req, res) => {
  try {
    // Extract the data from req.body
    const {
      name,
      startDate,
      endDate,
      hoursWorked,
      ratePerHour,
      supplierName,
      purchaseOrder,
    } = req.body;

    // Create a new Order document
    const newOrder = new Order({
      name,
      startDate,
      endDate,
      hoursWorked,
      ratePerHour,
      supplierName,
      purchaseOrder,
    });

    // Save the document to the database
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder); // Respond with the saved document
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the docket." });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createDocket,
  processCsv,
  getDockets,
  createOrder,
  getOrders,
};
