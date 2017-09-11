const mongoose = require('mongoose');
const Nav = require('./nav');
const Todo = require('./todo');

mongoose.connect('mongodb://127.0.0.1:27017/koa2-app', function (err) {
  if (err) {
    console.error('connect error', err.message);
    process.exit(1);
  }
});

module.exports = {
  Nav,
  Todo,
};
