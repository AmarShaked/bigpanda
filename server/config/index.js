const mongoConfig = require('./mongo');
const expressConfig = require('./express');
const routes = require('./routes');

exports.mongo = mongoConfig;
exports.express = expressConfig;
exports.routes = routes;