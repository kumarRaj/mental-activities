var express = require('express');
var router = express.Router();
var userService = require('../service/userService.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Register new user */
router.post('/register', function(req, res, next) {
   userService.register(req, res)
});

module.exports = router;
