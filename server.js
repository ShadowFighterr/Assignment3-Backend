// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');

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
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Controllers
app.post('/api/products', productController.createProduct);
app.get('/api/products', productController.getProducts);
app.put('/api/products/:id', productController.updateProduct);
app.delete('/api/products/:id', productController.deleteProduct);

app.post('/api/users/register', userController.registerUser);
app.post('/api/users/login', userController.loginUser);

app.post('/api/orders', orderController.createOrder);
app.get('/api/orders/:userId', orderController.getOrdersByUser);

app.get('/', (req, res) => {
    res.send('E-Commerce API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
