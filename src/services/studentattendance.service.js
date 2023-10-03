const httpStatus = require('http-status');
const mongoose = require('mongoose');
const StudentAttendanceSchema = require('../models/studentattendance.model');
const ApiError = require('../utils/ApiError');
/**
 * Create a StudentAttendanceSchema
 * @param {Object} StudentAttendanceSchemaBody
 * @returns {Promise<StudentAttendanceSchema>}
 */
const createStudentAttendance = async (StudentAttendanceSchemaBody) => {
  return StudentAttendanceSchema.create(StudentAttendanceSchemaBody);
};

/**
 * Query for StudentAttendance
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentAttendance = async (filter, options) => {
  const StudentAttendance = await StudentAttendanceSchema.paginate(filter, options);
  return StudentAttendance;
};

/**
 * Get StudentAttendanceSchema by id
 * @param {ObjectId} id
 * @returns {Promise<StudentAttendanceSchema>}
 */
const getStudentAttendanceById = async (id) => {
  return StudentAttendanceSchema.findById(id);
};

/**
 * Update StudentAttendanceSchema by id
 * @param {ObjectId} StudentAttendanceId
 * @param {Object} updateBody
 * @returns {Promise<StudentAttendanceSchema>}
 */
const updateStudentAttendanceById = async (StudentAttendanceId, updateBody) => {
  const typeStudentAttendance = await getStudentAttendanceById(StudentAttendanceId);
  if (!typeStudentAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentAttendance not found');
  }
  Object.assign(typeStudentAttendance, updateBody);
  await typeStudentAttendance.save();
  return typeStudentAttendance;
};

/**
 * Delete StudentAttendanceSchema by id
 * @param {ObjectId} StudentAttendanceId
 * @returns {Promise<StudentAttendanceSchema>}
 */
const deleteStudentAttendanceById = async (StudentAttendanceId) => {
  const StudentAttendance = await getStudentAttendanceById(StudentAttendanceId);
  if (!StudentAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentAttendance not found');
  }
  await StudentAttendance.remove();
  return StudentAttendance;
};

/**
 * Get studentsAttendence by class, section, date
 * @param {string} classId - The ID of the class to filter by.
 * @param {string} sectionId - The ID of the section to filter by.
 * @param {string} date - The date to filter by.
 * @returns {Promise<StudentAttendanceSchema>} - An array of StudentAttendanceSchema objects.
 * @throws {Error} - If there is an error while querying the database.
 */

const getAttendanceData = async (classId, sectionId, date) => {
  const attendanceData = await StudentAttendanceSchema.aggregate([
    {
      $match: {
        classId: mongoose.Types.ObjectId(classId),
        sectionId: mongoose.Types.ObjectId(sectionId),
        date,
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
        studentId: 1,
        attendancetype: 1,
        remark: 1,
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
    attendanceObjectId: item._id,
    studentId: item.studentId,
    attendanceType: item.attendancetype,
    remark: item.remark,
    studentInfo: item.studentInfo,
  }));
};

module.exports = {
  createStudentAttendance,
  getAllStudentAttendance,
  getStudentAttendanceById,
  updateStudentAttendanceById,
  deleteStudentAttendanceById,
  getAttendanceData,
};
