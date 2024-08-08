var express = require('express');
var router = express.Router();
var userService = require('../service/userService.js')
var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Register new user */
router.post('/register', async function(req, res, next) {
    const { username, email, password } = req.body;
    try {
        const user = await userService.register(username, email, password)
        // TODO: stop returning password here
        res.status(201).json({ user });
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Registration failed' });
    }
});

/* Login user */
router.post('/login', async function(req, res, next) {
    const { username, password } = req.body;
    try {
        const result = await userService.authenticateUser(username, password);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(401).json({ error: result.error });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Login failed' });
    }
});

module.exports = router;
