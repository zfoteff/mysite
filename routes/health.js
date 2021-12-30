var express = require('express');
var router = express.Router();

/* GET health of site */

router.get('/health', function(req, res, next) {
    health = {
        'header': req.headers,
        'uptime': process.uptime(),
        'date': Date.now(),
        'message': 'Thanks for visiting my site!'
    }
    res.json(health);
});

module.exports = router;