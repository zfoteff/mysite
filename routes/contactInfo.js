var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/contact-info', function(req, res, next) {
    res.render('contact');
});

module.exports = router;