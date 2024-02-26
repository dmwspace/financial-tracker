const mongoose = require('mongoose');
const Schema = mongoose.Schema
// Create your User Model

const userSchema = new mongoose.Schema({
    name: String,
    googleId: {
        type: String,
        avatar: String
    }, 
    email: String,
    avatar: String,
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Transaction'
    }],
    }, {
        timestamps: true
});

module.exports = mongoose.model('User', userSchema);