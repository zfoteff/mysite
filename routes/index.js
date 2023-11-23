var express = require('express');
var router = express.Router();

const { INTRO_STRING, SKILLS_STRING, PERSONAL_STRING} = require('../public/strings');

/* GET home page. */
data = {
    intro: INTRO_STRING,
    skills: SKILLS_STRING,
};

router.get('/', function(req, res, next) {
    res.render('home', data);
});

module.exports = router;