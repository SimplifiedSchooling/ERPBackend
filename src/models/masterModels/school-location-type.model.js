const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const schoolLocationSchema = mongoose.Schema(
  {
    locationType: {
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
schoolLocationSchema.plugin(toJSON);
schoolLocationSchema.plugin(paginate);

const SchoolLocationType = mongoose.model('SchoolLocationType', schoolLocationSchema);

module.exports = SchoolLocationType;
