const express = require('express');
const router = express.Router();

// Sample route for testing
router.get('/', (req, res) => {
    res.send('Products API is working');
});

module.exports = router;
