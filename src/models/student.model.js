const mongoose = require('mongoose');
// const uuid = require('node-uuid');
// const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const studentSchema = new mongoose.Schema(
  {
    // studentId: {
    //   type: String,
    //   default: uuid.v1,
    // },
    // saral_id: {
    //   type: String,
    //   required: true,
    // },
    // scode: {
    //   type: String,
    //   required: true,
    // },
    role: {
      type: String,
      default: 'student',
    },
    name: {
      type: String,
      required: true,
    },
    mobNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    age: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: String,
    },
    // password: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   minlength: 8,
    //   validate(value) {
    //     if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    //       throw new Error('Password must contain at least one letter and one number');
    //     }
    //   },
    //   private: true, // used by the toJSON plugin
    // },
    campusId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Campus',
      required: true,
      trim: true,
    },
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    // parent_id: String,
    // admission_no: String,
    // roll_no: String,
    // admission_date: String,
    // firstname: String,
    // middlename: String,
    lastname: String,
    // rte: String,
    // image: String,
    // mobileno: String,
    // email: String,
    // state: String,
    // city: String,
    // pincode: String,
    // religion: String,
    // cast: String,
    // dob: String,
    gender: String,
    // current_address: String,
    // permanent_address: String,
    // category_id: String,
    // route_id: String,
    // school_house_id: String,
    // blood_group: String,
    // vehroute_id: String,
    // hostel_room_id: String,
    // adhar_no: String,
    // nameadhar_no: String,
    // samagra_id: String,
    // aadhar_back: String,
    // bank_account_no: String,
    // bank_name: String,
    // ifsc_code: String,
    // guardian_is: String,
    // father_name: String,
    // father_phone: String,
    // father_occupation: String,
    // mother_name: String,
    // mother_phone: String,
    // mother_occupation: String,
    // guardian_name: String,
    // guardian_relation: String,
    // guardian_phone: String,
    // guardian_occupation: String,
    // guardian_address: String,
    // guardian_email: String,
    // father_pic: String,
    // mother_pic: String,
    // guardian_pic: String,
    // is_active: String,
    // previous_school: String,
    // height: String,
    // weight: String,
    // student_health_check1: String,
    // student_health_check2: String,
    // disability: String,
    // certifi_disability_avai: String,
    // disability1: String,
    // disability_type: String,
    // percentage: String,
    // certifi_number: String,
    // certifi_date: String,
    // certifi_auth: String,
    // certificate_up: String,
    // orphan: String,
    // orphanname: String,
    // bpl: String,
    // bplyear: String,
    // bplnumber: String,
    // stdincome: String,
    // initialadmistand: String,
    // admissiontype: String,
    // mothertongue: String,
    // hivparent: String,
    // childinfected: String,
    // studtype: String,
    // mirc_code: String,
    // measurement_date: String,
    // dis_reason: String,
    // note: String,
    // dis_note: String,
    // app_key: String,
    // parent_app_key: String,
    // disable_at: String,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
studentSchema.plugin(toJSON);
studentSchema.plugin(paginate);

/**
 * Check if userName is taken
 * @param {string} mobNumber - The user's mobNumber
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
studentSchema.statics.isUserNameTaken = async function (mobNumber, excludeUserId) {
  const student = await this.findOne({ mobNumber, _id: { $ne: excludeUserId } });
  return !!student;
};

// /**
//  * Check if password matches the user's password
//  * @param {string} password
//  * @returns {Promise<boolean>}
//  */
// studentSchema.methods.isPasswordMatch = async function (password) {
//   const student = this;
//   return bcrypt.compare(password, student.password);
// };

// studentSchema.pre('save', async function (next) {
//   const student = this;
//   if (student.isModified('password')) {
//     student.password = await bcrypt.hash(student.password, 8);
//   }
//   next();
// });

// studentSchema.index({ saral_id: 1 }, { unique: true });
const Students = mongoose.model('Students', studentSchema);
module.exports = Students;
