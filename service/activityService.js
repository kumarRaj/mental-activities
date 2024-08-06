const activities = []
const Activity = require('../models/activity.js');
const { generateFixedActivities } = require('./defaultActivities.js');

exports.listActivities = async (req, res) => {
    res.status(200).json( generateFixedActivities() );
};

    res.status(200).json( activities );
};
