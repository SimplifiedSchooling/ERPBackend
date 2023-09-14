const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { student_Session_Service } = require('../services');

const createStudent_session = catchAsync(async (req, res) => {
  const newStudent_session = await student_Session_Service.createStudent_session(req.body);
  res.status(httpStatus.CREATED).send(newStudent_session);
});

const getStudent_session = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['session_Id']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allStudent_session = await student_Session_Service.getAllStudent_session(filter, options);
  res.send(allStudent_session);
});

const getSingleStudent_session = catchAsync(async (req, res) => {
  const singleStudent_session = await student_Session_Service.getStudent_sessionById(req.params.student_session_Id);
  if (!singleStudent_session) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student_session not found');
  }
  res.send(singleStudent_session);
});

const updateSingleStudent_session = catchAsync(async (req, res) => {
  const updatedStudent_Session = await student_Session_Service.updateStudent_sessionById(req.params.student_session_Id, req.body);
  res.send(updatedStudent_Session);
});

const deleteSingleStudent_session = catchAsync(async (req, res) => {
  const deletedStudent_session = await student_Session_Service.deleteStudent_sessionById(req.params.student_session_Id);
  res.status(httpStatus.NO_CONTENT).send(deletedStudent_session);
});

module.exports = {
  createStudent_session,
  getStudent_session,
  getSingleStudent_session,
  updateSingleStudent_session,
  deleteSingleStudent_session,
};
