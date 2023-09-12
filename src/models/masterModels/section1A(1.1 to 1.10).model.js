// const mongoose = require('mongoose');
// const { toJSON, paginate } = require('../plugins');

// const section1A_10Schema = mongoose.Schema(
//   {
//     UDISE_Code: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     schoolname: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     schoolname: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     districtId: {
//         type: mongoose.SchemaTypes.ObjectId,
//         ref: 'district',
//         required: true,
//         trim: true,
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
