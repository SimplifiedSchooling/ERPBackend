const httpStatus = require('http-status');
const { Chapter } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a chapter
 * @param {Object} Chapter
 * @returns {Promise<Chapter>}
 */
const createChapter = async (chapter) => {
  return Chapter.create(chapter); 
};

/**
 * Query for Chapter
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllChapter = async (filter, options) => {
  const chapters = await Chapter.paginate(filter, options);
  return chapters;
};

/**
 * Get Chapter by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getChapterById = async (id) => {
  return Chapter.findById(id);
};


/**
 * Update Chapter by id
 * @param {ObjectId} chapterId
 * @param {Object} updateBody
 * @returns {Promise<Chapter>}
 */
const updateChapterById = async (chapterId, updateBody) => {
  const singleChapter = await getChapterById(chapterId);
  if (!singleChapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  Object.assign(singleChapter, updateBody);
  await singleChapter.save();
  return singleChapter;
};

/**
 * Delete Chapter by id
 * @param {ObjectId} chapterId
 * @returns {Promise<Chapter>}
 */
const deleteChapterById = async (chapterId) => {
  const chapter = await getChapterById(chapterId);
  if (!chapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  await chapter.remove();
  return chapter;
};

module.exports = {
createChapter,
getChapterById,
getAllChapter,
updateChapterById,
deleteChapterById,
};
