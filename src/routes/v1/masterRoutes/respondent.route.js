const express = require('express');

const validate = require('../../../middlewares/validate');
const Respondents = require('../../../validations/masterValidations/respondent.validation');
const Respondent = require('../../../controllers/masterControllers/respondent.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(Respondents.createRespondent), Respondent.createRespondent)
  .get(validate(Respondents.getAllRespondents), Respondent.getAllRespondents);

router
  .route('/:respondentId')
  .get(validate(Respondents.getRespondent), Respondent.getRespondent)
  .patch(validate(Respondents.updateRespondent), Respondent.updateRespondent)
  .delete(validate(Respondents.deleteRespondent), Respondent.deleteRespondent);

module.exports = router;


