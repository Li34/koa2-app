const nav = require('../services/nav');

const render = async (ctx, next) => {
  const data = await nav.getNavs();
  await ctx.render('index', {
    navs: data
  })
};

module.exports = {
  render,
};
