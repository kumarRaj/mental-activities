const express = require('express');
const router = express.Router();
const activityService = require('../service/activityService.js')
const authMiddleware = require('../authorisation/authMiddleware');

// TODO: Consolidate error handling
/* Return all activities */
router.get('/', async function(req, res, next) {
    const activities = await activityService.listActivities()
    res.status(200).json(activities);
});

router.post('/', async function(req, res, next) {
    const { title, description, category, duration, difficultyLevel, activityContent } = req.body;

    try {
        const activity = await activityService.createActivity(title, description, category, duration, difficultyLevel, activityContent);
        res.status(201).json({ activity });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message || 'An error occurred while creating the activity' });
    }
});

router.post('/complete/:activityId', authMiddleware.authenticate, async function(req, res, next) {
    const activityId = req.params.activityId;
    const userId = getUserId(req);
    try {
        await activityService.markCompleted(activityId, userId);
        res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

router.get('/completed', authMiddleware.authenticate, async function(req, res, next) {
    const userId = getUserId(req);

    try {
        const completedActivities = await activityService.getCompletedActivities(userId);
        res.status(200).json({ completedActivities });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message || 'An error occurred while retrieving completed activities' });
    }
});


const getUserId = (req) => {
    return req.userId;
};

module.exports = router;
