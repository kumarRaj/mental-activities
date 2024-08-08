const mongoose = require('mongoose');

// Define a User schema for MongoDB
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      trim: true,
      unique: true,
      maxlength: [50, 'Username cannot be more than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the User model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
