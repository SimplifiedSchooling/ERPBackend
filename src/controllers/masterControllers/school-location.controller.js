const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const schoolLocationServices = require('../../services/masterService/school.location.type.service');

const createSchoolLocationType = catchAsync(async (req, res) => {
  const newSchoolLocationType = await schoolLocationServices.createSchoolLocation(req.body);
  res.status(httpStatus.CREATED).send(newSchoolLocationType);
});

const getAllSchoolLocation = catchAsync(async (req, res) => {
  const getAllSchoolLocation = await schoolLocationServices.getAllSchoolLocation();
  res.send(getAllSchoolLocation);
});

const getSchoolLocationById = catchAsync(async (req, res) => {
  const singleSchoolLocationType = await schoolLocationServices.getSchoolLocationById(req.params.schoolLocationId);
  if (!singleSchoolLocationType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SchoolLocationType not found');
  }
  res.send(singleSchoolLocationType);
});

const updateSchoolLocationTypeyId = catchAsync(async (req, res) => {
  const updateLocationType = await schoolLocationServices.updateSchoolLocationTypeyId(req.params.schoolLocationId, req.body);
  res.send(updateLocationType);
});

const deleteSchoolLocationTypeById = catchAsync(async (req, res) => {
  const deleteLocationType = await schoolLocationServices.deleteSchoolLocationTypeById(req.params.schoolLocationId);
  res.status(httpStatus.NO_CONTENT).send(deleteLocationType);
});

module.exports = {
    createSchoolLocationType,
    getAllSchoolLocation,
    getSchoolLocationById,
    updateSchoolLocationTypeyId,
    deleteSchoolLocationTypeById,
};
