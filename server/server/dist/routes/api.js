var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api1', function(req, res, next) {
  res.send("I AM TRYJANEhahah");
  // res.render('index', { title: 'Express' });
});

module.exports = router;
