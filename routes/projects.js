var express = require('express');
var router = express.Router();

/* GET projects page. */

router.get('/projects', function(req, res, next) {
    res.render('project', data);
});

module.exports = router;