const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  endDate: String,
  hoursWorked: Number,
  ratePerHour: Number,
  supplierName: String,
  purchaseOrder: String,
});

module.exports = mongoose.model("Order", orderSchema);
