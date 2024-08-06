const activities = []
var Activity = require('../models/activity.js');


exports.listActivities = async (req, res) => {
    res.status(200).json( activities );
};
