const AdminDB = require("../models/admin");
const UserDB = require("../models/user");
const EmployeeDB = require("../models/employee")

exports.JWTCheckForToken = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];
    if (!token) return res.send("no token found");
    let tokenData;
    if (req.type === "admin") tokenData = await AdminDB.findOne({ token });
    else if (req.type === "user") tokenData = await UserDB.findOne({ token });
    else if(req.type === "employee") tokenData = await EmployeeDB.findOne({ token });
    else tokenData = false;
    if (!tokenData) return res.status(401).send(`no ${req.type} with this token found`);
    req.loginData = tokenData;
    next();
  } catch (err) {
    return res.json({
      data,
      err,
    });
  }
};

