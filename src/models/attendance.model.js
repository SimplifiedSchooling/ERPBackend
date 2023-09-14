const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const attendancechema = mongoose.Schema(
  {
    student_session_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Student_session',
      required: true,
      trim: true,
    },
    date: {
      type:String,
      required: true,
      trim: true
    },
    attedance_type: {
        type:String,
      required: true,
      trim: true,
    },
    remark: {
        type:String,
        required: true,
        trim: true
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
attendancechema.plugin(toJSON);
attendancechema.plugin(paginate);

const Attendance = mongoose.model('Attendance', attendancechema);

module.exports = Attendance;
