var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TutorHall' });
});

/* GET login page*/
router.get('/login', (req, res, next) => { res.render('login', { title: 'Login to TutorHall' }); });

/* GET signup page*/
router.get('/signup', (req, res, next) => { res.render('signup', { title: 'Register for TutorHall Account' }); });


module.exports = router;
