const httpStatus = require('http-status');
const mongoose = require('mongoose');
const { StudentSession } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a chapter
 * @param {Object} studentSession
 * @returns {Promise<StudentSession>}
 */
const createStudentSession = async (studentSession) => {
  return StudentSession.create(studentSession);
};

/**
 * Query for StudentSession
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentSession = async (filter, options) => {
  const allStudentSession = await StudentSession.paginate(filter, options);
  return allStudentSession;
};

/**
 * Get StudentSession by id
 * @param {ObjectId} studentSessionId
 * @returns {Promise<StudentSession>}
 */
const getStudentSessionById = async (studentSessionId) => {
  return StudentSession.findById(studentSessionId);
};

/**
 * Get students by class and section
 * @param {string} classId - The ID of the class to filter by.
 * @param {string} sectionId - The ID of the section to filter by.
 * @returns {Promise<StudentSession>} - An array of StudentSession objects.
 * @throws {Error} - If there is an error while querying the database.
 */

const getStudentsByClassAndSection = async (classId, sectionId) => {
  const attendanceData = await StudentSession.aggregate([
    {
      $match: {
        classId: mongoose.Types.ObjectId(classId),
        sectionId: mongoose.Types.ObjectId(sectionId),
      },
    },
    {
      $lookup: {
        from: 'students',
        localField: 'studentId',
        foreignField: '_id',
        as: 'studentInfo',
      },
    },
    {
      $unwind: '$studentInfo',
    },
    {
      $project: {
        _id: 1,
        'studentInfo._id': 1,
        'studentInfo.role': 1,
        'studentInfo.name': 1,
        'studentInfo.mobNumber': 1,
        'studentInfo.age': 1,
        'studentInfo.email': 1,
        'studentInfo.admission_date': 1,
        'studentInfo.department': 1,
        'studentInfo.campusId': 1,
        'studentInfo.lastname': 1,
        'studentInfo.class': 1,
        'studentInfo.section': 1,
      },
    },
  ]);
  return attendanceData.map((item) => ({
    studentId: item.studentId,
    studentInfo: item.studentInfo,
  }));
};

/**
 * Update StudentSession by id
 * @param {ObjectId} studentSessionId
 * @param {Object} updateBody
 * @returns {Promise<StudentSession>}
 */
const updateStudentSessionById = async (studentSessionId, updateBody) => {
  const singleStudentSession = await getStudentSessionById(studentSessionId);
  if (!singleStudentSession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentSession not found');
  }
  Object.assign(singleStudentSession, updateBody);
  await singleStudentSession.save();
  return singleStudentSession;
};

/**
 * Delete StudentSession by id
 * @param {ObjectId} studentSessionId
 * @returns {Promise<StudentSession>}
 */
const deleteStudentSessionById = async (studentSessionId) => {
  const singleStudentSession = await getStudentSessionById(studentSessionId);
  if (!singleStudentSession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentSession not found');
  }
  await singleStudentSession.remove();
  return singleStudentSession;
};

module.exports = {
  createStudentSession,
  getStudentSessionById,
  getAllStudentSession,
  updateStudentSessionById,
  deleteStudentSessionById,
  getStudentsByClassAndSection,
};
