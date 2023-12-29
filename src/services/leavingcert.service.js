// const httpStatus = require('http-status');
const { LeavingCert } = require('../models');
// const ApiError = require('../utils/ApiError');

/**
 * Create a LeavingCert
 * @param {Object} reqBody
 * @returns {Promise<LeavingCert>}
 */
const createLeaveCert = async (reqBody) => {
  return LeavingCert.create(reqBody);
};

/**
 * Query for board
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLeavingcert = async (filter, options) => {
  const leavingcert = await LeavingCert.paginate(filter, options);
  return leavingcert;
};

/**
 * Get leavingcert by id
 * @param {ObjectId} id
 * @returns {Promise<Board>}
 */
const getLeavingcertById = async (id) => {
  return LeavingCert.findById(id);
};

// Function to escape special characters in a string for RegExp
function escapeRegExp(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const searchStudents = async (searchQuery) => {
  const query = {
    scode: searchQuery.scode,
    $or: [
      // eslint-disable-next-line security/detect-non-literal-regexp
      { apllyedName: new RegExp(`^${escapeRegExp(searchQuery.apllyedName)}`, 'i') },
      { StudentId: searchQuery.StudentId },
      { admissionNo: searchQuery.admissionNo },
    ],
  };

  const students = await LeavingCert.find(query).exec();
  return students;
};

// /**
//  * Update leavingcert by id
//  * @param {ObjectId} userId
//  * @param {Object} updateBody
//  * @returns {Promise<Board>}
//  */
// const updateLeavingcertById = async (leavingcertId, updateBody) => {
//   const board = await getLeavingcertById(leavingcertId);
//   if (!board) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Board not found');
//   }
//   Object.assign(board, updateBody);
//   await board.save();
//   return board;
// };

// /**
//  * Delete leavingcert by id
//  * @param {ObjectId} boardId
//  * @returns {Promise<Board>}
//  */
// const deleteLeavingcertById = async (boardId) => {
//   const board = await getLeavingcertById(boardId);
//   if (!board) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Board not found');
//   }
//   await board.remove();
//   return board;
// };

module.exports = {
  createLeaveCert,
  queryLeavingcert,
  getLeavingcertById,
  searchStudents,
  // updateLeavingcertById,
  // deleteLeavingcertById,
};
