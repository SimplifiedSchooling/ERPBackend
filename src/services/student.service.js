const httpStatus = require('http-status');
const crypto = require('crypto');
const randomstring = require('randomstring');
const { Student, Parent } = require('../models');
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
  const newStudent = await Student.create(studentData);

  const userName = await generateUsernameFromName(newStudent.middlename);
  const randomPassword = crypto.randomBytes(16).toString('hex'); // Generate a random password
  const parentUser = await Parent.create({
    userName,
    password: randomPassword,
    name: newStudent.middlename,
    lastname: newStudent.lastname,
    studentId: newStudent.id,
  });
  return { newStudent, parentUser };
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
const getStudentUserName = async (userName) => {
  return Parent.findOne({ userName });
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

const calculateTotalMaleStudents = async () => {
  try {
    const totalMaleStudents = await Student.countDocuments({ gender: 'Male' });
    return totalMaleStudents;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  calculateTotalMaleStudents,
  getStudentUserName,
};
