const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { student_Session_Service } = require('../services');

const createStudentSession = catchAsync(async (req, res) => {
  const newStudent_session = await student_Session_Service.createStudentSession(req.body);
  res.status(httpStatus.CREATED).send(newStudent_session);
});

const getStudentSession = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['session_Id']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudent_session = await student_Session_Service.getAllStudentSession(filter, options);
  res.send(allStudent_session);
});

const getSingleStudentSession = catchAsync(async (req, res) => {
  const singleStudent_session = await student_Session_Service.getStudentSessionById(req.params.studentSessionId);
  if (!singleStudent_session) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student_session not found');
  }
  res.send(singleStudent_session);
});

const updateSingleStudentSession = catchAsync(async (req, res) => {
  const updatedStudent_Session = await student_Session_Service.updateStudentSessionById(req.params.studentSessionId, req.body);
  res.send(updatedStudent_Session);
});

const deleteSingleStudentSession = catchAsync(async (req, res) => {
  const deletedStudent_session = await student_Session_Service.deleteStudentSessionById(req.params.studentSessionId);
  res.status(httpStatus.NO_CONTENT).send(deletedStudent_session);
});

module.exports = {
  createStudentSession,
  getStudentSession,
  getSingleStudentSession,
  updateSingleStudentSession,
  deleteSingleStudentSession,
};
