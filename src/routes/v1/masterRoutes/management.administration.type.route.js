const express = require('express');

const validate = require('../../../middlewares/validate');
const managmentAdministrationType = require('../../../validations/masterValidations/management.codeSchool.validation');
const managementAdministrationType = require('../../../controllers/masterControllers/management.administration.type.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(managmentAdministrationType.createManagementAdministrationType), managementAdministrationType.createManagementAdministrationType)
  .get(validate(managmentAdministrationType.getAllManagementAdministrationTypes), managementAdministrationType.getManagementAdministrationTypes);

router
  .route('/:managementAdmTypeId')
  .get(validate(managmentAdministrationType.getManagementAdministrationType), managementAdministrationType.getManagementAdministrationType)
  .patch(validate(managmentAdministrationType.updateManagementAdministrationType), managementAdministrationType.updateManagementAdministrationType)
  .delete(validate(managmentAdministrationType.deleteManagementAdministrationType), managementAdministrationType.deleteManagementAdministrationType);

module.exports = router;


