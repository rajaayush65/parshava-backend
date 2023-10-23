const express = require("express");
const router = express.Router();

const {
  getUniqueSuppliers,
  getPONumberandDescriptions,
} = require("../controllers/suppliers-controllers");

router.get("/getuniquesuppliers", getUniqueSuppliers);
router.post("/getpoorders", getPONumberandDescriptions);

module.exports = router;
