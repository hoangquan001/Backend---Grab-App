const mongoose = require('mongoose');
const config = require('../config');
const controllers = require('./controllers');
const { redis } = require('./utils');
const models = require('./models');
const loaders = require('./loaders');

mongoose.connect(config.mongodb.connnectionString, config.mongodb.options);

mongoose.connection.on('error', error => {
  logger.error('mongodb connection error', error);
});

mongoose.connection.on('connected', () => {
  logger.info('connected to mongoodb');
});

module.exports = {
  controllers: () => ({ ...controllers }),
  redisUtils: redis,
  models,
  loaders,
};
