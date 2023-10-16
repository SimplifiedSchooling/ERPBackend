// const httpStatus = require('http-status');
// const pick = require('../utils/pick');
// const ApiError = require('../utils/ApiError');
// const catchAsync = require('../utils/catchAsync');
// const { attendanceVerifyService } = require('../services');

// const createAttendanceVerify = catchAsync(async (req, res) => {
//   const attendanceVerify = await attendanceVerifyService.createAttendanceVerify(req.body);
//   res.status(httpStatus.CREATED).send(attendanceVerify);
// });

// const queryAttendanceVerify = catchAsync(async (req, res) => {
//   const filter = pick(req.query, ['name']);
//   const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   const result = await boardService.queryBoard(filter, options);
//   res.send(result);
// });

// const getBoard = catchAsync(async (req, res) => {
//   const board = await boardService.getBoardById(req.params.boardId);
//   if (!board) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Board not found');
//   }
//   res.send(board);
// });

// const updateBoard = catchAsync(async (req, res) => {
//   const board = await boardService.updateBoardById(req.params.boardId, req.body);
//   res.send(board);
// });

// const deleteBoard = catchAsync(async (req, res) => {
//   await boardService.deleteBoardById(req.params.boardId);
//   res.status(httpStatus.NO_CONTENT).send();
// });

// module.exports = {
//   createAttendanceVerify,
//   queryBoard,
//   getBoard,
//   updateBoard,
//   deleteBoard,
// };
