const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1A53 = {
  body: Joi.object().keys({
    EBSBActivity: Joi.string().trim(),
    textbookreceivedpreprimary: Joi.string().trim(),
    textbookreceivedprimary: Joi.string().trim(),
    textbookreceivedupperprimary: Joi.string().trim(),
    textbookreceivedsecondary: Joi.string().trim(),
    textbookreceivedhighersecondary: Joi.string().trim(),
    txtrecacayearpreprimary: Joi.string().trim(),
    txtrecacayearprimary: Joi.string().trim(),
    txtrecacayearupperprimary: Joi.string().trim(),
    txtrecacayearsecondary: Joi.string().trim(),
    txtrecacayearhighersecondary: Joi.string().trim(),
    TMLpreprimary: Joi.string().trim(),
    TMLprimary: Joi.string().trim(),
    TMLupperprimary: Joi.string().trim(),
    TMLsecondary: Joi.string().trim(),
    TMLhighersecondary: Joi.string().trim(),
    noofchildTMLpreprimary: Joi.string().trim(),
    noofchildTMLprimary: Joi.string().trim(),
    noofchildTMLupperprimary: Joi.string().trim(),
    noofchildTMLsecondary: Joi.string().trim(),
    noofchildTMLhighersecondary: Joi.string().trim(),
    TMLformathpreprimary: Joi.string().trim(),
    TMLformathprimary: Joi.string().trim(),
    TMLformathupperprimary: Joi.string().trim(),
    TMLformathsecondary: Joi.string().trim(),
    TMLformathhighersecondary: Joi.string().trim(),
    gradedmatpreprimary: Joi.string().trim(),
    gradedmatprimary: Joi.string().trim(),
    gradedmatupperprimary: Joi.string().trim(),
    gradedmatsecondary: Joi.string().trim(),
    gradedmathighersecondary: Joi.string().trim(),
    noofgradedmatpreprimary: Joi.string().trim(),
    noofgradedmatprimary: Joi.string().trim(),
    noofgradedmatupperprimary: Joi.string().trim(),
    noofgradedmatsecondary: Joi.string().trim(),
    noofgradedmathighersecondary: Joi.string().trim(),
    noofaccessgradedmatpreprimary: Joi.string().trim(),
    noofaccessgradedmatprimary: Joi.string().trim(),
    noofaccessgradedmatupperprimary: Joi.string().trim(),
    noofaccessgradedmatsecondary: Joi.string().trim(),
    noofaccessgradedmathighersecondary: Joi.string().trim(),
    noofbookspreprimary: Joi.string().trim(),
    noofbooksprimary: Joi.string().trim(),
    noofbooksupperprimary: Joi.string().trim(),
    noofbookssecondary: Joi.string().trim(),
    noofbookshighersecondary: Joi.string().trim(),
    noofbooksborpreprimary: Joi.string().trim(),
    noofbooksborprimary: Joi.string().trim(),
    noofbooksborupperprimary: Joi.string().trim(),
    noofbooksborsecondary: Joi.string().trim(),
    noofbooksborhighersecondary: Joi.string().trim(),
    noofparentalcompreprimary: Joi.string().trim(),
    noofparentalcomprimary: Joi.string().trim(),
    noofparentalcomupperprimary: Joi.string().trim(),
    noofparentalcomsecondary: Joi.string().trim(),
    noofparentalcomhighersecondary: Joi.string().trim(),
    FLNperprimary: Joi.string().trim(),
    FLNprimary: Joi.string().trim(),
    FLNupperprimary: Joi.string().trim(),
    FLNsecondary: Joi.string().trim(),
    FLNhighersecondary: Joi.string().trim(),
    peerlerpreprimary: Joi.string().trim(),
    peerlerprimary: Joi.string().trim(),
    peerlerupperprimary: Joi.string().trim(),
    peerlersecondary: Joi.string().trim(),
    peerlerhighersecondary: Joi.string().trim(),
    playmatavaipreprimary: Joi.string().trim(),
    playmatavaiprimary: Joi.string().trim(),
    playmatavaiupperprimary: Joi.string().trim(),
    playmatavaisecondary: Joi.string().trim(),
    playmatavaihighersecondary: Joi.string().trim(),
    freeuniformpreprimary: Joi.string().trim(),
    freeuniformprimary: Joi.string().trim(),
    freeuniformupperprimary: Joi.string().trim(),
    freeuniformsecondary: Joi.string().trim(),
    freeuniformhighersecondary: Joi.string().trim(),
    uniformpromonthpreprimary: Joi.string().trim(),
    uniformpromonthprimary: Joi.string().trim(),
    uniformpromonthupperprimary: Joi.string().trim(),
    uniformpromonthsecondary: Joi.string().trim(),
    uniformpromonthhigersecondary: Joi.string().trim(),
    learnoutcome1: Joi.string().trim(),
    learnoutcome2: Joi.string().trim(),
    learnoutcome3: Joi.string().trim(),
    learnoutcome4: Joi.string().trim(),
    learnoutcome5: Joi.string().trim(),
    learnoutcome6: Joi.string().trim(),
    learnoutcome7: Joi.string().trim(),
    learnoutcome8: Joi.string().trim(),
    learnoutcome9: Joi.string().trim(),
    learnoutcome10: Joi.string().trim(),
    learnoutcome11: Joi.string().trim(),
    learnoutcome12: Joi.string().trim(),
    noofcriterion1: Joi.string().trim(),
    noofcriterion2: Joi.string().trim(),
    noofcriterion3: Joi.string().trim(),
    noofcriterion4: Joi.string().trim(),
    noofcriterion5: Joi.string().trim(),
    noofcriterion6: Joi.string().trim(),
    noofcriterion7: Joi.string().trim(),
    noofcriterion8: Joi.string().trim(),
    noofcriterion9: Joi.string().trim(),
    noofcriterion10: Joi.string().trim(),
    noofcriterion11: Joi.string().trim(),
    noofcriterion12: Joi.string().trim(),
    teachingaids1: Joi.string().trim(),
    teachingaids2: Joi.string().trim(),
    teachingaids3: Joi.string().trim(),
    teachingaids4: Joi.string().trim(),
    teachingaids5: Joi.string().trim(),
    teachingaids6: Joi.string().trim(),
    teachingaids7: Joi.string().trim(),
    teachingaids8: Joi.string().trim(),
    teachingaids9: Joi.string().trim(),
    teachingaids10: Joi.string().trim(),
    teachingaids11: Joi.string().trim(),
    teachingaids12: Joi.string().trim(),
    activities1: Joi.string().trim(),
    activities2: Joi.string().trim(),
    activities3: Joi.string().trim(),
    activities4: Joi.string().trim(),
    activities5: Joi.string().trim(),
    activities6: Joi.string().trim(),
    activities7: Joi.string().trim(),
    activities8: Joi.string().trim(),
    activities9: Joi.string().trim(),
    activities10: Joi.string().trim(),
    activities11: Joi.string().trim(),
    activities12: Joi.string().trim(),
    hardsport1: Joi.string().trim(),
    hardsport2: Joi.string().trim(),
    hardsport3: Joi.string().trim(),
    hardsport4: Joi.string().trim(),
    hardsport5: Joi.string().trim(),
    hardsport6: Joi.string().trim(),
    hardsport7: Joi.string().trim(),
    hardsport8: Joi.string().trim(),
    hardsport9: Joi.string().trim(),
    hardsport10: Joi.string().trim(),
    hardsport11: Joi.string().trim(),
    hardsport12: Joi.string().trim(),
    orientationcybersafety1: Joi.string().trim(),
    orientationcybersafety2: Joi.string().trim(),
    orientationcybersafety3: Joi.string().trim(),
    orientationcybersafety4: Joi.string().trim(),
    orientationcybersafety5: Joi.string().trim(),
    orientationcybersafety6: Joi.string().trim(),
    orientationcybersafety7: Joi.string().trim(),
    orientationcybersafety8: Joi.string().trim(),
    orientationcybersafety9: Joi.string().trim(),
    orientationcybersafety10: Joi.string().trim(),
    orientationcybersafety11: Joi.string().trim(),
    orientationcybersafety12: Joi.string().trim(),
    trainingsocial1: Joi.string().trim(),
    trainingsocial2: Joi.string().trim(),
    trainingsocial3: Joi.string().trim(),
    trainingsocial4: Joi.string().trim(),
    trainingsocial5: Joi.string().trim(),
    trainingsocial6: Joi.string().trim(),
    trainingsocial7: Joi.string().trim(),
    trainingsocial8: Joi.string().trim(),
    trainingsocial9: Joi.string().trim(),
    trainingsocial10: Joi.string().trim(),
    trainingsocial11: Joi.string().trim(),
    trainingsocial12: Joi.string().trim(),
  }),
};

const getAllSection1A53 = {
  query: Joi.object().keys({
    primaryclass: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1A53 = {
  params: Joi.object().keys({
    Section1A53Id: Joi.string().custom(objectId),
  }),
};

const updateSection1A53 = {
  params: Joi.object().keys({
    Section1A53Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      EBSBActivity: Joi.string().trim(),
      textbookreceivedpreprimary: Joi.string().trim(),
      textbookreceivedprimary: Joi.string().trim(),
      textbookreceivedupperprimary: Joi.string().trim(),
      textbookreceivedsecondary: Joi.string().trim(),
      textbookreceivedhighersecondary: Joi.string().trim(),
      txtrecacayearpreprimary: Joi.string().trim(),
      txtrecacayearprimary: Joi.string().trim(),
      txtrecacayearupperprimary: Joi.string().trim(),
      txtrecacayearsecondary: Joi.string().trim(),
      txtrecacayearhighersecondary: Joi.string().trim(),
      TMLpreprimary: Joi.string().trim(),
      TMLprimary: Joi.string().trim(),
      TMLupperprimary: Joi.string().trim(),
      TMLsecondary: Joi.string().trim(),
      TMLhighersecondary: Joi.string().trim(),
      noofchildTMLpreprimary: Joi.string().trim(),
      noofchildTMLprimary: Joi.string().trim(),
      noofchildTMLupperprimary: Joi.string().trim(),
      noofchildTMLsecondary: Joi.string().trim(),
      noofchildTMLhighersecondary: Joi.string().trim(),
      TMLformathpreprimary: Joi.string().trim(),
      TMLformathprimary: Joi.string().trim(),
      TMLformathupperprimary: Joi.string().trim(),
      TMLformathsecondary: Joi.string().trim(),
      TMLformathhighersecondary: Joi.string().trim(),
      gradedmatpreprimary: Joi.string().trim(),
      gradedmatprimary: Joi.string().trim(),
      gradedmatupperprimary: Joi.string().trim(),
      gradedmatsecondary: Joi.string().trim(),
      gradedmathighersecondary: Joi.string().trim(),
      noofgradedmatpreprimary: Joi.string().trim(),
      noofgradedmatprimary: Joi.string().trim(),
      noofgradedmatupperprimary: Joi.string().trim(),
      noofgradedmatsecondary: Joi.string().trim(),
      noofgradedmathighersecondary: Joi.string().trim(),
      noofaccessgradedmatpreprimary: Joi.string().trim(),
      noofaccessgradedmatprimary: Joi.string().trim(),
      noofaccessgradedmatupperprimary: Joi.string().trim(),
      noofaccessgradedmatsecondary: Joi.string().trim(),
      noofaccessgradedmathighersecondary: Joi.string().trim(),
      noofbookspreprimary: Joi.string().trim(),
      noofbooksprimary: Joi.string().trim(),
      noofbooksupperprimary: Joi.string().trim(),
      noofbookssecondary: Joi.string().trim(),
      noofbookshighersecondary: Joi.string().trim(),
      noofbooksborpreprimary: Joi.string().trim(),
      noofbooksborprimary: Joi.string().trim(),
      noofbooksborupperprimary: Joi.string().trim(),
      noofbooksborsecondary: Joi.string().trim(),
      noofbooksborhighersecondary: Joi.string().trim(),
      noofparentalcompreprimary: Joi.string().trim(),
      noofparentalcomprimary: Joi.string().trim(),
      noofparentalcomupperprimary: Joi.string().trim(),
      noofparentalcomsecondary: Joi.string().trim(),
      noofparentalcomhighersecondary: Joi.string().trim(),
      FLNperprimary: Joi.string().trim(),
      FLNprimary: Joi.string().trim(),
      FLNupperprimary: Joi.string().trim(),
      FLNsecondary: Joi.string().trim(),
      FLNhighersecondary: Joi.string().trim(),
      peerlerpreprimary: Joi.string().trim(),
      peerlerprimary: Joi.string().trim(),
      peerlerupperprimary: Joi.string().trim(),
      peerlersecondary: Joi.string().trim(),
      peerlerhighersecondary: Joi.string().trim(),
      playmatavaipreprimary: Joi.string().trim(),
      playmatavaiprimary: Joi.string().trim(),
      playmatavaiupperprimary: Joi.string().trim(),
      playmatavaisecondary: Joi.string().trim(),
      playmatavaihighersecondary: Joi.string().trim(),
      freeuniformpreprimary: Joi.string().trim(),
      freeuniformprimary: Joi.string().trim(),
      freeuniformupperprimary: Joi.string().trim(),
      freeuniformsecondary: Joi.string().trim(),
      freeuniformhighersecondary: Joi.string().trim(),
      uniformpromonthpreprimary: Joi.string().trim(),
      uniformpromonthprimary: Joi.string().trim(),
      uniformpromonthupperprimary: Joi.string().trim(),
      uniformpromonthsecondary: Joi.string().trim(),
      uniformpromonthhigersecondary: Joi.string().trim(),
      learnoutcome1: Joi.string().trim(),
      learnoutcome2: Joi.string().trim(),
      learnoutcome3: Joi.string().trim(),
      learnoutcome4: Joi.string().trim(),
      learnoutcome5: Joi.string().trim(),
      learnoutcome6: Joi.string().trim(),
      learnoutcome7: Joi.string().trim(),
      learnoutcome8: Joi.string().trim(),
      learnoutcome9: Joi.string().trim(),
      learnoutcome10: Joi.string().trim(),
      learnoutcome11: Joi.string().trim(),
      learnoutcome12: Joi.string().trim(),
      noofcriterion1: Joi.string().trim(),
      noofcriterion2: Joi.string().trim(),
      noofcriterion3: Joi.string().trim(),
      noofcriterion4: Joi.string().trim(),
      noofcriterion5: Joi.string().trim(),
      noofcriterion6: Joi.string().trim(),
      noofcriterion7: Joi.string().trim(),
      noofcriterion8: Joi.string().trim(),
      noofcriterion9: Joi.string().trim(),
      noofcriterion10: Joi.string().trim(),
      noofcriterion11: Joi.string().trim(),
      noofcriterion12: Joi.string().trim(),
      teachingaids1: Joi.string().trim(),
      teachingaids2: Joi.string().trim(),
      teachingaids3: Joi.string().trim(),
      teachingaids4: Joi.string().trim(),
      teachingaids5: Joi.string().trim(),
      teachingaids6: Joi.string().trim(),
      teachingaids7: Joi.string().trim(),
      teachingaids8: Joi.string().trim(),
      teachingaids9: Joi.string().trim(),
      teachingaids10: Joi.string().trim(),
      teachingaids11: Joi.string().trim(),
      teachingaids12: Joi.string().trim(),
      activities1: Joi.string().trim(),
      activities2: Joi.string().trim(),
      activities3: Joi.string().trim(),
      activities4: Joi.string().trim(),
      activities5: Joi.string().trim(),
      activities6: Joi.string().trim(),
      activities7: Joi.string().trim(),
      activities8: Joi.string().trim(),
      activities9: Joi.string().trim(),
      activities10: Joi.string().trim(),
      activities11: Joi.string().trim(),
      activities12: Joi.string().trim(),
      hardsport1: Joi.string().trim(),
      hardsport2: Joi.string().trim(),
      hardsport3: Joi.string().trim(),
      hardsport4: Joi.string().trim(),
      hardsport5: Joi.string().trim(),
      hardsport6: Joi.string().trim(),
      hardsport7: Joi.string().trim(),
      hardsport8: Joi.string().trim(),
      hardsport9: Joi.string().trim(),
      hardsport10: Joi.string().trim(),
      hardsport11: Joi.string().trim(),
      hardsport12: Joi.string().trim(),
      orientationcybersafety1: Joi.string().trim(),
      orientationcybersafety2: Joi.string().trim(),
      orientationcybersafety3: Joi.string().trim(),
      orientationcybersafety4: Joi.string().trim(),
      orientationcybersafety5: Joi.string().trim(),
      orientationcybersafety6: Joi.string().trim(),
      orientationcybersafety7: Joi.string().trim(),
      orientationcybersafety8: Joi.string().trim(),
      orientationcybersafety9: Joi.string().trim(),
      orientationcybersafety10: Joi.string().trim(),
      orientationcybersafety11: Joi.string().trim(),
      orientationcybersafety12: Joi.string().trim(),
      trainingsocial1: Joi.string().trim(),
      trainingsocial2: Joi.string().trim(),
      trainingsocial3: Joi.string().trim(),
      trainingsocial4: Joi.string().trim(),
      trainingsocial5: Joi.string().trim(),
      trainingsocial6: Joi.string().trim(),
      trainingsocial7: Joi.string().trim(),
      trainingsocial8: Joi.string().trim(),
      trainingsocial9: Joi.string().trim(),
      trainingsocial10: Joi.string().trim(),
      trainingsocial11: Joi.string().trim(),
      trainingsocial12: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection1A53 = {
  params: Joi.object().keys({
    Section1A53Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1A53,
  getAllSection1A53,
  getSection1A53,
  updateSection1A53,
  deleteSection1A53,
};