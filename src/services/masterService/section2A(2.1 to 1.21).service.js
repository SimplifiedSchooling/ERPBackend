const httpStatus = require('http-status');
const Section2A21Schema = require('../../models/masterModels/section2A(2.1 to 1.21).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section2A21Schema
 * @param {Object} Section2A21SchemaBody
 * @returns {Promise<Section2A21Schema>}
 */
const createSection2A21 = async (Section2A21SchemaBody) => {
  return Section2A21Schema.create(Section2A21SchemaBody);
};

/**
 * Query for Section2A21
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSection2A21 = async (filter, options) => {
  const Section2A21 = await Section2A21Schema.paginate(filter, options);
  return Section2A21;
};

/**
 * Get Section2A21Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section2A21Schema>}
 */
const getSection2A21ById = async (id) => {
  return Section2A21Schema.findById(id);
};

/**
 * Update Section2A21Schema by id
 * @param {ObjectId} Section2A21Id
 * @param {Object} updateBody
 * @returns {Promise<Section2A21Schema>}
 */
const updateSection2A21ById = async (Section2A21Id, updateBody) => {
  const typeSection2A21 = await getSection2A21ById(Section2A21Id);
  if (!typeSection2A21) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section2A21 not found');
  }
  Object.assign(typeSection2A21, updateBody);
  await typeSection2A21.save();
  return typeSection2A21;
};

/**
 * Delete Section2A21Schema by id
 * @param {ObjectId} Section2A21Id
 * @returns {Promise<Section2A21Schema>}
 */
const deleteSection2A21ById = async (Section2A21Id) => {
  const Section2A21 = await getSection2A21ById(Section2A21Id);
  if (!Section2A21) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section2A21 not found');
  }
  await Section2A21.remove();
  return Section2A21;
};

module.exports = {
  createSection2A21,
  getAllSection2A21,
  getSection2A21ById,
  updateSection2A21ById,
  deleteSection2A21ById,
};
