const users = []
var User = require('../models/user.js');

exports.register = async (req, res) => {
    // TODO: Refactor so that service doesn't know about request
    const { username, email, password } = req.body;
    try {
        let user = new User(username, email, password)
        users.push(user)
        res.status(201).json({ user });
    } catch (error) {
        console.log(error)
      res.status(400).json({ error: 'Registration failed' });
    }
  };
  