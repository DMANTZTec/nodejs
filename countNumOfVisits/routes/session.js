var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var router = express.Router();
var app = express();
router.use(cookieParser());
router.use(session({secret: "secret!"}));
router.get('/', function(req, res){
   // req.session.cookie.maxAge=30000;
    var hour = 30000;
    req.session.cookie.expires = new Date(Date.now() + hour);
    if(!req.session.userName){
        req.session.userName="teja";
        req.session.visitCount=1;
        res.status(201).send(req.session);
       //res.send("You visited this page " + req.session.visitCount + " times");
    } else {
        req.session.visitCount+= 1;
        //res.send(req.session);
        res.send("You visited this page " + req.session.visitCount + " times");
    }
});
module.exports = router;
