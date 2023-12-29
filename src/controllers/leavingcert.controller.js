const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { LeavingcertService } = require('../services');

const createLeaveVert = catchAsync(async (req, res) => {
  const leavingCert = await LeavingcertService.createLeaveCert(req.body);
  res.status(httpStatus.CREATED).send(leavingCert);
});

const queryLeavingcert = catchAsync(async (req, res) => {
  const { scode, admissionNo, apllyedName, StudentId } = req.query;
  const filter = { status: true, scode, admissionNo, apllyedName, StudentId }; // Filter for status true only
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await LeavingcertService.queryLeavingcert(filter, options);
  res.send(result);
});

const getLeavingcertById = catchAsync(async (req, res) => {
  const leavingCert = await LeavingcertService.getLeavingcertById(req.params.leavingCertId);
  if (!leavingCert) {
    throw new ApiError(httpStatus.NOT_FOUND, 'leaving Cert not found');
  }
  res.send(leavingCert);
});

const searchStudents = catchAsync(async (req, res) => {
  const leavingCert = await LeavingcertService.searchStudents(req.body);
  if (!leavingCert) {
    throw new ApiError(httpStatus.NOT_FOUND, 'leaving Cert not found');
  }
  res.send(leavingCert);
});

module.exports = {
  createLeaveVert,
  queryLeavingcert,
  getLeavingcertById,
  searchStudents,
};
