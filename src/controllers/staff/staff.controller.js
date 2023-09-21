const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { staffService } = require('../../services');

const createStaff = catchAsync(async (req, res) => {
  const staff = await staffService.createStaff(req.body);
  res.status(httpStatus.CREATED).send(staff);
});

const getAllStaff = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'username']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await staffService.queryStaff(filter, options);
  res.send(result);
});

const getStaff = catchAsync(async (req, res) => {
  const staff = await staffService.getStaffById(req.params.satffId);
  if (!staff) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff not found');
  }
  res.send(staff);
});

const updateStaffById = catchAsync(async (req, res) => {
  const satff = await staffService.updateStaffById(req.params.staffId, req.body);
  res.send(satff);
});

const deleteStaffById = catchAsync(async (req, res) => {
  await staffService.deleteStaffById(req.params.staffId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStaff,
  getAllStaff,
  getStaff,
  updateStaffById,
  deleteStaffById,
};
