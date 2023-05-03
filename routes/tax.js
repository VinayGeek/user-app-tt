const Router = require("express").Router();
const {
  addTax,
  deleteOneTax,
  getAllTaxes,
  getOneTax,
  updateTax,
} = require("../controller/tax");

Router.route("/add-tax").post(addTax)

Router.route("/get-tax").get(addTax)
