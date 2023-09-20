const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection3A = {
  body: Joi.object().keys({
    nofoaccountant: Joi.string().trim(),
    nofolibassitant: Joi.string().trim(),
    nofoheadclerk: Joi.string().trim(),
    nofoLDC: Joi.string().trim(),
    nofopeon: Joi.string().trim(),
    nofonightwatchman: Joi.string().trim(),
    nofolabassitant: Joi.string().trim(),
    noforegularteacher: Joi.string().trim(),
    nofononregularstaff: Joi.string().trim(),
    totalnoofteachingstaff: Joi.string().trim(),
    noofgusetteacher: Joi.string().trim(),
    nooftransgenderstaff: Joi.string().trim(),
  }),
};

const getAllSection3A = {
  query: Joi.object().keys({
    nofoaccountant: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection3A = {
  params: Joi.object().keys({
    Section3AId: Joi.string().custom(objectId),
  }),
};

const updateSection3A = {
  params: Joi.object().keys({
    Section3AId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      nofoaccountant: Joi.string().trim(),
      nofolibassitant: Joi.string().trim(),
      nofoheadclerk: Joi.string().trim(),
      nofoLDC: Joi.string().trim(),
      nofopeon: Joi.string().trim(),
      nofonightwatchman: Joi.string().trim(),
      nofolabassitant: Joi.string().trim(),
      noforegularteacher: Joi.string().trim(),
      nofononregularstaff: Joi.string().trim(),
      totalnoofteachingstaff: Joi.string().trim(),
      noofgusetteacher: Joi.string().trim(),
      nooftransgenderstaff: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection3A = {
  params: Joi.object().keys({
    Section3AId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection3A,
  getAllSection3A,
  getSection3A,
  updateSection3A,
  deleteSection3A,
};
