const TransactionModel = require('../models/transaction')

module.exports = {
    create,
    index,
    delete: deleteOne,
    showUpdatePage,
    update
}

function getCurrentMonth() {
    const month = ["January","February","March","April","May","June", 
    "July","August","September","October","November","December"]; 
    const d = new Date(); 
    console.log('d from getCurrentMonth function: ', d)
    let mon = month[d.getMonth()]; 
    console.log('mon from getCurrentMonth: ', mon)
    let day = d.getDate(); 
    console.log('day from getCurrentMonth: ', day)
    let year = d.getFullYear();
    console.log('year from getCurrentMonth: ', year)
    let currentDate = `${mon} ${day}, ${year}`
    return currentDate
}
function getFirstName(name) {
    let firstName = name.split(' ')[0]
    return firstName
    }
async function create(req, res) {
    try {
        req.body.user = req.user
		//req.body.userName = req.user.name
		//req.body.userAvatar = req.user.avatar
        const transactionFromDatabase = await TransactionModel.create(req.body);
        console.log('transactionFromDatabase', transactionFromDatabase)
        res.redirect("/transactions")
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

async function index(req, res) {
    console.log('req.user.name', req.user.name)
    try {
        const transactions = await TransactionModel.find({user: req.user});
        let firstName = getFirstName(req.user.name)
        let currentDate = getCurrentMonth()
        console.log('currentDate in index function line 44', currentDate)
        res.render("transactions/transactions", {transactions, firstName, currentDate})
    } catch(err) {
        console.log(err);
        res.send(err)
    }
}

async function deleteOne(req, res) {
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

async function showUpdatePage(req, res) {
    console.log('showUpdatePage req.params.id', req.params.id)
    const transactionId = req.params.id
    const transactionToUpdate = await TransactionModel.findOne({'_id': req.params.id})
    if (!transactionToUpdate) return res.redirect('/transactions')
    console.log('transactionToUpdate: ', transactionToUpdate)
    res.render('transactions/update', {transactionToUpdate})
}

async function update(req, res) {
    req.body.user = req.user
    console.log('update req.params.id', req.params.id)
    try {
        const updatedTransaction = await TransactionModel.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true}
        );
        return res.redirect('/transactions')
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}
