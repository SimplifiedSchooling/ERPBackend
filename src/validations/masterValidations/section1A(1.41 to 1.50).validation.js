const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1A50 = {
  body: Joi.object().keys({
    specialtraining: Joi.string().trim(),
    CurrentAcademicYearNoofboys: Joi.string().trim(),
    CurrentAcademicYearNoofgirls: Joi.string().trim(),
    previousAcademicYearNoofboys: Joi.string().trim(),
    previousAcademicYearNoofgirls: Joi.string().trim(),
    PreviousYearCompletedNoofboys: Joi.string().trim(),
    PreviousYearCompletedNoofgirls: Joi.string().trim(),
    whospecialtraining: Joi.string().trim(),
    wherespecialtraining: Joi.string().trim(),
    typespecialtraining: Joi.string().trim(),
    NoofStudentRemedial: Joi.string().trim(),
    NoofStudentattendLearingEnh: Joi.string().trim(),
    NoofAcademicInspection: Joi.string().trim(),
    NoofVisitbyCRC: Joi.string().trim(),
    NoofVisitByBRC: Joi.string().trim(),
    NoofVisitByDistrictOfficer: Joi.string().trim(),
    NoofVisitByClusterOfficer: Joi.string().trim(),
    NoofVisitByRegionalOfficer: Joi.string().trim(),
    NoofVisitByHeadquarterOfficer: Joi.string().trim(),
    SMCconstitutedAsPerRTE: Joi.string().trim(),
    SMCconstitutedAsPerSamagraShiksha: Joi.string().trim(),
    NoSMCMeetingConPreYear: Joi.string().trim(),
    WeatherSMCPlanSchoolDev: Joi.string().trim(),
    SMCPlanDevYear: Joi.string().trim(),
    SBCConstituted: Joi.string().trim(),
    AcademicCommitteeConstituted: Joi.string().trim(),
    PTAConstituted: Joi.string().trim(),
    PTAMeetingLastAcademicYear: Joi.string().trim(),
    PFMSregistered: Joi.string().trim(),
    MutiClassSchool: Joi.string().trim(),
    classtogether1: Joi.string().trim(),
    muticlassnostudent1: Joi.string().trim(),
    classtogether2: Joi.string().trim(),
    muticlassnostudent2: Joi.string().trim(),
    classtogether3: Joi.string().trim(),
    muticlassnostudent3: Joi.string().trim(),
    SchoolPartofComplex: Joi.string().trim(),
    HubSchoolComplex: Joi.string().trim(),
    nopreprimaryschoolcomplex: Joi.string().trim(),
    noprimaryschoolcomplex: Joi.string().trim(),
    noupperprimaryschoolcomplex: Joi.string().trim(),
    nosecondaryschoolcomplex: Joi.string().trim(),
    nohigherseconadryschoolcomplex: Joi.string().trim(),
    totalschoolcomplex: Joi.string().trim(),
  }),
};

const getAllSection1A50 = {
  query: Joi.object().keys({
    primaryclass: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1A50 = {
  params: Joi.object().keys({
    Section1A50Id: Joi.string().custom(objectId),
  }),
};

const updateSection1A50 = {
  params: Joi.object().keys({
    Section1A50Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      specialtraining: Joi.string().trim(),
      CurrentAcademicYearNoofboys: Joi.string().trim(),
      CurrentAcademicYearNoofgirls: Joi.string().trim(),
      previousAcademicYearNoofboys: Joi.string().trim(),
      previousAcademicYearNoofgirls: Joi.string().trim(),
      PreviousYearCompletedNoofboys: Joi.string().trim(),
      PreviousYearCompletedNoofgirls: Joi.string().trim(),
      whospecialtraining: Joi.string().trim(),
      wherespecialtraining: Joi.string().trim(),
      typespecialtraining: Joi.string().trim(),
      NoofStudentRemedial: Joi.string().trim(),
      NoofStudentattendLearingEnh: Joi.string().trim(),
      NoofAcademicInspection: Joi.string().trim(),
      NoofVisitbyCRC: Joi.string().trim(),
      NoofVisitByBRC: Joi.string().trim(),
      NoofVisitByDistrictOfficer: Joi.string().trim(),
      NoofVisitByClusterOfficer: Joi.string().trim(),
      NoofVisitByRegionalOfficer: Joi.string().trim(),
      NoofVisitByHeadquarterOfficer: Joi.string().trim(),
      SMCconstitutedAsPerRTE: Joi.string().trim(),
      SMCconstitutedAsPerSamagraShiksha: Joi.string().trim(),
      NoSMCMeetingConPreYear: Joi.string().trim(),
      WeatherSMCPlanSchoolDev: Joi.string().trim(),
      SMCPlanDevYear: Joi.string().trim(),
      SBCConstituted: Joi.string().trim(),
      AcademicCommitteeConstituted: Joi.string().trim(),
      PTAConstituted: Joi.string().trim(),
      PTAMeetingLastAcademicYear: Joi.string().trim(),
      PFMSregistered: Joi.string().trim(),
      MutiClassSchool: Joi.string().trim(),
      classtogether1: Joi.string().trim(),
      muticlassnostudent1: Joi.string().trim(),
      classtogether2: Joi.string().trim(),
      muticlassnostudent2: Joi.string().trim(),
      classtogether3: Joi.string().trim(),
      muticlassnostudent3: Joi.string().trim(),
      SchoolPartofComplex: Joi.string().trim(),
      HubSchoolComplex: Joi.string().trim(),
      nopreprimaryschoolcomplex: Joi.string().trim(),
      noprimaryschoolcomplex: Joi.string().trim(),
      noupperprimaryschoolcomplex: Joi.string().trim(),
      nosecondaryschoolcomplex: Joi.string().trim(),
      nohigherseconadryschoolcomplex: Joi.string().trim(),
      totalschoolcomplex: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection1A50 = {
  params: Joi.object().keys({
    Section1A50Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1A50,
  getAllSection1A50,
  getSection1A50,
  updateSection1A50,
  deleteSection1A50,
};
