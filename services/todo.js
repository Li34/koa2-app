const Model = require('../models/index');

const getTodos = () => {
  return Model.Todo.find().exec()
}

const addTodo = (options) => {
  return Model.Todo.create(options)
}

module.exports = {
  getTodos,
  addTodo
};
