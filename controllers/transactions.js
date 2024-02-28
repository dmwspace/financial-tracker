const TransactionModel = require('../models/transaction')

module.exports = {
    create,
    index,
    delete: deleteOne
}

async function create(req, res) {
    try {
        console.log('create function req', req.user)
        req.body.user = req.user
		//req.body.userName = req.user.name
		//req.body.userAvatar = req.user.avatar
        console.log('req.body create function: ', req.body.user)
        const transactionFromDatabase = await TransactionModel.create(req.body);
        console.log('transactionFromDatabase', transactionFromDatabase)
        res.redirect("/transactions")
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

async function index(req, res) {
    try {
        const transactions = await TransactionModel.find({user: req.user});
        console.log('transactions', transactions)
        res.render("transactions", {transactions})
    } catch(err) {
        console.log(err);
        res.send(err)
    }

}

async function deleteOne(req, res) {
    console.log('req.params.id: ', req.params.id)
    try {
        const transactionDoc = await TransactionModel.findOneAndDelete({'_id': req.params.id})
        console.log('transactionDoc:', transactionDoc)
        if (!transactionDoc) return res.redirect('/transactions')
        //transactionDoc.save()
        res.redirect('/transactions')
    } catch(err) {
        console.log(err);
        res.send(err)
    }
}