const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment.model');
const crypto = require('crypto');

function generateRandomToken(length = 8) {
    return crypto.randomBytes(length).toString('hex');
}

// POST request to generate payment token and save it to the database
router.post('/generate-token', async (req, res) => {
    try {
        const { username, inGameId } = req.body;
        const paymentToken = generateRandomToken();
        const payment = new Payment({ username, inGameId, paymentToken });
        await payment.save();
        res.status(201).json({ message: 'Payment token generated and saved successfully' });
    } catch (error) {
        console.error('Error saving payment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET request to fetch all users
router.get('/payments-info', async (req, res) => {
    try {
        const users = await Payment.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
