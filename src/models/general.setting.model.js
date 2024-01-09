const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const generalSetting = mongoose.Schema(
  {
    schoolname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    mobileno: {
      type: Number,
    },
    email: {
      type: String,
    },
    scode: {
      type: String,
      required: true,
    },
    sessionId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'sessions',
      required: true,
      trim: true,
    },
    sessionStartMonth: {
      type: String,
    },
    Attendance: {
      type: String,
    },
    biometricAttendance: {
      type: String,
      enum: ['Disabled', 'Enabled'],
      default: 'Disabled',
    },
    devices: {
      type: String,
    },
    Language: {
      type: String,
    },
    languageRTLTextMode: {
      type: String,
      enum: ['Disabled', 'Enabled'],
      default: 'Disabled',
    },
    dateFormat: {
      type: String,
    },
    timezone: {
      type: String,
    },
    currency: {
      type: String,
    },
    currencySymbol: {
      type: String,
    },
    admissionNo: {
      type: String,
      enum: ['Disabled', 'Enabled'],
      default: 'Disabled',
    },
    admissionNoPrefix: {
      type: String,
    },
    admissionNoDigit: {
      type: Number,
    },
    admissionStartFrom: {
      type: String,
    },
    autoStaffID: {
      type: String,
      enum: ['Disabled', 'Enabled'],
      default: 'Disabled',
    },
    staffIdPrefix: {
      type: String,
    },
    staffNoDigit: {
      type: Number,
    },
    staffIdStartFrom: {
      type: String,
    },
    duplicateFeesInvoice: {
      type: String,
      enum: ['Disabled', 'Enabled'],
      default: 'Disabled',
    },
    onlineAdmission: {
      type: String,
      enum: ['Disabled', 'Enabled'],
      default: 'Disabled',
    },
    feesDueDays: {
      type: Number,
    },
    teacherRestrictedMode: {
      type: String,
      enum: ['Disabled', 'Enabled'],
      default: 'Disabled',
    },
    // mobileAppApiUrl: {
    //   type: String,
    // },
    // mobileAppPrimaryColorCode: {
    //   type: String,
    // },
    // mobileAppSecondaryColorCode: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
generalSetting.plugin(toJSON);
generalSetting.plugin(paginate);

const GeneralSetting = mongoose.model('GeneralSetting', generalSetting);

module.exports = GeneralSetting;
