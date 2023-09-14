const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const studentSessionSchema = mongoose.Schema(
  {
    session_Id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Session',
      required: true,
      trim: true,
    },
    student_Id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Student',
      required: true,
      trim: true,
    },
    class_Id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Class',
      trim: true,
    },
    section_Id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Section',
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
studentSessionSchema.plugin(toJSON);
studentSessionSchema.plugin(paginate);

const Student_session = mongoose.model('Student_session', studentSessionSchema);

module.exports = Student_session;
