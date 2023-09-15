const httpStatus = require('http-status');
const { Mapping, Chapter } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a mapping
 * @param {Object} mappingBody
 * @returns {Promise<Mapping>}
 */
const createMapping = async (mappingBody) => {
  return Mapping.create(mappingBody);
};

/**
 * Query for medium
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<Mapping>}
 */

const getAllMaping = async (filter, options) => {
  const mapping = await Mapping.paginate(filter, options);
  return mapping;
};

/**
 *  mapping
 * @returns {Promise<AggegateResult>}
 */

const queryMapping = async () => {
  const result = await Mapping.aggregate([
    {
      $lookup: {
        from: 'subjects', // The name of the subject collection in your database
        localField: 'subjectId',
        foreignField: '_id',
        as: 'subject',
      },
    },
    {
      $unwind: '$subject', // Unwind the subject array created by the $lookup stage
    },
    {
      $project: {
        boardId: 1,
        mediumId: 1,
        classId: 1,
        'subject.name': 1, // Include subject fields from the unwound array
        'subject.code': 1,
        'subject.order': 1,
        'subject.thumbnail': 1,
        bookId: 1,
        name: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    },
    {
      $group: {
        _id: '$classId',
        subjects: {
          $push: '$subject',
        },
        boardId: {
          $first: '$boardId',
        },
        mediumId: {
          $first: '$mediumId',
        },
        classId: {
          $first: '$classId',
        },
        bookId: {
          $first: '$bookId',
        },
        name: {
          $first: '$name',
        },
        createdAt: {
          $first: '$createdAt',
        },
        updatedAt: {
          $first: '$updatedAt',
        },
      },
    },
  ]);

  return result;
};

/**
 *  mapping
 * @returns {Promise<AggegateResult>}
 */

// const queryMappingByBookId = async (bookId) => {
//   console.log(bookId)
//   const result = await Chapter.aggregate([
//     {
//       $match: {
//         bookId: mongoose.Types.ObjectId(bookId), // Convert bookId to ObjectId if it's not already
//       },
//     },
//     // {
//     //   $lookup: {
//     //     from: 'chapters',
//     //     localField: 'bookId',
//     //     foreignField: 'bookId',
//     //     as: 'chapter',
//     //   },
//     // },
//     // {
//     //   $unwind: '$chapter',
//     // },
//     {
//       $lookup: {
//         from: 'multimedias',
//         localField: '_id',
//         foreignField: 'chapterId',
//         as: 'multimedia',
//       },
//     },
//     {
//       $unwind: '$multimedia',
//     },
//     {
//       $project: {
//         // boardId: 1,
//         // mediumId: 1,
//         // classId: 1,
//         // 'chapter.chapterName': 1,
//         // 'chapter.code': 1,
//         // 'chapter.order': 1,
//         // 'chapter.thumbnail': 1,
//         'multimedia.lessionName': 1,
//         'multimedia.icon1': 1,
//         'multimedia.icon2': 1,
//         'multimedia.path': 1,
//         'multimedia.multimediaType': 1,
//         'multimedia.videoType': 1,
//         // subjectId: 1,
//         // bookId: 1,
//         // name: 1,
//         // createdAt: 1,
//         // updatedAt: 1,
//       },
//     },
//     {
//       $group: {
//         _id: '$bookId',
//         // chapters: {
//         //   $push: '$chapter',
//         // },
//         multimedia: {
//           $push: '$multimedia',
//         },
//         // boardId: {
//         //   $first: '$boardId',
//         // },
//         // mediumId: {
//         //   $first: '$mediumId',
//         // },
//         // classId: {
//         //   $first: '$classId',
//         // },
//         // bookId: {
//         //   $first: '$bookId',
//         // },
//         // name: {
//         //   $first: '$name',
//         // },
//         // createdAt: {
//         //   $first: '$createdAt',
//         // },
//         // updatedAt: {
//         //   $first: '$updatedAt',
//         // },
//       },
//     },
//   ]);
//   return result;
// };

/**
 * Get mapping by id
 * @param {ObjectId} id
 * @returns {Promise<Mapping>}
 */
const getMappingById = async (id) => {
  return Mapping.findById(id);
};

/**
 * Update mapping by id
 * @param {ObjectId} mappingId
 * @param {Object} updateBody
 * @returns {Promise<Mapping>}
 */
const updateMappingById = async (mappingId, updateBody) => {
  const mapping = await getMappingById(mappingId);
  if (!mapping) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mapping not found');
  }
  Object.assign(mapping, updateBody);
  await mapping.save();
  return mapping;
};

/**
 * Delete mapping by id
 * @param {ObjectId} mappingId
 * @returns {Promise<Mapping>}
 */
const deleteMappingById = async (mappingId) => {
  const mapping = await getMappingById(mappingId);
  if (!mapping) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mapping not found');
  }
  await mapping.remove();
  return mapping;
};

module.exports = {
  createMapping,
  queryMapping,
  getMappingById,
  updateMappingById,
  deleteMappingById,
  queryMappingByBookId,
  getAllMaping,
};
