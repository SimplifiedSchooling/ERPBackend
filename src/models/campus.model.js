const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const campusSchema = mongoose.Schema(
  {
    mid: {
      type: Number,
    },
    name: {
      type: String,
    },
    contact_number: {
      type: String,
    },
    address: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
campusSchema.plugin(toJSON);
campusSchema.plugin(paginate);

const Campus = mongoose.model('Campus', campusSchema);

module.exports = Campus;
