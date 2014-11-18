var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'University of Warwick' });
});

router.get('/subpage', function(req, res) {
  res.render('subpage', { title: 'University of Warwick' });
});

module.exports = router;
