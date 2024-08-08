const mongoose = require('mongoose');

// Define the Activity schema
const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
  },
  duration: {
    type: String, // Duration in minutes
    required: [true, 'Duration is required'],
  },
  difficultyLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: [true, 'Difficulty level is required'],
  },
  activityContent: {
    type: String,
    required: [true, 'Activity content is required'],
  },
  creationTimestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Activity model
const ActivityModel = mongoose.model('Activity', activitySchema);

module.exports = ActivityModel;
