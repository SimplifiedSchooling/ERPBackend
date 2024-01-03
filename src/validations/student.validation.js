const Joi = require('joi');
// const { password } = require('./custom.validation');

const createStudent = {
  body: Joi.object().keys({
    saral_id: Joi.string().required(),
    sectionId: Joi.string(),
    classId: Joi.string(),
    sessionId: Joi.string(),
    scode: Joi.string().required(),
    role: Joi.string().required(),
    mobNumber: Joi.number(),
    age: Joi.number().required(),
    email: Joi.string().required(),
    admission_no: Joi.string(),
    roll_no: Joi.string(),
    orphan: Joi.string(),
    orphanname: Joi.string(),
    bpl: Joi.string(),
    bplyear: Joi.string(),
    stdincome: Joi.string(),
    initialadmistand: Joi.string(),
    admissiontype: Joi.string(),
    mothertongue: Joi.string(),
    hivparent: Joi.string(),
    childinfected: Joi.string(),
    bplnumber: Joi.string(),
    nameadhar_no: Joi.string(),
    admission_date: Joi.string(),
    firstname: Joi.string(),
    middlename: Joi.string(),
    lastname: Joi.string(),
    rte: Joi.string(),
    image: Joi.string(),
    state: Joi.string(),
    studtype: Joi.string(),
    city: Joi.string(),
    pincode: Joi.string(),
    religion: Joi.string(),
    cast: Joi.string(),
    dob: Joi.string(),
    gender: Joi.string(),
    current_address: Joi.string(),
    permanent_address: Joi.string(),
    category_id: Joi.string(),
    route_id: Joi.string(),
    school_house_id: Joi.string(),
    blood_group: Joi.string(),
    vehroute_id: Joi.string(),
    hostel_room_id: Joi.string(),
    adhar_no: Joi.string(),
    samagra_id: Joi.string(),
    aadhar_back: Joi.string(),
    bank_account_no: Joi.string(),
    bank_name: Joi.string(),
    ifsc_code: Joi.string(),
    guardian_is: Joi.string(),
    father_name: Joi.string(),
    father_phone: Joi.string(),
    father_occupation: Joi.string(),
    mother_name: Joi.string(),
    mother_phone: Joi.string(),
    mother_occupation: Joi.string(),
    guardian_name: Joi.string(),
    guardian_relation: Joi.string(),
    guardian_phone: Joi.string(),
    guardian_occupation: Joi.string(),
    guardian_address: Joi.string(),
    guardian_email: Joi.string(),
    father_pic: Joi.string(),
    mother_pic: Joi.string(),
    guardian_pic: Joi.string(),
    is_active: Joi.string(),
    previous_school: Joi.string(),
    height: Joi.string(),
    weight: Joi.string(),
    student_health_check1: Joi.string(),
    student_health_check2: Joi.string(),
    disability: Joi.string(),
    certifi_disability_avai: Joi.string(),
    disability1: Joi.string(),
    disability_type: Joi.string(),
    percentage: Joi.string(),
    certifi_number: Joi.string(),
    certifi_date: Joi.string(),
    certifi_auth: Joi.string(),
    certificate_up: Joi.string(),
    mirc_code: Joi.string(),
    measurement_date: Joi.string(),
    dis_reason: Joi.string(),
    note: Joi.string(),
    dis_note: Joi.string(),
    app_key: Joi.string(),
    parent_app_key: Joi.string(),
    disable_at: Joi.string(),
    relaxAgeLimit: Joi.string(),
    studentnationality: Joi.string(),
    identificationMark1: Joi.string(),
    identificationMark2: Joi.string(),
    agerelaxation: Joi.string(),
    hostel_id: Joi.string(),
    academicstreamopt: Joi.string(),
    statustudprevyear: Joi.string(),
    admitunderpvt: Joi.string(),
    prevclassstudiedappe: Joi.string(),
    prevclassstudiedres: Joi.string(),
    facilitiesprov: Joi.string(),
    schstudent: Joi.string(),
    centralsch: Joi.string(),
    stateschol: Joi.string(),
    otherschol: Joi.string(),
    scholamout: Joi.string(),
    sldchild: Joi.string(),
    cwsnfacilitie1: Joi.string(),
    asdchild: Joi.string(),
    adhdchild: Joi.string(),
    stdinvextacurricularact: Joi.string(),
    cwsnfacilitie: Joi.string(),
    math: Joi.string(),
    technical: Joi.string(),
    language: Joi.string(),
    sport: Joi.string(),
    science: Joi.string(),
    art: Joi.string(),
    mentorprovid: Joi.string(),
    nurturance: Joi.string(),
    nurturancestate: Joi.string(),
    nurturancenational: Joi.string(),
    appeareslc: Joi.string(),
    participncc: Joi.string(),
    vocationalcourse: Joi.string(),
    classstudprev: Joi.string(),
    free_Text_Book: Joi.boolean(),
    free_Uniforms: Joi.boolean(),
    free_Transport_Facility: Joi.boolean(),
    free_Escort: Joi.boolean(),
    free_By_Cycle: Joi.boolean(),
    free_Mobile_Tablet_Computer: Joi.boolean(),
    free_Hostel: Joi.boolean(),
    schcode: Joi.string(),
    braille_Book: Joi.boolean(),
    braille_Kit: Joi.boolean(),
    low_Vision_Kit: Joi.boolean(),
    hearing_Aid: Joi.boolean(),
    braces: Joi.boolean(),
    crutches: Joi.boolean(),
    wheel_Chair: Joi.boolean(),
    tri_cycle: Joi.boolean(),
    caliper: Joi.boolean(),
    escort: Joi.boolean(),
    stipend: Joi.boolean(),
    other: Joi.boolean(),
    trade: Joi.string(),
    jobrole: Joi.string(),
    theoryhrs: Joi.string(),
    practicalhrs: Joi.string(),
    traininghrs: Joi.string(),
    fieldvisit: Joi.string(),
    examprevclasvocsub: Joi.string(),
    marksobtain: Joi.string(),
    studappliedforplacemant: Joi.string(),
    studeappliedforapprentice: Joi.string(),
  }),
};

const studentSchema = Joi.object().keys({
  campusId: Joi.string(),
  name: Joi.string(),
  mobNumber: Joi.number(),
  age: Joi.number(),
  email: Joi.string(),
  department: Joi.string(),
  class: Joi.string(),
  section: Joi.string(),
  lastname: Joi.string(),
});

const getStudent = {
  params: Joi.object().keys({
    studentId: Joi.string(),
  }),
};

const getStudentByScode = {
  params: Joi.object().keys({
    scode: Joi.string(),
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
      saral_id: Joi.string(),
      sectionId: Joi.string(),
      classId: Joi.string(),
      sessionId: Joi.string(),
      scode: Joi.string(),
      mobNumber: Joi.number(),
      age: Joi.number(),
      email: Joi.string(),
      admission_no: Joi.string(),
      roll_no: Joi.string(),
      orphan: Joi.string(),
      orphanname: Joi.string(),
      bpl: Joi.string(),
      bplyear: Joi.string(),
      stdincome: Joi.string(),
      initialadmistand: Joi.string(),
      admissiontype: Joi.string(),
      mothertongue: Joi.string(),
      hivparent: Joi.string(),
      childinfected: Joi.string(),
      bplnumber: Joi.string(),
      nameadhar_no: Joi.string(),
      admission_date: Joi.string(),
      firstname: Joi.string(),
      middlename: Joi.string(),
      lastname: Joi.string(),
      rte: Joi.string(),
      image: Joi.string(),
      state: Joi.string(),
      studtype: Joi.string(),
      city: Joi.string(),
      pincode: Joi.string(),
      religion: Joi.string(),
      cast: Joi.string(),
      dob: Joi.string(),
      gender: Joi.string(),
      current_address: Joi.string(),
      permanent_address: Joi.string(),
      category_id: Joi.string(),
      route_id: Joi.string(),
      school_house_id: Joi.string(),
      blood_group: Joi.string(),
      vehroute_id: Joi.string(),
      hostel_room_id: Joi.string(),
      adhar_no: Joi.string(),
      samagra_id: Joi.string(),
      aadhar_back: Joi.string(),
      bank_account_no: Joi.string(),
      bank_name: Joi.string(),
      ifsc_code: Joi.string(),
      guardian_is: Joi.string(),
      father_name: Joi.string(),
      father_phone: Joi.string(),
      father_occupation: Joi.string(),
      mother_name: Joi.string(),
      mother_phone: Joi.string(),
      mother_occupation: Joi.string(),
      guardian_name: Joi.string(),
      guardian_relation: Joi.string(),
      guardian_phone: Joi.string(),
      guardian_occupation: Joi.string(),
      guardian_address: Joi.string(),
      guardian_email: Joi.string(),
      father_pic: Joi.string(),
      mother_pic: Joi.string(),
      guardian_pic: Joi.string(),
      is_active: Joi.string(),
      previous_school: Joi.string(),
      height: Joi.string(),
      weight: Joi.string(),
      student_health_check1: Joi.string(),
      student_health_check2: Joi.string(),
      disability: Joi.string(),
      certifi_disability_avai: Joi.string(),
      disability1: Joi.string(),
      disability_type: Joi.string(),
      percentage: Joi.string(),
      certifi_number: Joi.string(),
      certifi_date: Joi.string(),
      certifi_auth: Joi.string(),
      certificate_up: Joi.string(),
      mirc_code: Joi.string(),
      measurement_date: Joi.string(),
      dis_reason: Joi.string(),
      note: Joi.string(),
      dis_note: Joi.string(),
      app_key: Joi.string(),
      parent_app_key: Joi.string(),
      relaxAgeLimit: Joi.string(),
      studentnationality: Joi.string(),
      identificationMark1: Joi.string(),
      identificationMark2: Joi.string(),
      agerelaxation: Joi.string(),
      hostel_id: Joi.string(),
      academicstreamopt: Joi.string(),
      statustudprevyear: Joi.string(),
      admitunderpvt: Joi.string(),
      prevclassstudiedappe: Joi.string(),
      prevclassstudiedres: Joi.string(),
      facilitiesprov: Joi.string(),
      schstudent: Joi.string(),
      centralsch: Joi.string(),
      stateschol: Joi.string(),
      otherschol: Joi.string(),
      scholamout: Joi.string(),
      sldchild: Joi.string(),
      cwsnfacilitie1: Joi.string(),
      asdchild: Joi.string(),
      adhdchild: Joi.string(),
      stdinvextacurricularact: Joi.string(),
      cwsnfacilitie: Joi.string(),
      math: Joi.string(),
      technical: Joi.string(),
      language: Joi.string(),
      sport: Joi.string(),
      science: Joi.string(),
      art: Joi.string(),
      mentorprovid: Joi.string(),
      nurturance: Joi.string(),
      nurturancestate: Joi.string(),
      nurturancenational: Joi.string(),
      appeareslc: Joi.string(),
      participncc: Joi.string(),
      vocationalcourse: Joi.string(),
      classstudprev: Joi.string(),
      free_Text_Book: Joi.boolean(),
      free_Uniforms: Joi.boolean(),
      free_Transport_Facility: Joi.boolean(),
      free_Escort: Joi.boolean(),
      free_By_Cycle: Joi.boolean(),
      free_Mobile_Tablet_Computer: Joi.boolean(),
      free_Hostel: Joi.boolean(),
      schcode: Joi.string(),
      braille_Book: Joi.boolean(),
      braille_Kit: Joi.boolean(),
      low_Vision_Kit: Joi.boolean(),
      hearing_Aid: Joi.boolean(),
      braces: Joi.boolean(),
      crutches: Joi.boolean(),
      wheel_Chair: Joi.boolean(),
      tri_cycle: Joi.boolean(),
      caliper: Joi.boolean(),
      escort: Joi.boolean(),
      stipend: Joi.boolean(),
      other: Joi.boolean(),
      trade: Joi.string(),
      jobrole: Joi.string(),
      theoryhrs: Joi.string(),
      practicalhrs: Joi.string(),
      traininghrs: Joi.string(),
      fieldvisit: Joi.string(),
      examprevclasvocsub: Joi.string(),
      marksobtain: Joi.string(),
      studappliedforplacemant: Joi.string(),
      studeappliedforapprentice: Joi.string(),
      laboratoryDue: Joi.boolean(),
      libraryDue: Joi.boolean(),
      feedDue: Joi.boolean(),
      otherDue: Joi.boolean(),
      transferStatus: Joi.boolean(),
      studentEnroll: Joi.boolean(),
    })
    .min(),
};
const deleteStudentById = {
  params: Joi.object().keys({
    studentId: Joi.string(),
  }),
};

module.exports = {
  createStudent,
  studentSchema,
  getStudent,
  getAllStudents,
  updateStudentById,
  deleteStudentById,
  getStudentByScode,
};
