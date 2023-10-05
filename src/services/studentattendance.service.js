const httpStatus = require('http-status');
const mongoose = require('mongoose');
const moment = require('moment');
const { Student, StudentAttendanceSchema, Classes } = require('../models');
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

// /**
//  * Get total, present, and absent students based on campusId.
//  * @param {string} campusId - The ID of the campus.
//  * @returns {Promise<StudentAttendanceSchema>} - Object containing total, present, and absent students.
//  */
// const getStudentAttendanceSummary = async (campusId) => {
//   const totalStudentsCount = await Student.countDocuments({ campusId });
//   const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     campusId,
//     attendancetype: 'present',
//   });
//   const absentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     campusId,
//     attendancetype: 'absent',
//   });

//   const halfdayStudentsCount = await StudentAttendanceSchema.countDocuments({
//     campusId,
//     attendancetype: 'halfday',
//   });
//   return {
//     totalStudents: totalStudentsCount,
//     presentStudents: presentStudentsCount,
//     absentStudents: absentStudentsCount,
//     halfdayStudents: halfdayStudentsCount,
//   };
// };

/**
 * Get total, present, and absent students based on campusId and date.
 * @param {string} campusId - The ID of the campus.
 * @param {string} date - The date in 'YYYY-MM-DD' format.
 * @returns {Promise<StudentAttendanceSchema>} - Object containing total, present, and absent students.
 */
const getStudentAttendanceSummary = async (campusId, date) => {
  const totalStudentsCount = await Student.countDocuments({ campusId });
  const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
    campusId,
    attendancetype: 'present',
    date,
  });
  const absentStudentsCount = await StudentAttendanceSchema.countDocuments({
    campusId,
    attendancetype: 'absent',
    date,
  });

  const halfdayStudentsCount = await StudentAttendanceSchema.countDocuments({
    campusId,
    attendancetype: 'halfday',
    date,
  });

  return {
    totalStudents: totalStudentsCount,
    presentStudents: presentStudentsCount,
    absentStudents: absentStudentsCount,
    halfdayStudents: halfdayStudentsCount,
  };
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
        attedanceTakenBy: 1,
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
        'studentInfo.gender': 1,
      },
    },
  ]);
  return attendanceData.map((item) => ({
    attendanceObjectId: item._id,
    attedanceTakenBy: item.attedanceTakenBy,
    studentId: item.studentId,
    attendanceType: item.attendancetype,
    remark: item.remark,
    studentInfo: item.studentInfo,
  }));
};

/**
 * Get the week report for a user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<StudentAttendanceSchema>} - An array containing the week report.
 */
const getWeekReport = async (userId) => {
  const attedanceTakenBy = userId;
  const startOfWeek = moment().startOf('isoWeek');
  const daysOfWeek = Array.from({ length: 6 }, (_, i) => startOfWeek.clone().add(i, 'days'));

  const attendancePromises = daysOfWeek.map(async (day) => {
    const formattedDate = day.format('YYYY-MM-DD');
    const dayAttendance = await StudentAttendanceSchema.findOne({ attedanceTakenBy, date: formattedDate });
    return { day, dayAttendance };
  });
  const dayAttendances = await Promise.all(attendancePromises);
  const weekReport = daysOfWeek.map((day, index) => {
    const isToday = day.isSame(moment(), 'day');
    let status = 'Pending';
    if (isToday) {
      status = 'Done';
    } else if (dayAttendances[index].dayAttendance) {
      status = 'Done';
    }
    return {
      day: day.format('dddd'),
      date: day.format('YYYY-MM-DD'),
      status,
    };
  });

  return weekReport;
};

// /**
//  * Get classwise student list with present and absent counts based on gender.
//  * @param {string} campusId - The ID of the campus.
//  * @param {string} date - The date in 'YYYY-MM-DD' format.
//  * @returns {Promise<Object[]>} - Array of objects containing class name, present male/female, and absent male/female counts.
//  */
// const getClasswiseStudentAttendanceList = async (campusId, date) => {
//   const classList2 = await StudentAttendanceSchema.find({ campusId });
//   const classId = classList2.classId;

//   const classList = await Classes.find({ classId });
//   console.log(classList);

//   const result = [];
//   for (const classInfo of classList) {
//     const classId = classInfo._id;
//     const { className } = classInfo;

//     const presentMaleCount = await StudentAttendanceSchema.countDocuments({
//       classId,
//       attendancetype: 'present',
//       date,
//       'studentId.gender': 'Male',
//     });
//     const presentFemaleCount = await StudentAttendanceSchema.countDocuments({
//       classId,
//       attendancetype: 'present',
//       date,
//       'studentId.gender': 'Female',
//     });

//     const absentMaleCount = await StudentAttendanceSchema.countDocuments({
//       classId,
//       attendancetype: 'absent',
//       date,
//       'studentId.gender': 'Male',
//     });

//     const absentFemaleCount = await StudentAttendanceSchema.countDocuments({
//       classId,
//       attendancetype: 'absent',
//       date,
//       'studentId.gender': 'Female',
//     });

//     result.push({
//       className,
//       present: {
//         male: presentMaleCount,
//         female: presentFemaleCount,
//       },
//       absent: {
//         male: absentMaleCount,
//         female: absentFemaleCount,
//       },
//     });
//   }

//   return result;
// };

module.exports = {
  createStudentAttendance,
  getAllStudentAttendance,
  getStudentAttendanceById,
  updateStudentAttendanceById,
  deleteStudentAttendanceById,
  getAttendanceData,
  getWeekReport,
  getStudentAttendanceSummary,
  //getClasswiseStudentAttendanceList,
};
