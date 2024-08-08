const mongoose = require('mongoose');

const userActivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  completedActivities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: true,
  }],
}, {
  timestamps: true,
});


const UserActivityModel = mongoose.model('UserActivity', userActivitySchema);

module.exports = UserActivityModel;
