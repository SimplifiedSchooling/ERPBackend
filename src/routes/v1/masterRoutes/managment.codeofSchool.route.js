const express = require('express');

const validate = require('../../../middlewares/validate');
const managmentCodeschool = require('../../../validations/masterValidations/management.codeSchool.validation');
const managmentCodeSchool = require('../../../controllers/masterControllers/managment.codeSchool.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(managmentCodeschool.createManaCodeSchool), managmentCodeSchool.createManagmentCodeSchool)
  .get(validate(managmentCodeschool.getAllManaCodeSchools), managmentCodeSchool.getManagmentCodeSchools);

router
  .route('/:managementCodeId')
  .get(validate(managmentCodeschool.getManaCodeSchool), managmentCodeSchool.getManagmentCodeSchool)
  .patch(validate(managmentCodeschool.updateManaCodeSchool), managmentCodeSchool.updateManagmentCodeSchool)
  .delete(validate(managmentCodeschool.deleteManaCodeSchool), managmentCodeSchool.deleteManagmentCodeSchool);

module.exports = router;


