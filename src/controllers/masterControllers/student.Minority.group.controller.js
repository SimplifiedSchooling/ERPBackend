const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { studentService } = require('../../services');

const createStudentMinorityGroup = catchAsync(async (req, res) => {
  const student = await studentService.createStudentMinority(req.body);
  res.status(httpStatus.CREATED).send(student);
});

const getAllStudentMinorityGroups = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentMinority();
  res.send(result);
});

const getStudentMinorityGroup = catchAsync(async (req, res) => {
  const student = await studentService.getStudentMinorityById(req.params.studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Social category not found');
  }
  res.send(student);
});

const updateStudentMinorityGroup = catchAsync(async (req, res) => {
  const student = await studentService.updateStudentMinorityById(req.params.studentId, req.body);
  res.send(student);
});

const deleteStudentMinorityGroup = catchAsync(async (req, res) => {
  await studentService.deleteStudentMinorityById(req.params.studentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStudentMinorityGroup,
  getAllStudentMinorityGroups,
  getStudentMinorityGroup,
  updateStudentMinorityGroup,
  deleteStudentMinorityGroup,
};
