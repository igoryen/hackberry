var express = require('express'); // 7
var router = express.Router(); // 8

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' }); // 9
});

module.exports = router; // 10
