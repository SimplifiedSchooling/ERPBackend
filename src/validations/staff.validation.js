const Joi = require('joi');
const { objectId } = require('./custom.validation');

const staffSchema = Joi.object().keys({
  saral_id: Joi.string().required(),
  scode: Joi.string(),
  employee_id: Joi.number().required(),
  designation: Joi.string().required(),
  qualification: Joi.string().required(),
  work_exp: Joi.number().required(),
  name: Joi.string().required(),
  middlename: Joi.string().required(),
  father_name: Joi.string().required(),
  contact_no: Joi.string().required(),
  emergency_contact_no: Joi.string(),
  dob: Joi.date().required(),
  marital_status: Joi.string(),
  String_of_joining: Joi.string().required(),
  String_of_leaving: Joi.string().required(),
  local_address: Joi.string().required(),
  permanent_address: Joi.string().required(),
  note: Joi.string(),
  image: Joi.string(),
  username: Joi.string().required(),
  password: Joi.string()
    .required()
    .min(8)
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
    .error(new Error('Password must contain at least one letter and one number')),
  gender: Joi.string().required(),
  account_title: Joi.string(),
  bank_account_no: Joi.number().required(),
  bank_name: Joi.string().required(),
  ifsc_code: Joi.string().required(),
  bank_branch: Joi.string().required(),
  payscale: Joi.string().required(),
  basic_salary: Joi.number().required(),
  epf_no: Joi.number().required(),
  contract_type: Joi.string().required(),
  shift: Joi.string(),
  location: Joi.string(),
  facebook: Joi.string(),
  twitter: Joi.string(),
  linkedin: Joi.string(),
  instagram: Joi.string(),
  resume: Joi.string().required(),
  joining_letter: Joi.string().required(),
  resignation_letter: Joi.string(),
  other_document_name: Joi.string(),
  other_document_file: Joi.string(),
  aadharno: Joi.number().required(),
  levelupsub: Joi.string(),
  levelupsubsci: Joi.string(),
  levelupsubeng: Joi.string(),
  levelupsubSoc: Joi.string(),
  levelupsublang: Joi.string(),
  academicquali: Joi.string().required(),
  academicdegree: Joi.string().required(),
  academicgraduatedegree: Joi.string().required(),
  academicpostdegree: Joi.string(),
  professsionalquali: Joi.string().required(),
  disabilityifany: Joi.string(),
  teachercodeut: Joi.string(),
  user_id: Joi.string().required(),
  is_active: Joi.boolean().required(),
  verification_code: Joi.number().required(),
  Social_Category: Joi.string(),
  religion: Joi.string(),
  Highest_Prof_Qua: Joi.string(),
  Classes_Taught: Joi.string(),
  Appointed_for_Subject: Joi.string(),
  upper_pri_subject: Joi.string(),
  secondary_subject: Joi.string(),
  Main_Subject_Taught_1: Joi.string(),
  Main_Subject_Taught_2: Joi.string(),
  BRC: Joi.string(),
  CRC: Joi.string(),
  DIET: Joi.string(),
  Others: Joi.string(),
  Training_Recieved: Joi.string(),
  Training_Need: Joi.string(),
  Non_Teaching_Ass: Joi.string(),
  Maths_Studied_UpTo: Joi.string(),
  Science_Studied_UpTo: Joi.string(),
  English_Studied_UpTo: Joi.string(),
  Language_Studied_UpTo: Joi.string(),
  ss_Studied_UpTo: Joi.string(),
  Work_SincepresentSchool: Joi.string(),
  TypeofDisabilityifAny: Joi.string(),
  Trained_for_CWSN: Joi.string(),
  Trained_in_Computer: Joi.string(),
  natureappointment: Joi.string(),
  typeofteacher: Joi.string(),
  String_of_joiningss: Joi.string(),
  String_of_joiningpresentschool: Joi.string(),
  appointedlevel: Joi.string(),
  teacherdeput: Joi.string(),
  Guest: Joi.string(),
  language1: Joi.string(),
  language2: Joi.string(),
  language3: Joi.string(),
  trainedteachercwsn: Joi.string(),
  trainedteacher: Joi.string(),
  cwsneducation: Joi.string(),
  safety_security: Joi.string(),
  psycho_social: Joi.string(),
  earlycwsn: Joi.string(),
  remoteclasses: Joi.string(),
  remotesession: Joi.string(),
  avgict: Joi.string(),
  lang_id: Joi.string(),
});

const getAllStaff = {
  query: Joi.object().keys({
    name: Joi.string(),
    employee_id: Joi.number(),
    username: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getStaff = {
  params: Joi.object().keys({
    staffId: Joi.string().custom(objectId),
  }),
};

const updateStaff = {
  params: Joi.object().keys({
    staffId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      saral_id: Joi.string(),
      scode: Joi.string(),
      employee_id: Joi.number(),
      designation: Joi.string(),
      qualification: Joi.string(),
      work_exp: Joi.number(),
      name: Joi.string(),
      middlename: Joi.string(),
      father_name: Joi.string(),
      contact_no: Joi.string(),
      emergency_contact_no: Joi.string(),
      dob: Joi.date(),
      marital_status: Joi.string(),
      String_of_joining: Joi.string(),
      String_of_leaving: Joi.string(),
      local_address: Joi.string(),
      permanent_address: Joi.string(),
      note: Joi.string(),
      image: Joi.string(),
      gender: Joi.string(),
      account_title: Joi.string(),
      bank_account_no: Joi.number(),
      bank_name: Joi.string(),
      ifsc_code: Joi.string(),
      bank_branch: Joi.string(),
      payscale: Joi.string(),
      basic_salary: Joi.number(),
      epf_no: Joi.number(),
      contract_type: Joi.string(),
      shift: Joi.string(),
      location: Joi.string(),
      facebook: Joi.string(),
      twitter: Joi.string(),
      linkedin: Joi.string(),
      instagram: Joi.string(),
      resume: Joi.string(),
      joining_letter: Joi.string(),
      resignation_letter: Joi.string(),
      other_document_name: Joi.string(),
      other_document_file: Joi.string(),
      aadharno: Joi.number(),
      levelupsub: Joi.string(),
      levelupsubsci: Joi.string(),
      levelupsubeng: Joi.string(),
      levelupsubSoc: Joi.string(),
      levelupsublang: Joi.string(),
      academicquali: Joi.string(),
      academicdegree: Joi.string(),
      academicgraduatedegree: Joi.string(),
      academicpostdegree: Joi.string(),
      professsionalquali: Joi.string(),
      disabilityifany: Joi.string(),
      teachercodeut: Joi.string(),
      user_id: Joi.string(),
      is_active: Joi.boolean(),
      verification_code: Joi.number(),
      Social_Category: Joi.string(),
      religion: Joi.string(),
      Highest_Prof_Qua: Joi.string(),
      Classes_Taught: Joi.string(),
      Appointed_for_Subject: Joi.string(),
      upper_pri_subject: Joi.string(),
      secondary_subject: Joi.string(),
      Main_Subject_Taught_1: Joi.string(),
      Main_Subject_Taught_2: Joi.string(),
      BRC: Joi.string(),
      CRC: Joi.string(),
      DIET: Joi.string(),
      Others: Joi.string(),
      Training_Recieved: Joi.string(),
      Training_Need: Joi.string(),
      Non_Teaching_Ass: Joi.string(),
      Maths_Studied_UpTo: Joi.string(),
      Science_Studied_UpTo: Joi.string(),
      English_Studied_UpTo: Joi.string(),
      Language_Studied_UpTo: Joi.string(),
      ss_Studied_UpTo: Joi.string(),
      Work_SincepresentSchool: Joi.string(),
      TypeofDisabilityifAny: Joi.string(),
      Trained_for_CWSN: Joi.string(),
      Trained_in_Computer: Joi.string(),
      natureappointment: Joi.string(),
      typeofteacher: Joi.string(),
      String_of_joiningss: Joi.string(),
      String_of_joiningpresentschool: Joi.string(),
      appointedlevel: Joi.string(),
      teacherdeput: Joi.string(),
      Guest: Joi.string(),
      language1: Joi.string(),
      language2: Joi.string(),
      language3: Joi.string(),
      trainedteachercwsn: Joi.string(),
      trainedteacher: Joi.string(),
      cwsneducation: Joi.string(),
      safety_security: Joi.string(),
      psycho_social: Joi.string(),
      earlycwsn: Joi.string(),
      remoteclasses: Joi.string(),
      remotesession: Joi.string(),
      avgict: Joi.string(),
      lang_id: Joi.string(),
    })
    .min(1),
};

const deleteStaff = {
  params: Joi.object().keys({
    staffId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  staffSchema,
  getAllStaff,
  getStaff,
  updateStaff,
  deleteStaff,
};
