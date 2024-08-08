const { generateFixedActivities } = require('./defaultActivities.js');
const UserActivityModel = require('../models/mongoose/userActivitySchema.js');
const ActivityModel = require('../models/mongoose/activitySchema.js');
const activityMapper = require('../models/mapper/activityMapper.js');


activities = generateFixedActivities();
let nextId = activities.length ? Math.max(...activities.map(a => a.id)) + 1 : 1; // Generate the next ID

exports.listActivities = async () => {
    const mongoActivities = await ActivityModel.find();
    return mongoActivities.map(activityMapper.mapMongoToDomainActivity);
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

    const activityExists = await ActivityModel.exists({ _id: activityId });
    if (!activityExists) {
      throw new Error('Activity not found');
    }

    let userActivity = await UserActivityModel.findOne({ userId });

    if (!userActivity) {
      userActivity = new UserActivityModel({
        userId,
        completedActivities: [],
      });
    }

    // Add the activity to the completed list if it's not already there
    if (!userActivity.completedActivities.includes(activityId)) {
      userActivity.completedActivities.push(activityId);
      await userActivity.save();
    }
};

exports.getCompletedActivities = async (userId) => {
    const userActivity = await UserActivityModel.findOne({ userId });

    if (!userActivity || userActivity.completedActivities.length === 0) {
      return [];
    }

    // Get the list of completed activity IDs
    const completedActivityIds = userActivity.completedActivities;

    // Fetch the details of these activities from the database
    const completedActivities = await ActivityModel.find({
      _id: { $in: completedActivityIds },
    });

    return completedActivities.map(activityMapper.mapMongoToDomainActivity);
};
