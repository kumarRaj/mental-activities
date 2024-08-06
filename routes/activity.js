var express = require('express');
var router = express.Router();
var activityService = require('../service/activityService.js')

/* Return all activities */
router.get('/', function(req, res, next) {
   activityService.listActivities(req, res)
});

module.exports = router;
