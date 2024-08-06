const users = []
var User = require('../models/user.js');

exports.register = async (user) => {
    users.push(user)
};

exports.authenticateUser = async (username, password) => {
    const validUser = users.find(
        (user) => user.username === username && user.password === password
    );

    if (validUser) {
        return { success: true, user: validUser };
    } else {
        return { success: false, error: 'Unauthorized' };
    }
 };
