/* eslint-disable no-console */
const mongoose = require('mongoose');
const User = require('./User');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(process.env.MONGO_URI, mongooseOptions).then(() => console.log('DB connected'));

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`);
});

module.exports = { User };
