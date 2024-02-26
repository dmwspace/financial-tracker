const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        enum: ['Debit', 'Credit']
    },
    category: {
        type: String,
        enum: ['Housing', 'Food', 'Bills', 'Other Debit', 'Paycheck', 'Other Credit']
    },
    amount: Number,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Transaction', transactionSchema)