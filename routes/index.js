var express = require('express'); // 7
var router = express.Router(); // 8

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' }); // 9
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' }) // 14
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db; // 20
  var collection = db.get('usercollection'); // 22
  // 21
  collection.find({},{},function(e,docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

module.exports = router; // 10
