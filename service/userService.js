const users = []
var User = require('../models/user.js');

exports.register = async (user) => {
    users.push(user)
 };



exports.login = async (req, res) => {
    // TODO: Refactor so that service doesn't know about request
    const { username, password } = req.body;
    try {
        let validUser = users.filter((user) => user.username === username && user.password === password)
        if (validUser.length == 1){
            res.status(200).json( validUser[0] );
        } else {
            res.status(401).json({ error: "Unauthorised" });
        }
    } catch (error) {
        console.log(error)
      res.status(400).json({ error: 'Login failed' });
    }
  };
