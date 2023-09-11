const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const staffschema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    saral_id: {
      type: String,
      required: true,
      unique: true,
    },
    scode: {
      type: String,
    },
    employee_id: {
      type: Number,
      required: true,
      unique: true,
    },
    designation: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    work_exp: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      required: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    contact_no: {
      type: String,
      required: true,
    },
    emergency_contact_no: {
      type: String,
    },
    dob: {
      type: Date,
      required: true,
    },
    marital_status: {
      type: String,
    },
    String_of_joining: {
      type: String,
      required: true,
    },
    String_of_leaving: {
      type: String,
      required: true,
    },
    local_address: {
      type: String,
      required: true,
    },
    permanent_address: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    image: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
      private: true, // used by the toJSON plugin
    },
    gender: {
      type: String,
      required: true,
    },
    account_title: {
      type: String,
    },
    bank_account_no: {
      type: Number,
      required: true,
    },
    bank_name: {
      type: String,
      required: true,
    },
    ifsc_code: {
      type: String,
      required: true,
    },
    bank_branch: {
      type: String,
      required: true,
    },
    payscale: {
      type: String,
      required: true,
    },
    basic_salary: {
      type: Number,
      required: true,
    },
    epf_no: {
      type: Number,
      required: true,
    },
    contract_type: {
      type: String,
      required: true,
    },
    shift: {
      type: String,
    },
    location: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
    resume: {
      type: String,
      required: true,
    },
    joining_letter: {
      type: String,
      required: true,
    },
    resignation_letter: {
      type: String,
    },
    other_document_name: {
      type: String,
    },
    other_document_file: {
      type: String,
    },
    aadharno: {
      type: Number,
      required: true,
      unique: true,
    },
    levelupsub: {
      type: String,
    },
    levelupsubsci: {
      type: String,
    },
    levelupsubeng: {
      type: String,
    },
    levelupsubSoc: {
      type: String,
    },
    levelupsublang: {
      type: String,
    },
    academicquali: {
      type: String,
      required: true,
    },
    academicdegree: {
      type: String,
      required: true,
    },
    academicgraduatedegree: {
      type: String,
      required: true,
    },
    academicpostdegree: {
      type: String,
    },
    professsionalquali: {
      type: String,
      required: true,
    },
    disabilityifany: {
      type: String,
    },
    teachercodeut: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
    },
    verification_code: {
      type: Number,
      required: true,
    },
    Social_Category: {
      type: String,
    },
    religion: {
      type: String,
    },
    Highest_Prof_Qua: {
      type: String,
    },
    Classes_Taught: {
      type: String,
    },
    Appointed_for_Subject: {
      type: String,
    },
    upper_pri_subject: {
      type: String,
    },
    secondary_subject: {
      type: String,
    },
    Main_Subject_Taught_1: {
      type: String,
    },
    Main_Subject_Taught_2: {
      type: String,
    },
    BRC: {
      type: String,
    },
    CRC: {
      type: String,
    },
    DIET: {
      type: String,
    },
    Others: {
      type: String,
    },
    Training_Recieved: {
      type: String,
    },
    Training_Need: {
      type: String,
    },
    Non_Teaching_Ass: {
      type: String,
    },
    Maths_Studied_UpTo: {
      type: String,
    },
    Science_Studied_UpTo: {
      type: String,
    },
    English_Studied_UpTo: {
      type: String,
    },
    Language_Studied_UpTo: {
      type: String,
    },
    ss_Studied_UpTo: {
      type: String,
    },
    Work_SincepresentSchool: {
      type: String,
    },
    TypeofDisabilityifAny: {
      type: String,
    },
    Trained_for_CWSN: {
      type: String,
    },
    Trained_in_Computer: {
      type: String,
    },
    natureappointment: {
      type: String,
    },
    typeofteacher: {
      type: String,
    },
    String_of_joiningss: {
      type: String,
    },
    String_of_joiningpresentschool: {
      type: String,
    },
    appointedlevel: {
      type: String,
    },
    teacherdeput: {
      type: String,
    },
    Guest: {
      type: String,
    },
    language1: {
      type: String,
    },
    language2: {
      type: String,
    },
    language3: {
      type: String,
    },
    trainedteachercwsn: {
      type: String,
    },
    trainedteacher: {
      type: String,
    },
    cwsneducation: {
      type: String,
    },
    safety_security: {
      type: String,
    },
    psycho_social: {
      type: String,
    },
    earlycwsn: {
      type: String,
    },
    remoteclasses: {
      type: String,
    },
    remotesession: {
      type: String,
    },
    avgict: {
      type: String,
    },
    lang_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
staffschema.plugin(toJSON);
staffschema.plugin(paginate);

staffschema.index({ saral_id: 1 }, { unique: true });
const staffs = mongoose.model('staffs', staffschema);
staffs.createIndexes();

module.exports = mongoose.model('staffs', staffschema);

/**
 * The schema for a staff.
 * @typedef {object} staffs
 * @property {string} saral_id The user's saral_id.
 * @property {string} scode The user's scode.
 */
