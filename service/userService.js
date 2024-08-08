const auth = require('../authorisation/authService.js');
const User = require('../models/user.js');
const userMapper = require('../models/mapper/userMapper.js');
const UserModel = require('../models/mongoose/userSchema.js');


exports.register = async (username, email, password) => {
    const hashedPassword = await auth.hashPassword(password);
    const user = new User( username, email, hashedPassword );
    // Map domain user to MongoDB model
    const mongoUser = userMapper.toMongo(user);
    const newUser = new UserModel(mongoUser);

    // Save the user to MongoDB
    await newUser.save();

    return userMapper.toDomain(newUser);
};

exports.authenticateUser = async (username, password) => {
    const user = await UserModel.findOne({ username });

    if (!user || !(await auth.comparePassword(password, user.password))) {
        return { success: false, error: 'Unauthorized' };
    }

    const token = auth.generateToken(user._id);
    return { success: true, token: token };
 };
