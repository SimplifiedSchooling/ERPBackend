const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const saralInformation2Schema = mongoose.Schema(
  {
    scode: {
      type: String,
    },
    maintenancegrant: {
      type: String,
      required: true,
      trim: true,
    },
    buildingrant: {
      type: String,
      required: true,
      trim: true,
    },
    pariposhan: {
      type: String,
      required: true,
      trim: true,
    },
    buildingrent: {
      type: Number,
      required: true,
      trim: true,
    },
    othergrant: {
      type: String,
      required: true,
      trim: true,
    },
    childenroll: {
      type: Number,
      required: true,
      trim: true,
    },
    nostuadmissionquota: {
      type: Number,
      required: true,
      trim: true,
    },
    nobookfiction: {
      type: Number,
      required: true,
      trim: true,
    },
    nobooknonfiction: {
      type: Number,
      required: true,
      trim: true,
    },
    magazine: {
      type: String,
      required: true,
      trim: true,
    },
    jsmagazine: {
      type: Number,
      required: true,
      trim: true,
    },
    rbook: {
      type: String,
      required: true,
      trim: true,
    },
    tobaccoinside: {
      type: String,
      required: true,
      trim: true,
    },
    smokingarea: {
      type: String,
      required: true,
      trim: true,
    },
    infotobacco: {
      type: String,
      required: true,
      trim: true,
    },
    cotpa: {
      type: String,
      required: true,
      trim: true,
    },
    tobaccoinsideper: {
      type: String,
      required: true,
      trim: true,
    },
    signage: {
      type: String,
      required: true,
      trim: true,
    },
    controltobacco: {
      type: String,
      required: true,
      trim: true,
    },
    intiativetobacco: {
      type: String,
      required: true,
      trim: true,
    },
    statenodaloff: {
      type: String,
      required: true,
      trim: true,
    },
    antitobacco: {
      type: String,
      required: true,
      trim: true,
    },
    controltobaccocommite: {
      type: String,
      required: true,
      trim: true,
    },
    meetreport: {
      type: String,
      required: true,
      trim: true,
    },
    tobaccofreeschool: {
      type: String,
      required: true,
      trim: true,
    },
    tobaccoyard: {
      type: String,
      required: true,
      trim: true,
    },
    tfet: {
      type: String,
      required: true,
      trim: true,
    },
    evidencetobacco: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
saralInformation2Schema.plugin(toJSON);
saralInformation2Schema.plugin(paginate);

saralInformation2Schema.index({ scode: 1 }, { unique: true });
const SaralInformation2 = mongoose.model('SaralInformation2', saralInformation2Schema);
SaralInformation2.createIndexes();

module.exports = SaralInformation2;
