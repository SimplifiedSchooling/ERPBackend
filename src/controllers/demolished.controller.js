const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { demolishedService } = require('../services');

const createDemolished = catchAsync(async (req, res) => {
  const demolished = await demolishedService.createDemolished(req.body);
  res.status(httpStatus.CREATED).send(demolished);
});

const getAllDemolished = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['to_title', 'reference_no']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await demolishedService.queryDemolished(filter, options);
  res.send(result);
});

const getDemolishedById = catchAsync(async (req, res) => {
  const demolished = await demolishedService.getDemolishedById(req.params.demolishedId);
  if (!demolished) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Demolished not found');
  }
  res.send(demolished);
});

const updateDemolishedById = catchAsync(async (req, res) => {
  const user = await demolishedService.updateDemolishedById(req.params.demolishedId, req.body);
  res.send(user);
});

const deleteBoard = catchAsync(async (req, res) => {
  await demolishedService.deleteBoardById(req.params.boardId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBoard,
  getAllBoard,
  getBoard,
  updateBoard,
  deleteBoard,
};
