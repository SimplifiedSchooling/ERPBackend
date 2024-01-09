const httpStatus = require('http-status');
const { GeneralSetting } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Classes
 * @param {Object} generalSettingData
 * @returns {Promise<GeneralSetting>}
 */
const createGeneralSetting = async (generalSettingData) => {
  return GeneralSetting.create(generalSettingData);
};

/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllGeneralSettings = async (filter, options) => {
  const GeneralSettings = await GeneralSetting.paginate(filter, options);
  return GeneralSettings;
};

/**
 * Get Classes by id
 * @param {ObjectId} id
 * @returns {Promise<GeneralSetting>}
 */
const getGeneralSettingById = async (id) => {
  return GeneralSetting.findById(id);
};

/**
 * Get GeneralSetting by scode
 * @param {ObjectId} scode
 * @returns {Promise<GeneralSetting>}
 */
const getGeneralSettingByScode = async (scode) => {
  return GeneralSetting.find({ scode });
};

/**
 * Update Classes by id
 * @param {ObjectId} generalSetting
 * @param {Object} updateBody
 * @returns {Promise<GeneralSetting>}
 */
const updateGeneralSettingById = async (generalSettingId, updateBody) => {
  const generalSetting = await getGeneralSettingById(generalSettingId);
  if (!generalSetting) {
    throw new ApiError(httpStatus.NOT_FOUND, 'GeneralSetting not found');
  }
  Object.assign(generalSetting, updateBody);
  await generalSetting.save();
  return generalSetting;
};

/**
 * Delete Classes by id
 * @param {ObjectId} generalSettingId
 * @returns {Promise<GeneralSetting>}
 */
const deleteGeneralSettingById = async (generalSettingId) => {
  const generalSetting = await getGeneralSettingById(generalSettingId);
  if (!generalSetting) {
    throw new ApiError(httpStatus.NOT_FOUND, 'GeneralSetting not found');
  }
  await generalSetting.remove();
  return generalSetting;
};

module.exports = {
  createGeneralSetting,
  getAllGeneralSettings,
  getGeneralSettingById,
  updateGeneralSettingById,
  deleteGeneralSettingById,
  getGeneralSettingByScode,
};
