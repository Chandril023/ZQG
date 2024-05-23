const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    inGameId: { type: String, required: true },
    paymentToken: { type: String, required: true }
});


const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;