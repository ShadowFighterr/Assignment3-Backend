// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Models
const Product = mongoose.model('Product', new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number
}));

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, default: 'user' }
}));

const Order = mongoose.model('Order', new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    productIds: [mongoose.Schema.Types.ObjectId],
    orderStatus: String,
    timestamps: { type: Date, default: Date.now }
}));

// Routes
const router = express.Router();

// Product CRUD Operations
router.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
});

router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

router.put('/products/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
});

router.delete('/products/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.send({ message: 'Product deleted' });
});

// User Authentication
router.post('/users/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send(user);
});

router.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token });
});

// Order CRUD Operations
router.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
});

router.get('/orders/:userId', async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.send(orders);
});

app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Deployment Configuration
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
