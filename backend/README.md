# Backend Overview

This is the backend of your project. It is a small server that listens for requests from the frontend and handles data for users, products, carts, and orders.

---

## 1. What the backend does

- Starts a server with Express.
- Connects to MongoDB to save data.
- Connects to Cloudinary to upload product images.
- Provides API endpoints for the frontend to talk to.

---

## 2. Main folders explained

- `config/` — setup files
  - `mongodb.js` connects to the database.
  - `cloudinary.js` connects to Cloudinary for images.

- `routes/` — defines URLs the frontend can call
  - `userRoute.js` handles login, registration, admin login, and profile fetch.
  - `productRoute.js` handles adding, listing, deleting, and viewing products.
  - `cartRoute.js` handles adding to cart, updating cart, and getting cart data.
  - `orderRoute.js` handles placing orders, payment, and order status.

- `controllers/` — contains the real work for each route
  - `userController.js` checks login, creates users, and validates admin login.
  - `productController.js` uploads images and stores product details.
  - `cartController.js` saves cart items inside the user document.
  - `orderController.js` saves orders and handles payments (COD, Stripe, Razorpay).

- `middleware/` — helpers that run before route code
  - `auth.js` checks normal user tokens.
  - `adminAuth.js` checks admin tokens.
  - `multer.js` prepares file uploads for product images.

- `models/` — data shapes for MongoDB
  - `userModel.js` stores users and their cart.
  - `productModel.js` stores product details.
  - `orderModel.js` stores order details.

- `server.js` — the app entry point
  - loads configuration
  - turns on Express
  - connects the routers
  - starts listening on a port

---

## 3. Request flow in easy terms

1. Frontend sends a request to a URL like `/api/user/login` or `/api/product/add`.
2. Express finds the correct route file in `routes/`.
3. The route calls a controller function from `controllers/`.
4. The controller talks to the database using a model from `models/`.
5. If needed, middleware like `auth.js` or `adminAuth.js` first checks the user’s token.
6. The backend returns a response back to the frontend.

---

## 4. Important files to know first

- `server.js` — starts everything.
- `routes/*.js` — defines your available API URLs.
- `controllers/*.js` — contains the logic behind each endpoint.
- `models/*.js` — defines how data is stored in MongoDB.

---

## 5. Environment variables you need

Put these in `backend/.env`:

- `MONGODB_URI`
- `CLOUDINARY_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_SECRET_KEY`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `STRIPE_SECRET_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

---

## 6. Quick summary

This backend is a classic API server:

- `server.js` starts the app.
- `routes/` receives requests.
- `controllers/` does the work.
- `models/` stores data.
- `middleware/` protects routes.

If you want, I can also make a second file that explains just the payment flow step-by-step.