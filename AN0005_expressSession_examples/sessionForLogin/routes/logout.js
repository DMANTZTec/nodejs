var express = require('express');
var router = express.Router();

router.get('/logout', function (req, res) {
    delete req.session.userName;
    router.redirect('/login');
});
module.exports = router;
