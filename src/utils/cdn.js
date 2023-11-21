const { S3Client } = require('@aws-sdk/client-s3');
const config = require('../config/config');

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = 'https://lmscontent-cdn.blr1.digitaloceanspaces.com';

// Create an S3 client
const s3Client = new S3Client({
  forcePathStyle: true,
  endpoint: spacesEndpoint,
  region: config.cdn.region,
  credentials: {
    accessKeyId: config.cdn.accessKey,
    secretAccessKey: config.cdn.secreteKey,
  },
});

module.exports = s3Client;
