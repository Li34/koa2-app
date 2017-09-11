const koaRouter = require('koa-router');
const todo = require('../controllers/todo');

const router = koaRouter({
  prefix: '/todo'
});

router.get('/', todo.render);
router.post('/add', todo.add);

module.exports = router;
