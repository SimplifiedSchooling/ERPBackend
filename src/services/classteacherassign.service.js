const httpStatus = require('http-status');
const { ClassTeacher } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a ClassTeacher
 * @param {Object} classTeacherBody
 * @returns {Promise<ClassTeacher>}
 */
const createClassTeacher = async (classTeacherBody) => {
  return ClassTeacher.create(classTeacherBody);
};

/**
 * Query for ClassTeacher
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<ClassTeacher>}
 */
const getAllClassTeacher = async (filter, options) => {
  const AllClassTeacher = await ClassTeacher.paginate(filter, options);
  return AllClassTeacher;
};
/**
 * Get ClassTeacher by classTeacherId
 * @param {ObjectId} classTeacherId
 * @returns {Promise<ClassTeacher>}
 */
const getClassTeacherById = async (classTeacherId) => {
  return ClassTeacher.findById(classTeacherId);
};

/**
 * Get ClassTeacher by classTeacherId
 * @param {ObjectId} mediumId
 * @returns {Promise<ClassTeacher>}
 */
const getClassTeacherByMediumId = async (mediumId) => {
  return ClassTeacher.find({ mediumId });
};

/**
 * Update ClassTeacher by classTeacherId
 * @param {ObjectId} classTeacherId
 * @param {Object} updateBody
 * @returns {Promise<ClassTeacher>}
 */
const updateClassTeacherById = async (classTeacherId, updateBody) => {
  const singleClassTeacher = await getClassTeacherById(classTeacherId);
  if (!singleClassTeacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ClassTeacher not found');
  }
  Object.assign(singleClassTeacher, updateBody);
  await singleClassTeacher.save();
  return singleClassTeacher;
};

/**
 * Delete ClassTeacher by classTeacherId
 * @param {ObjectId} classTeacherId
 * @returns {Promise<ClassTeacher>}
 */
const deleteClassTeacherById = async (classTeacherId) => {
  const singleClassTeacher = await getClassTeacherById(classTeacherId);
  if (!singleClassTeacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ClassTeacher not found');
  }
  await singleClassTeacher.remove();
  return singleClassTeacher;
};

module.exports = {
  createClassTeacher,
  getAllClassTeacher,
  getClassTeacherById,
  updateClassTeacherById,
  deleteClassTeacherById,
  getClassTeacherByMediumId,
};
