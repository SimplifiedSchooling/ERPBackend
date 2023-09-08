const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const managementCodeSchoolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: Number,
      required: true,
      trim: true,
    },
    group: {
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
managementCodeSchoolSchema.plugin(toJSON);
managementCodeSchoolSchema.plugin(paginate);

const Schoolmanagment = mongoose.model('Managementcode', managementCodeSchoolSchema);

module.exports = Schoolmanagment;
