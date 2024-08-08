const { generateFixedActivities } = require('./defaultActivities.js');
const UserActivityModel = require('../models/mongoose/userActivitySchema.js');
const ActivityModel = require('../models/mongoose/activitySchema.js');
const activityMapper = require('../models/mapper/activityMapper.js');


activities = generateFixedActivities();

exports.listActivities = async () => {
    const mongoActivities = await ActivityModel.find();
    return mongoActivities.map(activityMapper.mapMongoToDomainActivity);
};

exports.createActivity = async (title, description, category, duration, difficultyLevel, activityContent) => {
    if (!title || !description || !category || !duration || !difficultyLevel || !activityContent) {
        throw new Error('All fields are required');
    }

    const newActivity = new ActivityModel({
        title,
        description,
        category,
        duration,
        difficultyLevel,
        activityContent,
        creationTimestamp: new Date()
      });

      const savedActivity = await newActivity.save();

      return savedActivity;
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

    const completedActivityIds = userActivity.completedActivities;

    const completedActivities = await ActivityModel.find({
      _id: { $in: completedActivityIds },
    });

    return completedActivities.map(activityMapper.mapMongoToDomainActivity);
};
