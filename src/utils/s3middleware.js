const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');
const s3Client = require('./cdn');

const createStorage = (location) =>
  multerS3({
    s3: s3Client,
    bucket: location, // Dynamic bucket based on location
    acl: 'public-read',
    key(req, file, cb) {
      cb(null, `${uuidv4()}${file.originalname}`);
    },
  });

const createS3Middleware = (location) => multer({ storage: createStorage(location) }).single('file');

module.exports = createS3Middleware;
