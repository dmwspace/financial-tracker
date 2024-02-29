const CommentModel = require('../models/transaction');
const TransactionModel = require('../models/transaction');

module.exports = {
    create,
    showCreatePage
}

async function create(req, res) {
    try {
        req.body.user = req.user
        console.log(req.body.user)
        console.log('create function req.body', req.body)
        const transactionFromDb = await TransactionModel.findById(req.params.id)
        transactionFromDb.comments.push(req.body)
        await transactionFromDb.save()
        console.log('transactionFromDb', transactionFromDb)
        //transactionFromDb.comments.push()
        res.redirect('/transactions')
    } catch(err) {
        console.log(err);
        res.send(err)
    }
}

async function showCreatePage(req, res) {
    try {
        console.log('showCreatePage req.params.id', req.params.id)
        const commentId = await req.params.id
        res.render('comments/new', {commentId})
    } catch(err) {
        res.send(err)
    }
}

