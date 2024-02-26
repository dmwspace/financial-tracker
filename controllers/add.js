const TransactionModel = require('../models/transaction')

module.exports = {
    create
}

async function create(req, res) {
    try {
        console.log('req: ', req)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}