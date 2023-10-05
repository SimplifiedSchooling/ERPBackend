// const httpStatus = require('http-status');
// const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const HomePageGraphService = require('../../services/graphService/homepagegraph.service');
 


const getHomePageGraphData = catchAsync(async (req, res) => {
  const homePageGraphData = await HomePageGraphService.countSchoolsData();
  res.status(200).send({ homePageGraphData });
});

const getSchoolDataManagementWise = catchAsync(async (req, res) => {
  const result = await HomePageGraphService.calculateSchoolDistribution();
  res.status(200).send({result});
});

const getSchoolTypeData = catchAsync(async (req, res) => {
  const schoolType = await HomePageGraphService.calculateTypeSchoolDistribution();
  res.status(200).send({schoolType});
})

const calculateSchoolsByCategory = catchAsync(async (req, res) => {
  const schoolCategoryStats = await HomePageGraphService.calculateSchoolsByCategory();
  res.status(200).send(schoolCategoryStats);
});

const calculateSchoolCounts = catchAsync(async (req, res) => {
  const { districtName } = req.params;
  const schoolCounts = await HomePageGraphService.calculateSchoolCounts(districtName);
  res.status(200).send(schoolCounts);
});

module.exports = {
  getHomePageGraphData,
  getSchoolDataManagementWise,
  getSchoolTypeData,
  calculateSchoolsByCategory,
  calculateSchoolCounts
};
