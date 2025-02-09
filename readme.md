# E-commerce API with MongoDB

## Project Overview
This is a backend API for an e-commerce platform using **Node.js, Express, MongoDB, and JWT Authentication**. It supports CRUD operations for products, users, and orders and is deployed on **Vercel**.

## Features
- **MongoDB database** integration with Mongoose
- **User authentication** with JWT and password hashing
- **RESTful API** with CRUD operations
- **Secure environment variables** using dotenv
- **Deployment on Vercel**

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

## Deployment Guide (Vercel)
### 1. Deploying via GitHub
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ecommerce-app.git
   git push -u origin main
   ```
2. Go to **[Vercel](https://vercel.com/)** and log in.
3. Create a **New Project** and select your GitHub repo.
4. Set the **Build Command** as:
   ```bash
   npm install && npm run build
   ```
5. Add **Environment Variables**:
   - `MONGO_URI=your_mongodb_connection_string`
   - `JWT_SECRET=your_jwt_secret`
6. Click **Deploy**.

### 2. Redeploying Changes
After making updates to the project, push your changes and redeploy:
```bash
vercel --prod
```

## Testing the API
You can test the endpoints using **Postman** or **cURL**:
```bash
curl -X GET https://your-vercel-url/api/products
```

## License
MIT License.


