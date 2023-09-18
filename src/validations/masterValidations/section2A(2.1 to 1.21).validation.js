const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection2A21 = {
  body: Joi.object().keys({
    totalpcavi: Joi.string().trim(),
    functpcavai: Joi.string().trim(),
    totallaptopavi: Joi.string().trim(),
    functlaptopavai: Joi.string().trim(),
    totaltabletavai: Joi.string().trim(),
    functtabletavai: Joi.string().trim(),
    totalteacherlerandevavai: Joi.string().trim(),
    functteacherlerandevavai: Joi.string().trim(),
    totalCMSavai: Joi.string().trim(),
    functCMSavai: Joi.string().trim(),
    totalprojectoravai: Joi.string().trim(),
    functprojectoravai: Joi.string().trim(),
    totalprinteravai: Joi.string().trim(),
    functprinteravai: Joi.string().trim(),
    totalscanneravai: Joi.string().trim(),
    functscanneravai: Joi.string().trim(),
    totalserveravai: Joi.string().trim(),
    functserveravai: Joi.string().trim(),
    totalwebcamavai: Joi.string().trim(),
    functwebcamavai: Joi.string().trim(),
    totalsmarttvavai: Joi.string().trim(),
    functsmarttvavai: Joi.string().trim(),
    totalsmartclassavai: Joi.string().trim(),
    functsmartclassavai: Joi.string().trim(),
    totalmobusedforteachingavai: Joi.string().trim(),
    functmobusedforteachingavai: Joi.string().trim(),
    totalradioavai: Joi.string().trim(),
    functradioavai: Joi.string().trim(),
    totalupsavai: Joi.string().trim(),
    functupsavai: Joi.string().trim(),
    internetf: Joi.string().trim(),
    typeofinternet: Joi.string().trim(),
    internetpurpose: Joi.string().trim(),
    computerlab: Joi.string().trim(),
    econtent: Joi.string().trim(),
    cwsn: Joi.string().trim(),
    dth: Joi.string().trim(),
    digitallab: Joi.string().trim(),
    ebookavi: Joi.string().trim(),
    ictteacher: Joi.string().trim(),
    noofhours: Joi.string().trim(),
    ictlab: Joi.string().trim(),
    yearofimplant: Joi.string().trim(),
    ictlabfunct: Joi.string().trim(),
    model1: Joi.string().trim(),
    ictinst: Joi.string().trim(),
  }),
};

const getAllSection2A21 = {
  query: Joi.object().keys({
    totalpcavi: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.string().trim(),
    page: Joi.string().trim(),
  }),
};

const getSection2A21 = {
  params: Joi.object().keys({
    Section2A21Id: Joi.string().custom(objectId),
  }),
};

const updateSection2A21 = {
  params: Joi.object().keys({
    Section2A21Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      totalpcavi: Joi.string().trim(),
      functpcavai: Joi.string().trim(),
      totallaptopavi: Joi.string().trim(),
      functlaptopavai: Joi.string().trim(),
      totaltabletavai: Joi.string().trim(),
      functtabletavai: Joi.string().trim(),
      totalteacherlerandevavai: Joi.string().trim(),
      functteacherlerandevavai: Joi.string().trim(),
      totalCMSavai: Joi.string().trim(),
      functCMSavai: Joi.string().trim(),
      totalprojectoravai: Joi.string().trim(),
      functprojectoravai: Joi.string().trim(),
      totalprinteravai: Joi.string().trim(),
      functprinteravai: Joi.string().trim(),
      totalscanneravai: Joi.string().trim(),
      functscanneravai: Joi.string().trim(),
      totalserveravai: Joi.string().trim(),
      functserveravai: Joi.string().trim(),
      totalwebcamavai: Joi.string().trim(),
      functwebcamavai: Joi.string().trim(),
      totalsmarttvavai: Joi.string().trim(),
      functsmarttvavai: Joi.string().trim(),
      totalsmartclassavai: Joi.string().trim(),
      functsmartclassavai: Joi.string().trim(),
      totalmobusedforteachingavai: Joi.string().trim(),
      functmobusedforteachingavai: Joi.string().trim(),
      totalradioavai: Joi.string().trim(),
      functradioavai: Joi.string().trim(),
      totalupsavai: Joi.string().trim(),
      functupsavai: Joi.string().trim(),
      internetf: Joi.string().trim(),
      typeofinternet: Joi.string().trim(),
      internetpurpose: Joi.string().trim(),
      computerlab: Joi.string().trim(),
      econtent: Joi.string().trim(),
      cwsn: Joi.string().trim(),
      dth: Joi.string().trim(),
      digitallab: Joi.string().trim(),
      ebookavi: Joi.string().trim(),
      ictteacher: Joi.string().trim(),
      noofhours: Joi.string().trim(),
      ictlab: Joi.string().trim(),
      yearofimplant: Joi.string().trim(),
      ictlabfunct: Joi.string().trim(),
      model1: Joi.string().trim(),
      ictinst: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection2A21 = {
  params: Joi.object().keys({
    Section2A21Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection2A21,
  getAllSection2A21,
  getSection2A21,
  updateSection2A21,
  deleteSection2A21,
};
