var express = require('express');
var router = express.Router();

/* GET method home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page',    
  });
});

/* GET method home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',    
  });
});

/* GET Tracker page. */
router.get('/tracker', function(req, res, next) {
  res.render('index', { 
    title: 'Tracker',    
  });
});

module.exports = router;
