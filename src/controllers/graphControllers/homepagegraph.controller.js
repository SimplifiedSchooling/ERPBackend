// const httpStatus = require('http-status');
// const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const HomePageGraphService = require('../../services/graphService/homepagegraph.service');

const getHomePageGraphData = catchAsync(async (req, res) => {
  const homePageGraphData = await HomePageGraphService.countSchoolsData();
  res.status(200).send({ homePageGraphData });
});

module.exports = {
  getHomePageGraphData,
};
