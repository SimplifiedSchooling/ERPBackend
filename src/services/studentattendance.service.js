const httpStatus = require('http-status');
const mongoose = require('mongoose');
const moment = require('moment');
const { Student, StudentAttendanceSchema } = require('../models');
const ApiError = require('../utils/ApiError');
/**
 * Create a StudentAttendanceSchema
 * @param {Object} StudentAttendanceSchemaBody
 * @returns {Promise<StudentAttendanceSchema>}
 */
// const createStudentAttendance = async (StudentAttendanceSchemaBody) => {
//   return StudentAttendanceSchema.create(StudentAttendanceSchemaBody);
// };

const createStudentAttendance = async (StudentAttendanceSchemaBody) => {
  let { AttendenceStatus } = StudentAttendanceSchemaBody;
  if (!AttendenceStatus) {
    const match = StudentAttendanceSchemaBody.time.match(/(\d{1,2}:\d{2}:\d{2})(am|pm)?/i);
    const extractedTime = match ? match[1] : '';

    const attendanceTime = new Date(`${StudentAttendanceSchemaBody.date}T${extractedTime}`);
    const lateCutoffTime = new Date(`${StudentAttendanceSchemaBody.date}T11:00:00`);
    AttendenceStatus = attendanceTime > lateCutoffTime ? 'absent' : 'present';
    const remark = AttendenceStatus === 'absent' ? 'Came late to class' : '';
    const updatedAttendanceData = {
      ...StudentAttendanceSchemaBody,
      AttendenceStatus,
      remark,
    };
    return StudentAttendanceSchema.create(updatedAttendanceData);
  }
  return StudentAttendanceSchema.create({ ...StudentAttendanceSchemaBody });
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
 * @param {string} scode - The scode property.
 * @param {string} date - The date in 'YYYY-MM-DD' format.
 * @returns {Promise<StudentAttendanceSchema>} - Object containing total, present, and absent students.
 */
// const getStudentAttendanceSummary = async (scode, date) => {
//   const totalStudentsCount = await Student.countDocuments({ scode });
//   const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     scode,
//     attendancetype: 'present',
//     date,
//   });
//   const absentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     scode,
//     attendancetype: 'absent',
//     date,
//   });

//   const halfdayStudentsCount = await StudentAttendanceSchema.countDocuments({
//     scode,
//     attendancetype: 'halfday',
//     date,
//   });

//   return {
//     totalStudents: totalStudentsCount,
//     presentStudents: presentStudentsCount,
//     absentStudents: absentStudentsCount,
//     halfdayStudents: halfdayStudentsCount,
//   };
// };
const getStudentAttendanceSummary = async (scode, date) => {
  try {
    // Get total students count
    const totalStudentsCount = await Student.countDocuments({ scode });

    // Get all studentIds matching the scode
    const studentIds = await Student.find({ scode }, 'studentId').lean();
    const studentIdValues = studentIds.map((student) => student.studentId);

    // Get attendance counts for all students on the given date
    const allStudentsAttendance = await StudentAttendanceSchema.find({
      studentId: { $in: studentIdValues },
      date,
    }).lean();

    // Calculate counts for each attendance type
    const presentStudentsCount = allStudentsAttendance.filter(
      (attendance) => attendance.AttendenceStatus === 'present'
    ).length;

    const absentStudentsCount = allStudentsAttendance.filter(
      (attendance) => attendance.AttendenceStatus === 'absent'
    ).length;

    return {
      totalStudents: totalStudentsCount,
      presentStudents: presentStudentsCount,
      absentStudents: absentStudentsCount,
    };
  } catch (error) {
    // Handle errors here
    throw error; // Re-throw the error or handle it as appropriate
  }
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
        foreignField: 'studentId',
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
        'studentInfo.studentId': 1,
        'studentInfo.saral_id': 1,
        'studentInfo.scode': 1,
        'studentInfo.userName': 1,
        'studentInfo.parent_id': 1,
        'studentInfo.admission_no': 1,
        'studentInfo.roll_no': 1,
        'studentInfo.firstname': 1,
        'studentInfo.middlename': 1,
        'studentInfo.rte': 1,
        'studentInfo.image': 1,
        'studentInfo.state': 1,
        'studentInfo.city': 1,
        'studentInfo.pincode': 1,
        'studentInfo.religion': 1,
        'studentInfo.cast': 1,
        'studentInfo.dob': 1,
        'studentInfo.current_address': 1,
        'studentInfo.permanent_address': 1,
        'studentInfo.category_id': 1,
        'studentInfo.route_id': 1,
        'studentInfo.school_house_id': 1,
        'studentInfo.blood_group': 1,
        'studentInfo.vehroute_id': 1,
        'studentInfo.hostel_room_id': 1,
        'studentInfo.adhar_no': 1,
        'studentInfo.nameadhar_no': 1,
        'studentInfo.samagra_id': 1,
        'studentInfo.aadhar_back': 1,
        'studentInfo.bank_account_no': 1,
        'studentInfo.bank_name': 1,
        'studentInfo.ifsc_code': 1,
        'studentInfo.guardian_is': 1,
        'studentInfo.father_name': 1,
        'studentInfo.father_phone': 1,
        'studentInfo.father_occupation': 1,
        'studentInfo.mother_name': 1,
        'studentInfo.mother_phone': 1,
        'studentInfo.mother_occupation': 1,
        'studentInfo.guardian_name': 1,
        'studentInfo.guardian_relation': 1,
        'studentInfo.guardian_phone': 1,
        'studentInfo.guardian_occupation': 1,
        'studentInfo.guardian_address': 1,
        'studentInfo.guardian_email': 1,
        'studentInfo.father_pic': 1,
        'studentInfo.mother_pic': 1,
        'studentInfo.guardian_pic': 1,
        'studentInfo.is_active': 1,
        'studentInfo.previous_school': 1,
        'studentInfo.height': 1,
        'studentInfo.weight': 1,
        'studentInfo.student_health_check1': 1,
        'studentInfo.student_health_check2': 1,
        'studentInfo.disability': 1,
        'studentInfo.certifi_disability_avai': 1,
        'studentInfo.disability1': 1,
        'studentInfo.disability_type': 1,
        'studentInfo.percentage': 1,
        'studentInfo.certifi_number': 1,
        'studentInfo.certifi_date': 1,
        'studentInfo.certifi_auth': 1,
        'studentInfo.certificate_up': 1,
        'studentInfo.orphan': 1,
        'studentInfo.orphanname': 1,
        'studentInfo.bpl': 1,
        'studentInfo.bplyear': 1,
        'studentInfo.bplnumber': 1,
        'studentInfo.stdincome': 1,
        'studentInfo.initialadmistand': 1,
        'studentInfo.admissiontype': 1,
        'studentInfo.mothertongue': 1,
        'studentInfo.hivparent': 1,
        'studentInfo.childinfected': 1,
        'studentInfo.studtype': 1,
        'studentInfo.mirc_code': 1,
        'studentInfo.measurement_date': 1,
        'studentInfo.dis_reason': 1,
        'studentInfo.note': 1,
        'studentInfo.dis_note': 1,
        'studentInfo.app_key': 1,
        'studentInfo.parent_app_key': 1,
        'studentInfo.disable_at': 1,
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

// /**
//  * Get the number of students in the school.
//  * @param {string} scode - The school code.
//  * @returns {Promise<Student>} - The total number of students in the school.
//  */
// const getTotalStudentsCount = async (scode) => {

//   return totalStudentsCount;
// };

// /**
//  * Get the number of students present on a specific date.
//  * @param {string} scode - The school code.
//  * @param {string} date - The date in 'YYYY-MM-DD' format.
//  * @returns {Promise<StudentAttendanceSchema>} - The number of students present on the specified date.
//  */
// const getPresentStudentsCount = async (scode, date) => {
//   const totalStudentsCount = await Student.countDocuments({ scode });
//   console.log(totalStudentsCount);
//   const studentIds = await Student.find({ scode }, 'studentId');
//   console.log(studentIds);
//   const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
//     studentId: { $in: studentIds },
//     date,
//   });
//   const absentStudentsCount = totalStudentsCount - presentStudentsCount;
//   const data = {
//     totalStudentsCount,
//     presentStudentsCount,
//     absentStudentsCount,
//   };
//   return data;
// };

const getPresentStudentsCount = async (scode, date) => {
  const totalStudentsCount = await Student.countDocuments({ scode });
  const studentIds = await Student.find({ scode }, 'studentId').lean();
  const studentIdValues = studentIds.map((student) => student.studentId);
  const presentStudentsCount = await StudentAttendanceSchema.countDocuments({
    studentId: { $in: studentIdValues }, // Use the extracted values here
    date,
  });
  const absentStudentsCount = totalStudentsCount - presentStudentsCount;
  const data = {
    totalStudentsCount,
    presentStudentsCount,
    absentStudentsCount,
  };

  return data;
};

module.exports = {
  createStudentAttendance,
  getAllStudentAttendance,
  getStudentAttendanceById,
  updateStudentAttendanceById,
  deleteStudentAttendanceById,
  getAttendanceData,
  getWeekReport,
  getStudentAttendanceSummary,
  getPresentStudentsCount,
  // getClasswiseStudentAttendanceList,
};
