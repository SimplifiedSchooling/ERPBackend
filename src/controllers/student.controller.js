const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const studentService = require('../services/student.service');

const createStudent = catchAsync(async (req, res) => {
  const newStudent = await studentService.createStudent(req.body);
  res.status(httpStatus.CREATED).send(newStudent);
});

const getStudents = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['studentName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudents = await studentService.getAllStudents(filter, options);
  res.send(allStudents);
});

const getStudent = catchAsync(async (req, res) => {
  const singleStudent = await studentService.getStudentById(req.params.studentId);
  if (!singleStudent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  res.send(singleStudent);
});

const updateStudent = catchAsync(async (req, res) => {
  const updatedStudent = await studentService.updateStudentById(req.params.studentId, req.body);
  res.send(updatedStudent);
});

const deleteStudent = catchAsync(async (req, res) => {
  const deletedStudent = await studentService.deleteStudentById(req.params.studentId);
  res.status(httpStatus.NO_CONTENT).send(deletedStudent);
});

const getTotalMaleStudents = async (req, res, next) => {
  try {
    const totalMaleStudents = await studentService.calculateTotalMaleStudents();
    res.json({ totalMaleStudents });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  getTotalMaleStudents
};
