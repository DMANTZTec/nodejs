var express=require('express');
var router=express.Router();
var auth = function(req, res, next) {
    if (req.session && req.session.userid =='joh')
        return next();
    else
        return res.sendStatus(401);
};
router.all('/', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
module.exports = router;