const router = require('express').Router();
const passport = require('passport');
const transactionsCtrl = require('../controllers/transactions')
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, transactionsCtrl.index)
// router.get('/', function(req, res){
//     //console.log('*****', res)
//     res.render('add')
// })

router.get('/new', function(req, res){
    //console.log('*****', res)
    res.render('transactions/new')
})
router.post('/', transactionsCtrl.create)
router.delete('/:id', transactionsCtrl.delete)

module.exports = router;