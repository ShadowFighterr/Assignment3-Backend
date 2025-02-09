const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection (Ensure it only connects once)
if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}

// API Route
app.get('/', (req, res) => {
    res.send('Vercel Node.js API is working!');
});

// Fix for Vercel: Export a function instead of a server
module.exports = (req, res) => {
    return app(req, res);
};
