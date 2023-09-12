const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const section1A10Schema = mongoose.Schema(
  {
    udisecode: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    schoolname: {
      type: String,
      required: true,
      trim: true,
    },
    districtId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'district',
      required: true,
      trim: true,
    },
    udiseblockId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'udiseblock',
      required: true,
      trim: true,
    },
    typeofschool: {
      type: String,
      required: false,
      trim: true,
    },
    revenueblock: {
      type: String,
      required: false,
      trim: true,
    },
    villagename: {
      type: String,
      required: false,
      trim: true,
    },
    grampanchayatname: {
      type: String,
      required: false,
      trim: true,
    },
    urbanlocalbodies: {
      type: String,
      required: false,
      trim: true,
    },
    wardname: {
      type: String,
      required: false,
      trim: true,
    },
    address: {
      type: String,
      required: false,
      trim: true,
    },
    pincode: {
      type: String,
      required: false,
      trim: true,
    },
    assemblyconstituency: {
      type: String,
      required: false,
      trim: true,
    },
    parliamentaryconstituency: {
      type: String,
      required: false,
      trim: true,
    },
    latitude: {
      type: String,
      required: false,
      trim: true,
    },
    longitude: {
      type: String,
      required: false,
      trim: true,
    },
    std_code: {
      type: String,
      required: false,
      trim: true,
    },
    landline: {
      type: String,
      required: false,
      trim: true,
    },
    mobileno: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
    },
    website: {
      type: String,
      required: false,
      trim: true,
    },
    profilecount: {
      type: String,
      required: false,
      trim: true,
    },
    scode: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
section1A10Schema.plugin(toJSON);
section1A10Schema.plugin(paginate);

const Section1A10Schema = mongoose.model('section1A10Schema', section1A10Schema);

module.exports = Section1A10Schema;
