**Shopping - E-Commerce Website**
This is a full-stack e-commerce website built with Next.js for the frontend and Node.js with MongoDB for the backend. The application provides a responsive and modern shopping experience, including features like product listing, cart management, user authentication, order placement, and order history.

**Features**
Responsive Design: Optimized for desktops, tablets, and mobile devices.
User Authentication: Sign up and log in functionality using JWT for secure authentication.
Product Management: View product details, categories, and prices.
Shopping Cart: Add products to the cart, modify quantities, and proceed to checkout.
Order Management: View past orders, track order statuses, and check delivery details.
Checkout: Provide delivery information and complete the purchase.
Admin Panel (if applicable): Admins can manage products, users, and orders.

**Tech Stack**
Frontend: Next.js, React, Tailwind CSS (and some custom CSS)
Backend: Node.js, Express
Database: MongoDB, Mongoose
Authentication: JWT (JSON Web Tokens)
File Uploads: Multer (for image/file uploads)
Payment Gateway : Stripe/PayPal 

**Installation**
 Clone the repository:
 git clone https://github.com/Mohithh/Shopping.git
cd Shopping

** Install dependencies:**
Run the following command to install the required dependencies:
npm install

**Set up environment variables:**
Create a .env file in the root of the project and add the necessary environment variables:
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
HASHPassword_SECRET=your-HASHPassword_SECRET
PORT=your-server-port

**Run the application locally**
For development
npm run dev

**API Endpoints**

User Authentication:
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in and receive a JWT token.

**Products:**
GET /api/products: Get all products.
GET /api/products/:id: Get details of a specific product.

**Cart:**
POST /api/cart: Add an item to the cart.
GET /api/cart: View the cart.
DELETE /api/cart/:id: Remove an item from the cart.

**Orders:**
POST /api/orders: Place a new order.
GET /api/orders: View the user's order history.
GET /api/orders/:id: Get details of a specific order.

**Usage**
Frontend: Users can browse products, add them to the cart, and complete their purchase via a checkout process.
Backend: Handles all API requests related to user management, product catalog, shopping cart, and order history.
