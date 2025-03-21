const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const profileRoutes = require("./routes/profileRoutes");
const addressRoutes = require("./routes/addressRoutes");
//dotenv config
dotenv.config();
//db connection
connectDB();
//Rest object
const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());
//Routes
app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);
app.use("/profile", profileRoutes);
app.use("/address", addressRoutes);
//PORT
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})