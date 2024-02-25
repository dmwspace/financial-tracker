const router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res) {
    res.render('failure')
})

module.exports = router;