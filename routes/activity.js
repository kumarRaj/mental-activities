var express = require('express');
var router = express.Router();
var activityService = require('../service/activityService.js')

/* Return all activities */
router.get('/', async function(req, res, next) {
    const activities = await activityService.listActivities()
    res.status(200).json(activities);
});

router.post('/complete/:activityId', async function(req, res, next) {
    const activityId = req.params.activityId;
    const userId = getUserId(req.headers);
    try {
        await activityService.markCompleted(activityId, userId);
        res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(400); // Sends a response with status code 400 (Bad Request)
    }
});

const getUserId = (headers) => {
    // TODO: Fix when introducing authentication
    return headers['x-user-id']; // Access userId from headers
};

module.exports = router;
