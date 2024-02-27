const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String
}, {
    timestamps: true
})

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
    comments: [commentSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Transaction', transactionSchema)