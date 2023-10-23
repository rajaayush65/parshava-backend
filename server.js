require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

const orderRouter = require("./routes/order-routes");
const supplierRouter = require("./routes/suppliers-routes");

db.on("error", console.error.bind(console, "MongoDB Connection Error : "));

app.use("/api/docket", orderRouter);
app.use("/api/supplier", supplierRouter);

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
