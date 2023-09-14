const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { mappingService } = require('../services');

const createMapping = catchAsync(async (req, res) => {
  const mapping = await mappingService.createMapping(req.body);
  res.status(httpStatus.CREATED).send(mapping);
});

const queryMapping = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await mappingService.queryMapping(filter, options);
  res.send(result);
});

const getMappingById = catchAsync(async (req, res) => {
  const mapping = await mappingService.getMappingById(req.params.mappingId);
  if (!mapping) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mapping not found');
  }
  res.send(mapping);
});

const updateMappingById = catchAsync(async (req, res) => {
  const mapping = await mappingService.updateMappingById(req.params.mappingId, req.body);
  res.send(mapping);
});

const deleteMapping = catchAsync(async (req, res) => {
  await mappingService.deleteMappingById(req.params.mappingId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMapping,
  queryMapping,
  getMappingById,
  updateMappingById,
  deleteMapping,
};
