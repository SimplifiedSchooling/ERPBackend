const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { generalSettingServices } = require('../services');

const createGeneralSetting = catchAsync(async (req, res) => {
  const newGeneralSetting = await generalSettingServices.createGeneralSetting(req.body);
  res.status(httpStatus.CREATED).send(newGeneralSetting);
});

const getGeneralSettings = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['GeneralSettingName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allGeneralSettings = await generalSettingServices.getAllGeneralSettings(filter, options);
  res.send(allGeneralSettings);
});

const getGeneralSetting = catchAsync(async (req, res) => {
  const singleGeneralSetting = await generalSettingServices.getGeneralSettingById(req.params.generalSettingId);
  if (!singleGeneralSetting) {
    throw new ApiError(httpStatus.NOT_FOUND, 'GeneralSetting not found');
  }
  res.send(singleGeneralSetting);
});

const updateGeneralSetting = catchAsync(async (req, res) => {
  const updatedGeneralSetting = await generalSettingServices.updateGeneralSettingById(req.params.generalSettingId, req.body);
  res.send(updatedGeneralSetting);
});

const deleteGeneralSetting = catchAsync(async (req, res) => {
  const deletedGeneralSetting = await generalSettingServices.deleteGeneralSettingById(req.params.generalSettingId);
  res.status(httpStatus.NO_CONTENT).send(deletedGeneralSetting);
});

const getGeneralSettingByScode = catchAsync(async (req, res) => {
  const { scode } = req.params;
  const generalSetting = await generalSettingServices.getGeneralSettingByScode(scode);
  if (!generalSetting) {
    throw new ApiError(httpStatus.NOT_FOUND, 'generalSetting not found');
  }
  res.send(generalSetting);
});

module.exports = {
  createGeneralSetting,
  getGeneralSettings,
  getGeneralSetting,
  updateGeneralSetting,
  deleteGeneralSetting,
  getGeneralSettingByScode,
};
