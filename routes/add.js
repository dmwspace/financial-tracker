const router = require('express').Router();
const passport = require('passport');
const addCtrl = require('../controllers/add')

router.get('/', function(req, res){
    console.log('*****', res)
    res.render('add')
})
router.post('/transactions', addCtrl.create)

module.exports = router