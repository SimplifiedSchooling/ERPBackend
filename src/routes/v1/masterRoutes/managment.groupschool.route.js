const express = require('express');

const validate = require('../../../middlewares/validate');
const managmentGroupschool = require('../../../validations/masterValidations/managment.groupschool.validation');
const managmentGroupSchool = require('../../../controllers/masterControllers/managment.groupSchool.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(managmentGroupschool.createManaGroupSchool), managmentGroupSchool.createManagmentGroupSchool)
  .get(validate(managmentGroupschool.getAllManaGroupSchools), managmentGroupSchool.getManagmentGroupSchools);

router
  .route('/:managementId')
  .get(validate(managmentGroupschool.getManaGroupSchool), managmentGroupSchool.getManagmentGroupSchool)
  .patch(validate(managmentGroupschool.updateManaGroupSchool), managmentGroupSchool.updateManagmentGroupSchool)
  .delete(validate(managmentGroupschool.deleteManaGroupSchool), managmentGroupSchool.deleteManagmentGroupSchool);

module.exports = router;


