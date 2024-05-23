const express = require('express');
const router = express.Router();
const RegisteredUser = require('../models/RegisteredUser.model');
const Payment = require('../models/Payment.model');

router.post('/create-user', async (req, res) => {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            inGameId,
            team,
            matchesPlayed,
            wins,
            draws,
            losses,
            goalsScored,
            goalsConceded,
            goalDifference,
            totalPoints,
            paymentToken
        } = req.body;
        const payment = await Payment.findOne({ username: fullName, paymentToken });
        if (!payment) {
            return res.status(400).json({ message: 'Invalid name or payment token' });
        }

        // Create a new user using the provided data
        const newUser = new RegisteredUser({
            fullName,
            email,
            phoneNumber,
            inGameId,
            team,
            matchesPlayed,
            wins,
            draws,
            losses,
            goalsScored,
            goalsConceded,
            goalDifference,
            totalPoints
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User created successfully' });
        
      
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/table-users', async (req, res) => {
    try {
      const allUsernames = await RegisteredUser.distinct('fullName');
      res.json({ allUsernames }); // Send usernames in the response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
router.get('/table-info', async (req, res) => {
    try {
        const users = await RegisteredUser.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/update-player/:fullName', async (req, res) => {
    const { fullName } = req.params;
    const { matchesPlayed, wins, losses, draws, goalsScored, goalsConceded } = req.body;

    try {
        // Validate data
        if (!fullName || matchesPlayed === undefined || wins === undefined || losses === undefined || draws === undefined || goalsScored === undefined || goalsConceded === undefined) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const updatedUser = await RegisteredUser.findOneAndUpdate(
            { fullName }, // Search by full name
            {
                matchesPlayed,
                wins,
                losses,
                draws,
                goalsScored,
                goalsConceded,
                totalPoints: (wins * 3) + draws, // Calculate total points
                goalDifference: goalsScored - goalsConceded, // Calculate goal difference
            },
            { new: true } // { new: true } returns the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.post('/register-user', async (req, res) => {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            inGameId,
            team,
            matchesPlayed,
            wins,
            draws,
            losses,
            goalsScored,
            goalsConceded,
            goalDifference,
            totalPoints,
          
        } = req.body;
       

        // Create a new user using the provided data
        const newUser = new RegisteredUser({
            fullName,
            email,
            phoneNumber,
            inGameId,
            team,
            matchesPlayed,
            wins,
            draws,
            losses,
            goalsScored,
            goalsConceded,
            goalDifference,
            totalPoints
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User created successfully' });
        
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
