const mongoose = require("mongoose");

const docketSchema = new mongoose.Schema({
  RecordType: { type: String, default: "ttOrder" },
  PONumber: String,
  Chg: { type: String, default: "V001" },
  Com: { type: String, default: "Y" },
  Type: { type: String, default: "N" },
  Conf: { type: String, default: "Y" },
  OrderDate: { type: String },
  Buyer: { type: String },
  AccountNumber: String,
  Supplier: String,
  Curr: String,
  Item: String,
  CommodityCode: String,
  Description: String,
  Qty: Number,
  Un: String,
  OrderValue: Number,
  AmountInvoiced: Number,
  WBSCode: String,
  Contract: { type: Number, default: 3093 },
  Remarks: { type: String, default: "Order Completed" },
});

module.exports = mongoose.model("Docket", docketSchema);
