const router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res) {
    console.log(req.user)
    res.render('transactions')
})

module.exports = router;