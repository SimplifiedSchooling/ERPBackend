const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { studentSessionService } = require('../services');

const createStudentSession = catchAsync(async (req, res) => {
  const newStudentSession = await studentSessionService.createStudentSession(req.body);
  res.status(httpStatus.CREATED).send(newStudentSession);
});

const getStudentSession = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['session_Id']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudentSession = await studentSessionService.getAllStudentSession(filter, options);
  res.send(allStudentSession);
});

const getSingleStudentSession = catchAsync(async (req, res) => {
  const singleStudentSession = await studentSessionService.getStudentSessionById(req.params.studentSessionId);
  if (!singleStudentSession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student_session not found');
  }
  res.send(singleStudentSession);
});

const updateSingleStudentSession = catchAsync(async (req, res) => {
  const updatedStudentSession = await studentSessionService.updateStudentSessionById(
    req.params.student_session_Id,
    req.body
  );
  res.send(updatedStudentSession);
});

const deleteSingleStudentSession = catchAsync(async (req, res) => {
  const deletedStudentSession = await studentSessionService.deleteStudentSessionById(req.params.studentSessionId);
  res.status(httpStatus.NO_CONTENT).send(deletedStudentSession);
});

module.exports = {
  createStudentSession,
  getStudentSession,
  getSingleStudentSession,
  updateSingleStudentSession,
  deleteSingleStudentSession,
};
