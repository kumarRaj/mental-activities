const users = []
const auth = require('../authorisation/authService.js');
var User = require('../models/user.js');

exports.register = async (username, email, password) => {
    const hashedPassword = await auth.hashPassword(password);
    const user = new User( username, email, hashedPassword );
    users.push(user);
    return user;
};

exports.authenticateUser = async (username, password) => {
    const user = users.find((user) => user.username === username);
    if (!user || !(await auth.comparePassword(password, user.password))) {
        return { success: false, error: 'Unauthorized' };
    }

    const token = auth.generateToken(username);
    return { success: true, token: token };
 };
