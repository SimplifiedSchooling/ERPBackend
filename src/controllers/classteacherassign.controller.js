const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { classTeacherServices } = require('../services');

const createClassteacher = catchAsync(async (req, res) => {
  const newClassteacher = await classTeacherServices.createClassTeacher(req.body);
  res.status(httpStatus.CREATED).send(newClassteacher);
});

const getClassteacher = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['classId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allClassteacher = await classTeacherServices.getAllClassTeacher(filter, options);
  res.send(allClassteacher);
});

const getByBookIdClassteacher = catchAsync(async (req, res) => {
  const result = await classTeacherServices.getByBookIdClassteacher(req.params.bookId);
  res.send(result);
});

const getSingleClassteacher = catchAsync(async (req, res) => {
  const singleClassteacher = await classTeacherServices.getClassTeacherById(req.params.classteacherId);
  if (!singleClassteacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Classteacher not found');
  }
  res.send(singleClassteacher);
});

const getClassteacherByFilter = catchAsync(async (req, res) => {
  const { boardId, mediumId, classId, subjectId, bookId } = req.params;
  const chapter = await classTeacherServices.getClassteachersByFilter(boardId, mediumId, classId, subjectId, bookId);
  if (!chapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Classteacher not found');
  }
  res.send(chapter);
});

const getClassteachersByBookId = catchAsync(async (req, res) => {
  const AllClassteacher = await classTeacherServices.getClassteachersByBookId(req.params.bookId);
  if (!AllClassteacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Classteachers not found');
  }
  res.send(AllClassteacher);
});

const updateSingleClassTeacher = catchAsync(async (req, res) => {
  const updateddClass = await classTeacherServices.updateClassTeacherById(req.params.classteacherId, req.body);
  res.send(updateddClass);
});

const deleteSingleClassteacher = catchAsync(async (req, res) => {
  const deletedClassteacher = await classTeacherServices.deleteClassTeacherById(req.params.classteacherId);
  res.status(httpStatus.NO_CONTENT).send(deletedClassteacher);
});

module.exports = {
  createClassteacher,
  getClassteacher,
  getSingleClassteacher,
  updateSingleClassTeacher,
  deleteSingleClassteacher,
  getClassteachersByBookId,
  getClassteacherByFilter,
  getByBookIdClassteacher,
};
