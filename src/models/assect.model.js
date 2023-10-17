const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const assectSchema = mongoose.Schema(
  {
    assectName: {
      type: String,
      trim: true,
    },
    count: [
      {
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
        imagePath: {
          type: String,
        },
      },
    ],
    total: {
      type: Number,
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
