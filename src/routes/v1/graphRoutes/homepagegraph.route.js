const express = require('express');
// const validate = require('../../../middlewares/validate');
const HomePageGraphController = require('../../../controllers/graphControllers/homepagegraph.controller');
// const HomePageGraphValidation = require('../../../validations/graphValidations/homepagegraph.validation');

const router = express.Router();

router.route('/homepagegraphdata').get(HomePageGraphController.getHomePageGraphData);
router.route('/managementwise').get(HomePageGraphController.getSchoolDataManagementWise);
router.route('/schooltype').get(HomePageGraphController.getSchoolTypeData);
router.route('/calculate-schools-by-category').get(HomePageGraphController.calculateSchoolsByCategory);
router.route('/calculate-school-counts/:districtName').get(HomePageGraphController.calculateSchoolCounts);

module.exports = router;
