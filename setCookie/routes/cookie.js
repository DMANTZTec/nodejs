var express      = require('express');
//var cookieParser = require('cookie-parser');
var router = express.Router();
//router.use(cookieParser());
router.get('/', function(req, res) {
    res.cookie('cookie_name' , 'tejaswi').send('Cookie is set');
    console.log('Cookies: ', req.cookies);
});
module.exports = router;
