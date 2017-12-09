var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var router = express.Router();
router.use(cookieParser());
//router.use(session({secret: "Shh, its a !"}));
router.all('/', function (req, res) {
   var post = {user:"john",password:"johnspassword"};
    if (post.user === 'john' && post.password === 'johnspassword')
    {
            req.session.userid = "joh";
            res.redirect('/my_secret_page');
        }
else
{
    res.send("login failed");
}
});
module.exports = router;