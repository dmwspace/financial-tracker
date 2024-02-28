const CommentModel = require('../models/transaction')

module.exports = {
    create,
    showCreatePage
}

async function create(req, res) {
    console.log(req.body)
    res.render('comments/new')
}

async function showCreatePage(req, res) {
    console.log('showCreatePage req.body', req.body)
    res.render('comments/new')
}