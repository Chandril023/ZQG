const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Add this line to load .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Define routes
const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);
const paymentRoutes=require('./routes/paymentRoutes')
app.use('/admin', paymentRoutes);
const newUser=require('./routes/register')
app.use('/admin', newUser);
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
