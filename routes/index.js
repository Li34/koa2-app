const fs = require('fs');
const path = require('path');
const koaRouter = require('koa-router');
const nav = require('../controllers/nav');

const router = koaRouter();

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) && (file.split('.').slice(-1)[0] === 'js')
    && file !== 'index.js'
  )
  .forEach(file => {
    console.log(file);
    const route = require(path.join(__dirname, file));
    router.use(route.routes(), route.allowedMethods());
  })

router.get('/', nav.render);

module.exports = router;
