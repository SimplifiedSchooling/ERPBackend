// const mongoose = require('mongoose');
// const { toJSON, paginate } = require('../plugins');

// const section1A_10Schema = mongoose.Schema(
//   {
//     udise_code: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     schoolname: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     schoolname: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     districtId: {
//       type: mongoose.SchemaTypes.ObjectId,
//       ref: 'district',
//       required: true,
//       trim: true,
//     },
//     udiseblockId: {
//       type: mongoose.SchemaTypes.ObjectId,
//       ref: 'udiseblock',
//       required: true,
//       trim: true,
//     },
//     typeofschool: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     revenueblock: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     villagename: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     grampanchayatname: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     urbanlocalbodies: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     wardname: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     address: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     pincode: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     assembly_constituency: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // add plugin that converts mongoose to json
// section1A_10Schema.plugin(toJSON);
// section1A_10Schema.plugin(paginate);

// const Section1A_10Schema = mongoose.model('section1A_10Schema', section1A_10Schema);

// module.exports = Section1A_10Schema;
