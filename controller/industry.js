const industryDB = require("../models/industry");

exports.createIndustry = async (req, res, next) => {
    const body = req.body;
    const addIndustryData = industryDB.create(body);

    res.status(201).json({
        success: true,
        data: addIndustryData,
    });
};

exports.getAllIndustry = async (req, res, next) => {

    const getIndustryData = industryDB.find();

    res.status(201).json({
        success: true,
        data: getIndustryData,
    });
};

exports.getOneIndustry = async (req, res, next) => {
    const body = req.body;
    const getOneIndustryData = industryDB.findOne(body);

    res.status(201).json({
        success: true,
        data: getOneIndustryData,
    });
};

exports.deleteIndustry = async (req, res, next) => {
    const body = req.body;
    const deleteIndustryData = industryDB.create(req.body);

    res.status(201).json({
        success: true,
        data: deleteIndustryData,
    });
};

exports.updateIndustry = async (req, res, next) => {
    const body = req.body;
    const updateIndustryData = industryDB.create(req.body);

    res.status(201).json({
        success: true,
        data: updateIndustryData,
    });
};
