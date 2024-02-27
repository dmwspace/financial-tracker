const TransactionModel = require('../models/transaction')

module.exports = {
    create,
    index,
    delete: deleteOne
}

async function create(req, res) {
    try {
        console.log('req.body: ', req.body)
        const transactionFromDatabase = await TransactionModel.create(req.body);
        const transactions = await TransactionModel.find({})
        console.log(transactionFromDatabase)
        res.redirect("/transactions")
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

async function index(req, res) {
    try {
        const transactions = await TransactionModel.find({});
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