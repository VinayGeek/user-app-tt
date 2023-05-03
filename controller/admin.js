const Bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const AdminDB = require("../models/admin");

exports.createAdmin = async (req, res, next) => {

  try {
    body("email").isEmail().trim().normalizeEmail();
    body("first_name").isLength({ min: 3, max: 9 });
    body("last_name").isLength({ min: 3, max: 9 });
    body("phone_number").isLength({ min: 10, max: 10 });
    body("website").exists();
    body("password").isLength({ min: 8, max: 24 });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, first_name, last_name, phone_number, website, password } =
      req.body;

    const salt = await Bcrypt.genSalt(12);

    const hashedPasswrod = await Bcrypt.hash(password, salt);

    const addAdminData = await AdminDB.create(
      {
        email,
        first_name,
        last_name,
        phone_number,
        website,
        password:hashedPasswrod,
      }
    );

    res.status(201).json({
      success: true,
      data: addAdminData,
    });

  } catch (error) {
    console.log("error", error);
  }
};

exports.updateAdmin = async (req, res, next) => {
  body("email").isEmail().trim().normalizeEmail();
  body("phone_number").isLength({ min: 10, max: 10 });

  const body = req.body;
  const updateBranchData = AdminDB.create(req.body);

  res.status(201).json({
    success: true,
    data: updateBranchData,
  });
};

exports.loginAdmin = async (req, res, next) => {
  body("email").isEmail().trim().normalizeEmail();
  body("password").isLength({ min: 8, max: 24 });

  const { email, password } = req.body;
  let checkAdminData = await AdminDB.findOne({ email });

  if (!checkAdminData) {
    return res.status(404).json({
      success: "failed",
      message: "no admin found",
      data: {},
    });
  }

  const comparePassword = await Bcrypt.compare(
    password,
    checkAdminData.password,
  );

  if (!comparePassword) {
    return res.status(401).json({
      success: "failed",
      message: "incorrect password",
      data: {},
    });
  }

  res.status(201).json({
    success: true,
    data: true,
  });
};
