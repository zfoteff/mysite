var express = require('express');
var router = express.Router();

const intro_string = "\tHello! My name is Zac Foteff and I am a student at Gonzaga University pursing a Bachelor of Science focused in Computer Science with a minor in Mathematics. " +
    "I am interested in pursing a career as a backend software developer, or in the computer/network security field.\n\n\tMy Journey as a software developer began when I was just a freshman " +
    "in highschool. I discovered a Python IDE for my iPad called Pythonista and I spent my Christmas break studying Python documentation and created my first scripts to " +
    "practice what I had learned. I knew that day I had found something that inspired me and sparked creativity " +
    "in me like nothing else ever had. In the spring of 2018, I made the decision to pursue this passion by enrolling at Gonzaga University as a Computer Science major. " +
    "In the summer of 2021, I had the opportunity to create production-level code during an internship at Kroger Technology. During my time on the " +
    "Customer Dialog team, I acquired many new skills such as developing for RESTful systems, learning how to " +
    "contribute effectively to a team environment, and the vital importance of writing good tests for high-scale applications"

const skills_string = "\tMy learning isn't just limited to the classroom and the work environment. I spend much of my free time researching and " +
    "designing projects for myself in order to challenge myself and gain practical knowledge of the many different " +
    "aspects of computer science. You can find a selection of these projects displayed in the Personal Projects " +
    "tab of this website. In addition to various personal projects, I have devoted lots of time to learning " +
    "various other skills need in computer science and software development. I have a good understanding of Git " +
    "and its various tools for managing workflow, as well as developing a good understanding of the Linux" +
    "operating system.Additionally, I have devoted lots of time towards learning to use and developing with " +
    "Arduinos and Raspberry Pis.I especially love developing projects with the Arduino to bridge the gap " +
    "between hardware and software.";


const personal_string = "\tIn my personal life, I am a big brother with two younger sisters. I " +
    "am an avid Lacrosse player and a passionate Oregon Ducks football fan. I enjoy spending lots of time outdoors " +
    " skiing and hiking in my home state of Oregon In the future, I'm looking forward to having the opportunity to " +
    "coach a youth Lacrosse team and to travel to all 50 states in the United States";


/* GET home page. */
data = {
    intro: intro_string,
    skills: skills_string,
    personal: personal_string
};

router.get('/', function(req, res, next) {
    res.render('home', data);
});

module.exports = router;