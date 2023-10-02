const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSaralInfo3 = {
  body: Joi.object().keys({
    scode: Joi.string(),
    totallaptop: Joi.number(),
    totalprinter: Joi.number(),
    totalprinterfun: Joi.number(),
    laptopteacpurp: Joi.string(),
    complearnpurp: Joi.string(),
    computeradminpurp: Joi.string(),
    schoolnetwork: Joi.string(),
    bandwidth: Joi.string(),
    serviceprovider: Joi.string(),
    campusplan: Joi.string(),
    englishkit: Joi.string(),
    geographickit: Joi.string(),
    braillebooks: Joi.string(),
    largeprint: Joi.string(),
    noofutensils: Joi.number(),
    statusofutensils: Joi.string(),
    utensilsfrom: Joi.string(),
    noofplates: Joi.number(),
    noofspoons: Joi.number(),
    noofglass: Joi.number(),
    weighingmachine: Joi.string(),
    heightmeastool: Joi.string(),
    yearofprocurement: Joi.number(),
    badminton: Joi.string(),
    basketball: Joi.string(),
    carrom: Joi.string(),
    yoga: Joi.string(),
    football: Joi.string(),
    meterrun: Joi.string(),
    allequipments: Joi.number(),
    seatingarrang: Joi.string(),
    seatingarrangava: Joi.string(),
    seatingarrangereq: Joi.string(),
    transportprovider: Joi.string(),
    vehicaltype: Joi.string(),
    contractorowner: Joi.string(),
    rtoregistration: Joi.string(),
    drivername: Joi.string(),
    driverlicenseno: Joi.string(),
    driveraadharno: Joi.string(),
    helpername: Joi.string(),
    teacherresearch: Joi.number(),
    teacherarticlepublish: Joi.string(),
    curriculumdetails: Joi.string(),
  }),
};

const getAllSaralInfo3s = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSaralInfo3 = {
  params: Joi.object().keys({
    saralInfo3Id: Joi.string().custom(objectId),
  }),
};

const updateSaralInfo3ById = {
  params: Joi.object().keys({
    saralInfo3Id: Joi.custom(objectId),
  }),
  body: Joi.object()
    .keys({
      totallaptop: Joi.number(),
      totalprinter: Joi.number(),
      totalprinterfun: Joi.number(),
      laptopteacpurp: Joi.string(),
      complearnpurp: Joi.string(),
      computeradminpurp: Joi.string(),
      schoolnetwork: Joi.string(),
      bandwidth: Joi.string(),
      serviceprovider: Joi.string(),
      campusplan: Joi.string(),
      englishkit: Joi.string(),
      geographickit: Joi.string(),
      braillebooks: Joi.string(),
      largeprint: Joi.string(),
      noofutensils: Joi.number(),
      statusofutensils: Joi.string(),
      utensilsfrom: Joi.string(),
      noofplates: Joi.number(),
      noofspoons: Joi.number(),
      noofglass: Joi.number(),
      weighingmachine: Joi.string(),
      heightmeastool: Joi.string(),
      yearofprocurement: Joi.number(),
      badminton: Joi.string(),
      basketball: Joi.string(),
      carrom: Joi.string(),
      yoga: Joi.string(),
      football: Joi.string(),
      meterrun: Joi.string(),
      allequipments: Joi.number(),
      seatingarrang: Joi.string(),
      seatingarrangava: Joi.string(),
      seatingarrangereq: Joi.string(),
      transportprovider: Joi.string(),
      vehicaltype: Joi.string(),
      contractorowner: Joi.string(),
      rtoregistration: Joi.string(),
      drivername: Joi.string(),
      driverlicenseno: Joi.string(),
      driveraadharno: Joi.string(),
      helpername: Joi.string(),
      teacherresearch: Joi.number(),
      teacherarticlepublish: Joi.string(),
      curriculumdetails: Joi.string(),
    })
    .min(1),
};
const deleteSaralInfo3ById = {
  params: Joi.object().keys({
    saralInfo3Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSaralInfo3,
  getAllSaralInfo3s,
  getSaralInfo3,
  updateSaralInfo3ById,
  deleteSaralInfo3ById,
};
