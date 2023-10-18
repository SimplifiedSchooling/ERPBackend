const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const assectSchema = mongoose.Schema(
  {
    assectName: {
      type: String,
      trim: true,
    },
    invoiceNo: {
      type: Number,
      trim: true,
    },
    invoiceDate: {
      type: Date,
      trim: true,
    },
    quantity: {
      type: Number,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imagePath: {
      type: String,
    },
    totalasset: {
      type: Number,
      trim: true,
    },
    totaldestroyed: {
      type: Number,
      trim: true,
    },
    expiredate: {
      type: Date,
      trim: true,
    },
    reason: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to JSON
assectSchema.plugin(toJSON);
assectSchema.plugin(paginate);

const Assect = mongoose.model('Assect', assectSchema);

module.exports = Assect;
