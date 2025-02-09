const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection (Ensure it connects only once)
if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}

// ✅ Root Route to Confirm Server is Running
app.get('/', (req, res) => {
    res.send('Vercel Node.js API is working!');
});

// Sample API Route
app.get('/api/products', (req, res) => {
    res.json([{ id: 1, name: "Sample Product", price: 100 }]);
});

// Export for Vercel (Remove app.listen)
module.exports = app;

