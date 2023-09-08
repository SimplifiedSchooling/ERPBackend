const express = require('express');

const validate = require('../../../middlewares/validate');
const schooleBuilding = require('../../../validations/masterValidations/schoole.building.validation');
const SchoolBuilding = require('../../../controllers/masterControllers/school.building.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(schooleBuilding.createBuilding), SchoolBuilding.createSchoolBuilding)
  .get(validate(schooleBuilding.getAllBuildings), SchoolBuilding.getAllSchoolBuilding);

router
  .route('/:buildingId')
  .get(validate(schooleBuilding.getBuilding), SchoolBuilding.getSchoolBuilding)
  .patch(validate(schooleBuilding.updateBuilding), SchoolBuilding.updateSchoolBuilding)
  .delete(validate(schooleBuilding.deleteBuilding), SchoolBuilding.deleteSchoolBuilding);

module.exports = router;


