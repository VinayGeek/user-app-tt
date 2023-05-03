const Router = require("express").Router();
const {
  createIndustry,
  deleteIndustry,
  getAllIndustry,
  getOneIndustry,
  updateIndustry,
} = require("../controller/industry");

Router.route("/add-industry").post(createIndustry);

module.exports = Router;
