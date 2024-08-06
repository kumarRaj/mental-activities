const Activity = require('../models/activity.js');
const { generateFixedActivities } = require('./defaultActivities.js');
activities = generateFixedActivities();
let nextId = activities.length ? Math.max(...activities.map(a => a.id)) + 1 : 1; // Generate the next ID
const userActivityMap = new Map();

exports.listActivities = async () => {
    return activities;
};

exports.createActivity = async (title, description, category, duration, difficultyLevel, content) => {
    if (!title || !description || !category || !duration || !difficultyLevel || !content) {
        throw new Error('All fields are required');
    }

    const newActivity = {
        id: nextId++,
        title,
        description,
        category,
        duration,
        difficultyLevel,
        content,
        creationTimestamp: new Date()
    };

    activities.push(newActivity);

    return newActivity;
};


exports.markCompleted = async (activityId, userId) => {

    const activityExists = activities.some(activity => activity.id === parseInt(activityId, 10));
    if (!activityExists) {
        throw new Error('Activity not found');
    }

    // Initialize user entry if it doesn't exist
    if (!userActivityMap[userId]) {
        userActivityMap.set(userId, new Set());
    }
    const completedActivities = userActivityMap.get(userId);
    completedActivities.add(activityId);
};

exports.getCompletedActivities = async (userId) => {
    if (!userActivityMap.has(userId)) {
        return [];
    }


    const completedActivityIds = Array.from(userActivityMap.get(userId));
    const completedActivities = activities.filter(activity => completedActivityIds.includes(activity.id));
    return completedActivities;
};
