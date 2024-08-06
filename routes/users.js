var express = require('express');
var router = express.Router();
var userService = require('../service/userService.js')
var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Register new user */
router.post('/register', function(req, res, next) {
    const { username, email, password } = req.body;
    try {
        let user = new User(username, email, password)
        userService.register(user)
        res.status(201).json({ user });
    } catch (error) {
    console.log(error)
      res.status(400).json({ error: 'Registration failed' });
    }
});

/* Login user */
router.post('/login', function(req, res, next) {
   userService.login(req, res)
});

module.exports = router;
