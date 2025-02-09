const Order = require('../models/Order');

// Create an order
exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get orders by user
exports.getOrdersByUser = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId }).populate('productIds');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
