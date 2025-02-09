# E-commerce API with MongoDB

## Project Overview
This is a full-stack e-commerce web application using **Node.js, Express, MongoDB, and JWT Authentication**. It supports CRUD operations for products, users, and orders, and is ready for **deployment on Render or Heroku**.

## Features
- **MongoDB database** integration with Mongoose
- **User authentication** with JWT and password hashing
- **RESTful API** with CRUD operations
- **Secure environment variables** using dotenv
- **Deployment ready** with production configurations

## Installation
### Prerequisites:
- Node.js installed
- MongoDB Atlas or local MongoDB instance

### Steps to Setup:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints
| Method | Endpoint           | Description                 |
|--------|-------------------|-----------------------------|
| POST   | /api/products     | Create a new product        |
| GET    | /api/products     | Retrieve all products       |
| PUT    | /api/products/:id | Update a product by ID      |
| DELETE | /api/products/:id | Delete a product by ID      |
| POST   | /api/users/register | Register a new user       |
| POST   | /api/users/login    | Authenticate user and get token |
| POST   | /api/orders       | Create a new order          |
| GET    | /api/orders/:userId | Get orders for a user      |

## Deployment Guide
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ecommerce-app.git
   git push -u origin main
   ```
2. Deploy on **Render**:
   - Create a new web service
   - Connect your GitHub repo
   - Set up environment variables (`MONGO_URI`, `JWT_SECRET`, etc.)
   - Click **Deploy**

3. Deploy on **Heroku**:
   ```bash
   heroku create ecommerce-app
   git push heroku main
   heroku config:set MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret
   heroku open
   ```

## Screenshots
- Add database design, API responses, and deployed app screenshots here.

## License
MIT License.


