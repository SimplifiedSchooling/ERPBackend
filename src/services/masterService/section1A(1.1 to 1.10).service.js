const httpStatus = require('http-status');
const Section1A10Schema = require('../../models/masterModels/section1A(1.1 to 1.10).model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Section1A10Schema
 * @param {Object} Section1A10SchemaBody
 * @returns {Promise<Section1A10Schema>}
 */
const createsection1A10 = async (Section1A10SchemaBody) => {
  return Section1A10Schema.create(Section1A10SchemaBody);
};

/**
 * Query for section1A10
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllsection1A10 = async (filter, options) => {
  const section1A10 = await Section1A10Schema.paginate(filter, options);
  return section1A10;
};

/**
 * Get Section1A10Schema by id
 * @param {ObjectId} id
 * @returns {Promise<Section1A10Schema>}
 */
const getsection1A10ById = async (id) => {
  return Section1A10Schema.findById(id);
};

/**
 * Update Section1A10Schema by id
 * @param {ObjectId} section1A10Id
 * @param {Object} updateBody
 * @returns {Promise<Section1A10Schema>}
 */
const updatesection1A10ById = async (section1A10Id, updateBody) => {
  const typesection1A10 = await getsection1A10ById(section1A10Id);
  if (!typesection1A10) {
    throw new ApiError(httpStatus.NOT_FOUND, 'section1A10 not found');
  }
  Object.assign(typesection1A10, updateBody);
  await typesection1A10.save();
  return typesection1A10;
};

/**
 * Delete Section1A10Schema by id
 * @param {ObjectId} section1A10Id
 * @returns {Promise<Section1A10Schema>}
 */
const deletesection1A10ById = async (section1A10Id) => {
  const section1A10 = await getsection1A10ById(section1A10Id);
  if (!section1A10) {
    throw new ApiError(httpStatus.NOT_FOUND, 'section1A10 not found');
  }
  await section1A10.remove();
  return section1A10;
};

// const calculateSchoolCounts = async () => {
//   try {
//     const pipeline = [
//       {
//         $group: {
//           _id: {
//             district: '$districtname',
//             block: '$udiseblock',
//             schoolType: '$typeofschool',
//           },
//           count: { $sum: 1 },
//         },
//       },
//       {
//         $group: {
//           _id: {
//             district: '$_id.district',
//             block: '$_id.block',
//           },
//           schoolCounts: {
//             $push: {
//               schoolType: '$_id.schoolType',
//               count: '$count',
//             },
//           },
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           district: '$_id.district',
//           block: '$_id.block',
//           schoolCounts: 1,
//         },
//       },
//     ];

//     const result = await Section1A10Schema.aggregate(pipeline);

//     // Process the result to calculate the total school counts for each district and block
//     const districtBlockCounts = {};

//     result.forEach((item) => {
//       const district = item.district;
//       const block = item.block;
//       const schoolCounts = {};

//       item.schoolCounts.forEach((schoolTypeCount) => {
//         schoolCounts[schoolTypeCount.schoolType] = schoolTypeCount.count;
//       });

//       if (!districtBlockCounts[district]) {
//         districtBlockCounts[district] = {};
//       }

//       districtBlockCounts[district][block] = schoolCounts;
//     });

//     return districtBlockCounts;
//   } catch (error) {
//     throw error;
//   }
// };

const calculateSchoolCounts = async () => {
  try {
    const pipeline = [
      {
        $group: {
          _id: {
            district: '$districtname',
            block: '$udiseblock',
            schoolType: '$typeofschool',
          },
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: {
            district: '$_id.district',
            block: '$_id.block',
          },
          schoolCounts: {
            $push: {
              schoolType: '$_id.schoolType',
              count: '$count',
            },
          },
        },
      },
      {
        $group: {
          _id: '$_id.district',
          blockCounts: {
            $push: {
              block: '$_id.block',
              schools: '$schoolCounts',
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          district: '$_id',
          blocks: '$blockCounts',
        },
      },
    ];

    const result = await Section1A10Schema.aggregate(pipeline);

    // Calculate total number of blocks and total school counts
    let totalBlocks = 0;
 

    const districtBlockCounts = {};

    result.forEach((item) => {
      const district = item.district;
      const blocks = item.blocks;
      let districtTotalBlocks = 0;
      let districtTotalSchools = 0;

      blocks.forEach((block) => {
        const blockName = block.block;
        const schools = block.schools;

        districtTotalBlocks += 1;
        totalBlocks += 1;

        schools.forEach((school) => {
          const schoolType = school.schoolType;
          const schoolCount = school.count;

          districtTotalSchools += schoolCount;
         
        });

        if (!districtBlockCounts[district]) {
          districtBlockCounts[district] = {};
        }

        districtBlockCounts[district][blockName] = {
          totalBlocks: districtTotalBlocks,
        
        };
      });
    });

    return {
      totalBlocks,
   
      districtBlockCounts,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createsection1A10,
  getAllsection1A10,
  getsection1A10ById,
  updatesection1A10ById,
  deletesection1A10ById,
  calculateSchoolCounts
};
