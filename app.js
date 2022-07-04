const express = require('express');
const cors = require('cors');
const userRoute = require("./src/routes/user");
const authRoute = require("./src/routes/auth");
const productRoute = require("./src/routes/product");
const cartRoute = require("./src/routes/cart");
const orderRoute = require("./src/routes/order");
const stripeRoute = require("./src/routes/stripe");

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


module.exports = app;