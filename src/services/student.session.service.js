const httpStatus = require('http-status');
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


// const getStudentsByClassAndSection =async (classId, sectionId) => {
//   try {
//     // Find all student sessions matching the provided classId and sectionId
//     const studentSessions = await StudentSession.find({ classId, sectionId }).exec();

//     // Extract student IDs from the student sessions
//     const studentIds = studentSessions.map((session) => session.studentId);

//     // Use the student IDs to fetch student documents from the Students collection
//     const students = await Student.find({ _id: { $in: studentIds } }).exec();

//     return students;
//   } catch (error) {
//     throw error;
//   }
// }

// const getAllStudentSession = async () => {
//   const result = await StudentSession.aggregate([
//     {
//       $lookup: {
//         from: 'Students', // The name of the subject collection in your database
//         localField: 'studentId',
//         foreignField: '_id',
//         as: 'student',
//       },
//     },
//     {
//       $unwind: '$student', // Unwind the subject array created by the $lookup stage
//     },
//     {
//       $project: {
//         sessionId: 1,
//         studentId: 1,
//         classId: 1,
//         'student.firstname': 1, // Include subject fields from the unwound array
//         'student.middlename': 1,
//         'student.lastname': 1,
//         createdAt: 1,
//         updatedAt: 1,
//       },
//     },
//     {
//       $group: {
//         _id: '$classId',
//         subjects: {
//           $push: '$student',
//         },
//         sessionId: {
//           $first: '$sessionId',
//         },
//         classId: {
//           $first: '$classId',
//         },          
//         createdAt: {
//           $first: '$createdAt',
//         },
//         updatedAt: {
//           $first: '$updatedAt',
//         },
//       },
//     },
//   ]);

//   return result;
// };

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
};
