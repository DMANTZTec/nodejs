var express = require('express');
var router = express.Router();

router.get('/logout', function (req, res) {
    delete req.session.user_id;
    router.redirect('/login');
});
module.exports = router;
