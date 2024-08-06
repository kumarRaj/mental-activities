var express = require('express');
var router = express.Router();
var activityService = require('../service/activityService.js')

/* Return all activities */
router.get('/', function(req, res, next) {
   activityService.listActivities(req, res)
});

router.post('/', function(req, res, next) {
   activityService.markCompleted(req, res)
});


module.exports = router;
