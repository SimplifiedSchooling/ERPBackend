const httpStatus = require('http-status');
const { SchoolCategory } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a SchoolCategory
 * @param {Object} schoolCategory
 * @returns {Promise<SchoolCategory>}
 */
const createSchoolCategory = async (schoolCategory) => {
  return SchoolCategory.create(schoolCategory);
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
const getAllSchoolCategory = async () => {
  const AllSchoolCategory = await SchoolCategory.find({});
  return AllSchoolCategory;
};

/**
 * Get SchoolCategory by id
 * @param {ObjectId} id
 * @returns {Promise<SchoolCategory>}
 */
const getSchoolCategoryById = async (id) => {
  return SchoolCategory.findById(id);
};

/**
 * Update SchoolCategory by id
 * @param {ObjectId} SchoolCategoryId
 * @param {Object} updateBody
 * @returns {Promise<SchoolCategory>}
 */
const updateSchoolCategoryyId = async (SchoolCategoryId, updateBody) => {
  const schoolCategory = await getSchoolCategoryById(SchoolCategoryId);
  if (!schoolCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SchoolCategory not found');
  }
  Object.assign(schoolCategory, updateBody);
  await schoolCategory.save();
  return schoolCategory;
};

/**
 * Delete SchoolCategory by id
 * @param {ObjectId} SchoolCategoryId
 * @returns {Promise<SchoolCategory>}
 */
const deleteSchoolCategoryById = async (SchoolCategoryId) => {
  const schoolCategory = await getSchoolCategoryById(SchoolCategoryId);
  if (!schoolCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SchoolCategory not found');
  }
  await schoolCategory.remove();
  return schoolCategory;
};

module.exports = {
  createSchoolCategory,
  getAllSchoolCategory,
  getSchoolCategoryById,
  updateSchoolCategoryyId,
  deleteSchoolCategoryById,
};
