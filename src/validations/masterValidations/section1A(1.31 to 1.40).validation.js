const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1A40 = {
  body: Joi.object().keys({
    primaryschdistance: Joi.string().trim(),
    upperprimaryschdistance: Joi.string().trim(),
    secondaryschdistance: Joi.string().trim(),
    highersecondaryschdistance: Joi.string().trim(),
    allweatherroad: Joi.string().trim(),
    primaryschinstructionalday: Joi.string().trim(),
    upperprimaryschinstructionalday: Joi.string().trim(),
    secondaryschinstructionalday: Joi.string().trim(),
    highersecondaryschinstructionalday: Joi.string().trim(),
    primaryschperdayhours: Joi.string().trim(),
    upperprimaryschperdayhours: Joi.string().trim(),
    secondaryschperdayhours: Joi.string().trim(),
    highersecondaryschperdayhours: Joi.string().trim(),
    primaryschperdayhoursteacher: Joi.string().trim(),
    upperprimaryschperdayhoursteacher: Joi.string().trim(),
    secondaryschperdayhoursteacher: Joi.string().trim(),
    highersecondaryschperdayhoursteacher: Joi.string().trim(),
    primaryCCE: Joi.string().trim(),
    upperprimaryCCE: Joi.string().trim(),
    secondaryCCE: Joi.string().trim(),
    highersecondaryCCE: Joi.string().trim(),
    primaryCCENoAss: Joi.string().trim(),
    upperprimaryCCENoAss: Joi.string().trim(),
    secondaryCCENoAss: Joi.string().trim(),
    highersecondaryCCENoAss: Joi.string().trim(),
    cumulativerecords: Joi.string().trim(),
    cumulativerecordsparent: Joi.string().trim(),
    assementprepared: Joi.string().trim(),
    academicsession: Joi.string().trim(),
    admissionundersec12: Joi.string().trim(),
    anganwadiavaliable: Joi.string().trim(),
    anganwaditrained1: Joi.string().trim(),
    aganwadieduSta1: Joi.string().trim(),
    anganwaditrained2: Joi.string().trim(),
    aganwadieduSta2: Joi.string().trim(),
    anganwaditrained3: Joi.string().trim(),
    aganwadieduSta3: Joi.string().trim(),
    anganwaditrained1Name: Joi.string().trim(),
    anganwaditrained1Boys: Joi.string().trim(),
    anganwaditrained1Girls: Joi.string().trim(),
    anganwaditrained2Name: Joi.string().trim(),
    anganwaditrained2Boys: Joi.string().trim(),
    anganwaditrained2Girls: Joi.string().trim(),
    anganwaditrained3Name: Joi.string().trim(),
    anganwaditrained3Boys: Joi.string().trim(),
    anganwaditrained3Girls: Joi.string().trim(),
    Balavatikastarted: Joi.string().trim(),
  }),
};

const getAllSection1A40 = {
  query: Joi.object().keys({
    primaryclass: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1A40 = {
  params: Joi.object().keys({
    Section1A40Id: Joi.string().custom(objectId),
  }),
};

const updateSection1A40 = {
  params: Joi.object().keys({
    Section1A40Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      primaryschdistance: Joi.string().trim(),
      upperprimaryschdistance: Joi.string().trim(),
      secondaryschdistance: Joi.string().trim(),
      highersecondaryschdistance: Joi.string().trim(),
      allweatherroad: Joi.string().trim(),
      primaryschinstructionalday: Joi.string().trim(),
      upperprimaryschinstructionalday: Joi.string().trim(),
      secondaryschinstructionalday: Joi.string().trim(),
      highersecondaryschinstructionalday: Joi.string().trim(),
      primaryschperdayhours: Joi.string().trim(),
      upperprimaryschperdayhours: Joi.string().trim(),
      secondaryschperdayhours: Joi.string().trim(),
      highersecondaryschperdayhours: Joi.string().trim(),
      primaryschperdayhoursteacher: Joi.string().trim(),
      upperprimaryschperdayhoursteacher: Joi.string().trim(),
      secondaryschperdayhoursteacher: Joi.string().trim(),
      highersecondaryschperdayhoursteacher: Joi.string().trim(),
      primaryCCE: Joi.string().trim(),
      upperprimaryCCE: Joi.string().trim(),
      secondaryCCE: Joi.string().trim(),
      highersecondaryCCE: Joi.string().trim(),
      primaryCCENoAss: Joi.string().trim(),
      upperprimaryCCENoAss: Joi.string().trim(),
      secondaryCCENoAss: Joi.string().trim(),
      highersecondaryCCENoAss: Joi.string().trim(),
      cumulativerecords: Joi.string().trim(),
      cumulativerecordsparent: Joi.string().trim(),
      assementprepared: Joi.string().trim(),
      academicsession: Joi.string().trim(),
      admissionundersec12: Joi.string().trim(),
      anganwadiavaliable: Joi.string().trim(),
      anganwaditrained1: Joi.string().trim(),
      aganwadieduSta1: Joi.string().trim(),
      anganwaditrained2: Joi.string().trim(),
      aganwadieduSta2: Joi.string().trim(),
      anganwaditrained3: Joi.string().trim(),
      aganwadieduSta3: Joi.string().trim(),
      anganwaditrained1Name: Joi.string().trim(),
      anganwaditrained1Boys: Joi.string().trim(),
      anganwaditrained1Girls: Joi.string().trim(),
      anganwaditrained2Name: Joi.string().trim(),
      anganwaditrained2Boys: Joi.string().trim(),
      anganwaditrained2Girls: Joi.string().trim(),
      anganwaditrained3Name: Joi.string().trim(),
      anganwaditrained3Boys: Joi.string().trim(),
      anganwaditrained3Girls: Joi.string().trim(),
      Balavatikastarted: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection1A40 = {
  params: Joi.object().keys({
    Section1A40Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1A40,
  getAllSection1A40,
  getSection1A40,
  updateSection1A40,
  deleteSection1A40,
};
