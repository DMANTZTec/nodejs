var express=require('express');
var router=express.Router();
router.get('/', function (req, res) {
    if (!req.query.username || !req.query.password) {
        res.send('login failed');
    } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
        req.session.user = "amy";
        //req.session.admin = true;
        res.redirect('/content');
     //   res.send("login success!");
    }
});
module.exports = router;
