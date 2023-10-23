const Docket = require("../models/docket");

const getUniqueSuppliers = async (req, res) => {
  try {
    const uniqueSuppliers = await Docket.distinct("Supplier").exec();
    return res.status(200).json({
      success: true,
      uniqueSuppliers: uniqueSuppliers,
    });
  } catch (err) {
    console.error(err);
  }
};

const getPONumberandDescriptions = async (req, res) => {
  const selectedSupplier = req.body.supplierName;
  try {
    const results = await Docket.find(
      { Supplier: selectedSupplier },
      "PONumber Description"
    ).exec();
    return res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { getUniqueSuppliers, getPONumberandDescriptions };
