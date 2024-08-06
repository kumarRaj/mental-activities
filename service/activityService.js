const activities = []
const Activity = require('../models/activity.js');
const { generateFixedActivities } = require('./defaultActivities.js');

exports.listActivities = async () => {
    return generateFixedActivities();
};

    res.status(200).json( activities );
};
