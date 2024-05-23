const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    inGameId: { type: String, required: true },
    team: { type: String, required: true },
    matchesPlayed: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    draws: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    goalsScored: { type: Number, default: 0 },
    goalsConceded: { type: Number, default: 0 },
    goalDifference: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 }
});

const RegisteredUser = mongoose.model('RegisteredUser', userSchema);

module.exports = RegisteredUser;