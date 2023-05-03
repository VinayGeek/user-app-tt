const { body } = require("express-validator");
const TaxDB = require("../models/tax");

exports.addTax = async (req, res, next) => {
  body("name").isLength({ min: 3, max: 6 });
  body("taxValue").isLength({ min: 3, max: 6 });
  const addTaxData = await TaxDB.find(req.body);

  if (!addTaxData.length) {
    return res.status(400).json({
      message: "failure",
      data: [],
    });
  }

  res.send(201).json({
    status: "successfully created",
    data: addTaxData,
  });
};

exports.getAllTaxes = async (req, res, next) => {
  const getAllTaxesData = await TaxDB.find(
    { isDeleted: true },
    { _id: 1, name: 1 }
  );

  if (!getAllTaxesData.length) {
    return res.status(404).json({
      message: "failure",
      data: [],
    });
  }

  res.send(200).json({
    status: "success",
    data: getAllTaxesData,
  });
};

exports.getOneTax = async (req, res, next) => {
  const getOneTaxData = await TaxDB.findById(req.body._id);

  if (!getOneTaxData) {
    return res.status(404).json({
      message: "failure",
      data: {},
    });
  }

  res.send(200).json({
    status: "success",
    data: getOneTaxData,
  });
};

exports.updateTax = async (req, res, next) => {
  body("name").isLength({ min: 3, max: 6 });

  const updateTaxData = await TaxDB.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
  });

  if (!updateTaxData) {
    return res.status(404).json({
      message: "failure",
      data: {},
    });
  }

  res.send(200).json({
    status: "success",
    data: deleteOneTaxData,
  });
};

exports.deleteOneTax = async (req, res, next) => {
  const deleteOneTaxData = await TaxDB.findByIdAndUpdate(req.body._id, {
    isDeleted: true,
  });

  if (!deleteOneTaxData) {
    return res.status(404).json({
      message: "failure",
      data: {},
    });
  }

  res.send(200).json({
    status: "success",
    data: deleteOneTaxData,
  });
};
