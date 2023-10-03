const express = require('express');
// const validate = require('../../../middlewares/validate');
const HomePageGraphController = require('../../../controllers/graphControllers/homepagegraph.controller');
// const HomePageGraphValidation = require('../../../validations/graphValidations/homepagegraph.validation');

const router = express.Router();

router.route('/homepagegraphdata').get(HomePageGraphController.getHomePageGraphData);

module.exports = router;
