const TransactionModel = require('../models/transaction')

module.exports = {
    create,
    index
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