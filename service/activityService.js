const Activity = require('../models/activity.js');
const { generateFixedActivities } = require('./defaultActivities.js');
activities = generateFixedActivities();
const userActivityMap = new Map();

exports.listActivities = async () => {
    return activities;
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
        return []; // No completed activities for the user
    }

    // Retrieve completed activities for the user
    const completedActivityIds = Array.from(userActivityMap.get(userId));
    const completedActivities = activities.filter(activity => completedActivityIds.includes(activity.id));
    return completedActivities;
};
