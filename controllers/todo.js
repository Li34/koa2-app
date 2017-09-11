const todo = require('../services/todo');

const render = async (ctx, next) => {
  const data = await todo.getTodos();
  await ctx.render('todo', {
    todos: data
  })
};

const add = async (ctx, next) => {
  const body = ctx.request.body;
  await todo.addTodo(body);
  ctx.redirect('/todo');
}

module.exports = {
  render,
  add
};
