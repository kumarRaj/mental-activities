var express = require('express');
var router = express.Router();
var activityService = require('../service/activityService.js')

/* Return all activities */
router.get('/', async function(req, res, next) {
    const activities = await activityService.listActivities()
    res.status(200).json(activities);
});

router.post('/complete/:activityId', async function(req, res, next) {
    const activityId = parseInt(req.params.activityId);
    const userId = getUserId(req.headers);
    try {
        await activityService.markCompleted(activityId, userId);
        res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

router.get('/completed', async function(req, res, next) {
    const userId = getUserId(req.headers);

    try {
        const completedActivities = await activityService.getCompletedActivities(userId);
        res.status(200).json({ completedActivities });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message || 'An error occurred while retrieving completed activities' });
    }
});


const getUserId = (headers) => {
    // TODO: Fix when introducing authentication
    return headers['x-user-id'];
};

module.exports = router;
