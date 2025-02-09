# E-Commerce API

## Project Overview
This is a RESTful API for an e-commerce platform using **Node.js**, **Express**, and **MongoDB**. The API allows users to manage products, register, authenticate, and place orders.

## 🚀 Live Deployment
**Backend API:** [https://your-app.vercel.app](https://ecommerce-c3tdvm29z-azamats-projects-d84994b6.vercel.app/api/orders)

## 📂 Project Structure
```
ecommerce-app/
│── server.js          # Main backend file
│── .env               # Environment variables
│── package.json       # Dependencies and scripts
│── models/            # Mongoose schemas
│── controllers/       # Logic for API routes
│── routes/            # Express routes
│── middleware/        # Authentication and validation
│── config/            # Database connection
```

## 🛠️ Setup Instructions
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ShadowFighterr/Assignment3-Backend.git
cd ecommerce-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server
```bash
node server.js
```

## 🔥 API Endpoints

### **Products**
- **Add Product**: `POST /api/products`
- **Get Products**: `GET /api/products`
- **Update Product**: `PUT /api/products/:id`
- **Delete Product**: `DELETE /api/products/:id`

### **User Authentication**
- **Register**: `POST /api/users/register`
- **Login**: `POST /api/users/login`

### **Orders**
- **Create Order**: `POST /api/orders`
- **Get User Orders**: `GET /api/orders/:userId`

## ✅ Deployment
To deploy the project:
```bash
git push origin main
vercel
```

## 📸 Submission Instructions
- **Include screenshots of:**
  - MongoDB database structure
  - Successful API requests (Postman or terminal)
  - Vercel deployment success
- **Upload all files as a ZIP archive**

---


## 📖 Code Explanation
### **server.js**
- Initializes the **Express app** and sets up middleware.
- Connects to **MongoDB** using Mongoose.
- Defines **routes** for products, users, and orders.
- Starts the **server** on the specified port.

### **models/**
- Contains **MongoDB schemas** for **Product, User, and Order**.
- Defines data structure and validation rules.

### **controllers/**
- Implements the **business logic** for handling API requests.
- Includes functions for CRUD operations on **products, users, and orders**.
- Handles **authentication** (password hashing, JWT tokens).

### **routes/**
- Defines API endpoints using **Express Router**.
- Maps HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) to controller functions.

### **middleware/**
- Contains authentication middleware to **protect routes**.
- Verifies JWT tokens before allowing access to certain endpoints.

### **config/**
- Stores database connection settings and configurations.
- Helps keep the main code clean and modular.

## 📸 Screenshots

### 1️⃣ MongoDB Database Structure
![MongoDB](screenshots/1.png)

### 2️⃣ API Responses in Postman
![Postman](screenshots/2.png)

### 3️⃣ Vercel Deployment Success
![Vercel](screenshots/3.png)


![Vercel](screenshots/4.png)
![Vercel](screenshots/5.png)
![Vercel](screenshots/6.png)
