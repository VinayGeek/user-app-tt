const Router = require("express").Router();
const {
  createAdmin,
  loginAdmin,
  updateAdmin
} = require("../controller/admin");

Router.route("/add-admin").post(createAdmin);
Router.route("/login-admin").post(loginAdmin);

module.exports = Router;
