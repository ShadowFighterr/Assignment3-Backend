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

// Routes
app.get('/', (req, res) => {
    res.send('Vercel Node.js API is working!');
});

app.get('/api/products', (req, res) => {
    res.json([{ id: 1, name: "Sample Product", price: 100 }]);
});

// Export as a Serverless Function
module.exports = app;
