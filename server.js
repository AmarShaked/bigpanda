const express = require('express');
const path = require('path');
const config = require('./server/config');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('build'));


mongoose.connect(config.mongo.url);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});


config.express.registerMiddlewares(app);
config.routes.registerRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Hi Big Panda, your app waiting on port ' + port);
});