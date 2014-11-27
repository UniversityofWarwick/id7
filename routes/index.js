var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'University of Warwick', cb: new Date().getTime() });
});

router.get('/subpage', function(req, res) {
  res.render('subpage', { title: 'University of Warwick', cb: new Date().getTime() });
});

module.exports = router;
