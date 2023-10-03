/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-catch */
const httpStatus = require('http-status');
// const crypto = require('crypto');
const randomstring = require('randomstring');
const { Student } = require('../models');
const ApiError = require('../utils/ApiError');

// Generate a random username
function generateUsernameFromName(name) {
  const sanitizedName = name.replace(/\s+/g, '').toLowerCase();
  const randomString = randomstring.generate({
    length: 4,
    charset: 'alphanumeric',
  });
  return `${sanitizedName}${randomString}`;
}
/**
 * Create a Classes
 * @param {Object} studentData
 * @returns {Promise<Student>}
 */
const createStudent = async (studentData) => {
  const data = studentData;
  if (await Student.isUserNameTaken(studentData.mobNumber)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile Number already taken');
  }
  const userName = await generateUsernameFromName(data.name);
  data.userName = userName;
  return Student.create(data);

  // const userName = await generateUsernameFromName(newStudent.middlename);
  // const randomPassword = crypto.randomBytes(16).toString('hex'); // Generate a random password
  // const parentUser = await Parent.create({
  //   userName,
  //   password: randomPassword,
  //   name: newStudent.middlename,
  //   lastname: newStudent.lastname,
  //   studentId: newStudent.id,
  // });
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
const getAllStudents = async (filter, options) => {
  const students = await Student.paginate(filter, options);
  return students;
};

/**
 * Get students by id
 * @param {ObjectId} id
 * @returns {Promise<Student>}
 */
const getStudentById = async (id) => {
  return Student.findById(id);
};

/**
 * Get students by userName
 * @param {ObjectId} userName
 * @returns {Promise<Student>}
 */
const getStudentMobNumber = async (mobNumber) => {
  return Student.findOne({ mobNumber });
};

/**
 * Update Classes by id
 * @param {ObjectId} studentId
 * @param {Object} updateBody
 * @returns {Promise<Student>}
 */
const updateStudentById = async (studentId, updateBody) => {
  const student = await getStudentById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  Object.assign(student, updateBody);
  await student.save();
  return student;
};

/**
 * Delete Classes by id
 * @param {ObjectId} studentId
 * @returns {Promise<Student>}
 */
const deleteStudentById = async (studentId) => {
  const student = await getStudentById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  await student.remove();
  return student;
};

// const studentBulkFilter = (options) => {
//   return {
//     filter: options.filter || (options.saral_id ? { saral_id: options.saral_id } : {}),
//     getFilter() {
//       return this.filter;
//     },
//   };
// };

// const getStudentBySaral = async (filter) => {
//   const studentFilter = studentBulkFilter(filter).getFilter();
//   if (studentFilter) {
//     const record = await Student.findOne(studentFilter).exec();
//     return record;
//   }
//   return { message: 'Missing query params !!!' };
// };
// const bulkUpload = async (studentArray, csvFilePath = null) => {
//   let modifiedStaffsArray = studentArray;
//   if (csvFilePath) {
//     modifiedStaffsArray = { students: csvFilePath };
//   }
//   if (!modifiedStaffsArray.students || !modifiedStaffsArray.students.length) 
//   return { error: true, message: 'missing array' };

//   const records = [];
//   const dups = [];

//   await Promise.all(
//     modifiedStaffsArray.students.map(async (student) => {
//       const studentFound = await getStudentBySaral({ saral_id: student.saral_id });
//       if (studentFound) {
//         dups.push(student);
//       } else {
//         let record = new Student(student);
//         record = await record.save();
//         if (record) {
//           records.push(student);
//         }
//       }
//     })
//   );

//   const duplicates = {
//     totalDuplicates: dups.length ? dups.length : 0,
//     data: dups.length ? dups : [],
//   };
//   const nonduplicates = {
//     totalNonDuplicates: records.length ? records.length : 0,
//     data: records.length ? records : [],
//   };
//   return { nonduplicates, duplicates };
// };


module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  getStudentMobNumber,
  //bulkUpload
};
