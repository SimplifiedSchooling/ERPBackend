const Joi = require('joi');
// const { password } = require('./custom.validation');

const createStudent = {
  body: Joi.object().keys({
    // saral_id: Joi.string().required(),
    // scode: Joi.string().required(),
    campusId: Joi.string().required(),
    name: Joi.string().required(),
    mobNumber: Joi.number().required(),
    age: Joi.number().required(),
    email: Joi.string().required(),
    department: Joi.string().required(),
    class: Joi.string().required(),
    section: Joi.string().required(),
    // admission_no: Joi.string(),
    // roll_no: Joi.string(),
    // orphan: Joi.string(),
    // orphanname: Joi.string(),
    // bpl: Joi.string(),
    // bplyear: Joi.string(),
    // stdincome: Joi.string(),
    // initialadmistand: Joi.string(),
    // admissiontype: Joi.string(),
    // mothertongue: Joi.string(),
    // hivparent: Joi.string(),
    // childinfected: Joi.string(),
    // bplnumber: Joi.string(),
    // nameadhar_no: Joi.string(),
    // admission_date: Joi.string(),
    // firstname: Joi.string(),
    // middlename: Joi.string(),
    lastname: Joi.string(),
    // rte: Joi.string(),
    // image: Joi.string(),
    // mobileno: Joi.string(),
    // email: Joi.string(),
    // state: Joi.string(),
    // studtype: Joi.string(),
    // city: Joi.string(),
    // pincode: Joi.string(),
    // religion: Joi.string(),
    // cast: Joi.string(),
    // dob: Joi.string(),
    gender: Joi.string(),
    // current_address: Joi.string(),
    // permanent_address: Joi.string(),
    // category_id: Joi.string(),
    // route_id: Joi.string(),
    // school_house_id: Joi.string(),
    // blood_group: Joi.string(),
    // vehroute_id: Joi.string(),
    // hostel_room_id: Joi.string(),
    // adhar_no: Joi.string(),
    // samagra_id: Joi.string(),
    // aadhar_back: Joi.string(),
    // bank_account_no: Joi.string(),
    // bank_name: Joi.string(),
    // ifsc_code: Joi.string(),
    // guardian_is: Joi.string(),
    // father_name: Joi.string(),
    // father_phone: Joi.string(),
    // father_occupation: Joi.string(),
    // mother_name: Joi.string(),
    // mother_phone: Joi.string(),
    // mother_occupation: Joi.string(),
    // guardian_name: Joi.string(),
    // guardian_relation: Joi.string(),
    // guardian_phone: Joi.string(),
    // guardian_occupation: Joi.string(),
    // guardian_address: Joi.string(),
    // guardian_email: Joi.string(),
    // father_pic: Joi.string(),
    // mother_pic: Joi.string(),
    // guardian_pic: Joi.string(),
    // is_active: Joi.string(),
    // previous_school: Joi.string(),
    // height: Joi.string(),
    // weight: Joi.string(),
    // student_health_check1: Joi.string(),
    // student_health_check2: Joi.string(),
    // disability: Joi.string(),
    // certifi_disability_avai: Joi.string(),
    // disability1: Joi.string(),
    // disability_type: Joi.string(),
    // percentage: Joi.string(),
    // certifi_number: Joi.string(),
    // certifi_date: Joi.string(),
    // certifi_auth: Joi.string(),
    // certificate_up: Joi.string(),
    // mirc_code: Joi.string(),
    // measurement_date: Joi.string(),
    // dis_reason: Joi.string(),
    // note: Joi.string(),
    // dis_note: Joi.string(),
    // app_key: Joi.string(),
    // parent_app_key: Joi.string(),
    // disable_at: Joi.string(),
  }),
};

const getStudent = {
  params: Joi.object().keys({
    studentId: Joi.string(),
  }),
};

const getAllStudents = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateStudentById = {
  params: Joi.object().keys({
    studentId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      // saral_id: Joi.string().required(),
      // scode: Joi.string().required(),
      // parent_id: Joi.string(),
      campusId: Joi.string().required(),
      name: Joi.string().required(),
      mobNumber: Joi.number().required(),
      age: Joi.number().required(),
      email: Joi.string().required(),
      department: Joi.string().required(),
      class: Joi.string().required(),
      section: Joi.string().required(),
      // admission_no: Joi.string(),
      // roll_no: Joi.string(),
      // orphan: Joi.string(),
      // orphanname: Joi.string(),
      // bpl: Joi.string(),
      // bplyear: Joi.string(),
      // stdincome: Joi.string(),
      // initialadmistand: Joi.string(),
      // admissiontype: Joi.string(),
      // mothertongue: Joi.string(),
      // hivparent: Joi.string(),
      // childinfected: Joi.string(),
      // bplnumber: Joi.string(),
      // nameadhar_no: Joi.string(),
      // admission_date: Joi.string(),
      // firstname: Joi.string(),
      // middlename: Joi.string(),
      lastname: Joi.string(),
      // rte: Joi.string(),
      // image: Joi.string(),
      // mobileno: Joi.string(),
      // email: Joi.string(),
      // state: Joi.string(),
      // studtype: Joi.string(),
      // city: Joi.string(),
      // pincode: Joi.string(),
      // religion: Joi.string(),
      // cast: Joi.string(),
      // dob: Joi.string(),
      gender: Joi.string(),
      // current_address: Joi.string(),
      // permanent_address: Joi.string(),
      // category_id: Joi.string(),
      // route_id: Joi.string(),
      // school_house_id: Joi.string(),
      // blood_group: Joi.string(),
      // vehroute_id: Joi.string(),
      // hostel_room_id: Joi.string(),
      // adhar_no: Joi.string(),
      // samagra_id: Joi.string(),
      // aadhar_back: Joi.string(),
      // bank_account_no: Joi.string(),
      // bank_name: Joi.string(),
      // ifsc_code: Joi.string(),
      // guardian_is: Joi.string(),
      // father_name: Joi.string(),
      // father_phone: Joi.string(),
      // father_occupation: Joi.string(),
      // mother_name: Joi.string(),
      // mother_phone: Joi.string(),
      // mother_occupation: Joi.string(),
      // guardian_name: Joi.string(),
      // guardian_relation: Joi.string(),
      // guardian_phone: Joi.string(),
      // guardian_occupation: Joi.string(),
      // guardian_address: Joi.string(),
      // guardian_email: Joi.string(),
      // father_pic: Joi.string(),
      // mother_pic: Joi.string(),
      // guardian_pic: Joi.string(),
      // is_active: Joi.string(),
      // previous_school: Joi.string(),
      // height: Joi.string(),
      // weight: Joi.string(),
      // student_health_check1: Joi.string(),
      // student_health_check2: Joi.string(),
      // disability: Joi.string(),
      // certifi_disability_avai: Joi.string(),
      // disability1: Joi.string(),
      // disability_type: Joi.string(),
      // percentage: Joi.string(),
      // certifi_number: Joi.string(),
      // certifi_date: Joi.string(),
      // certifi_auth: Joi.string(),
      // certificate_up: Joi.string(),
      // mirc_code: Joi.string(),
      // measurement_date: Joi.string(),
      // dis_reason: Joi.string(),
      // note: Joi.string(),
      // dis_note: Joi.string(),
      // app_key: Joi.string(),
      // parent_app_key: Joi.string(),
    })
    .min(2),
};
const deleteStudentById = {
  params: Joi.object().keys({
    studentId: Joi.string(),
  }),
};

module.exports = {
  createStudent,
  getStudent,
  getAllStudents,
  updateStudentById,
  deleteStudentById,
};
