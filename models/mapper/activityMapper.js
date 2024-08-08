// mappers/activityMapper.js

const Activity = require('../activity');

const mapMongoToDomainActivity = (mongoActivity) => {
  if (!mongoActivity) return null;

  return new Activity(
    mongoActivity._id.toString(),
    mongoActivity.title,
    mongoActivity.description,
    mongoActivity.category,
    mongoActivity.duration,
    mongoActivity.difficultyLevel,
    mongoActivity.activityContent,
    mongoActivity.creationTimestamp
  );
};

module.exports = { mapMongoToDomainActivity };
