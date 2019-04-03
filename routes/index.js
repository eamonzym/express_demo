var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});
/* GET home page. */
// 这里是后端的路由，我这里接收/index的路由
router.get('/api/books', function(req, res, next) {
  res.status(200).json({
    error_code: 0,
    reason: 'Success',
    result: {
      data: [
        {
          title: '枪·血玫瑰·Necromancer',
          code: 20595
        },
        {
          title: '热血传奇之绝对计划',
          code: 20596
        },
        {
          title: '人鬼情',
          code: 20597
        }
      ]
    }
  })
});

module.exports = router;
