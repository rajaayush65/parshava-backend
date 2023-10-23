const express = require("express");
const router = express.Router();

const {
  createDocket,
  processCsv,
  getDockets,
  createOrder,
  getOrders,
} = require("../controllers/order-controllers");

router.post("/createdocket", createDocket);
router.post("/processCsv", processCsv);
router.get("/getdockets", getDockets);
router.post("/createorder", createOrder);
router.get("/getorders", getOrders);

module.exports = router;
