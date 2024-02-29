const router = require('express').Router();
const passport = require('../config/passport');
const TransactionsCtrl = require('../controllers/transactions');

router.get('/:id/update', TransactionsCtrl.showUpdatePage) 
router.put('/:id', TransactionsCtrl.update)



module.exports = router;