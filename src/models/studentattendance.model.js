const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const StudentAttendanceSchema = mongoose.Schema(
  {
    StudentSessionId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'studentsession',
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
    },
    attendancetype: {
      type: String,
      enum: ['present', 'absent', 'halfday', 'holiday'],
      required: true,
      default: 'present',
    },
    remark: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
StudentAttendanceSchema.plugin(toJSON);
StudentAttendanceSchema.plugin(paginate);

const StudentAttendance = mongoose.model('StudentAttendance', StudentAttendanceSchema);

module.exports = StudentAttendance;
