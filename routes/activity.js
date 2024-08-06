var express = require('express');
var router = express.Router();
var activityService = require('../service/activityService.js')

/* Return all activities */
router.get('/', async function(req, res, next) {
    const activities = await activityService.listActivities()
    res.status(200).json(activities);
});

router.post('/', function(req, res, next) {
   activityService.markCompleted(req, res)
});


module.exports = router;
