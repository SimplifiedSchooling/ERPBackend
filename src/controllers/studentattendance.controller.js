const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const StudentAttendanceService = require('../services/studentattendance.service');

const createStudentAttendance = catchAsync(async (req, res) => {
  const StudentAttendance = await StudentAttendanceService.createStudentAttendance(req.body);
  res.status(httpStatus.CREATED).send(StudentAttendance);
});

const getAllStudentAttendance = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await StudentAttendanceService.getAllStudentAttendance(filter, options);
  res.send(result);
});

const getStudentAttendanceById = catchAsync(async (req, res) => {
  const StudentAttendance = await StudentAttendanceService.getStudentAttendanceById(req.params.StudentAttendanceId);
  if (!StudentAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentAttendance not found');
  }
  res.send(StudentAttendance);
});

const getAttendanceByclassSectionDate = catchAsync(async (req, res) => {
  const { classId, sectionId, date } = await req.query;
  const data = await StudentAttendanceService.getAttendanceData(classId, sectionId, date);

  res.status(200).json({ data });
});
const updateStudentAttendance = catchAsync(async (req, res) => {
  const StudentAttendance = await StudentAttendanceService.updateStudentAttendanceById(
    req.params.StudentAttendanceId,
    req.body
  );
  res.send(StudentAttendance);
});

const deleteStudentAttendance = catchAsync(async (req, res) => {
  await StudentAttendanceService.deleteStudentAttendanceById(req.params.StudentAttendanceId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStudentAttendance,
  getAllStudentAttendance,
  getStudentAttendanceById,
  updateStudentAttendance,
  deleteStudentAttendance,
  getAttendanceByclassSectionDate,
};
