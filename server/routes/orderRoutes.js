const express = require("express");
const { createOrder, getOrdersByUser, getOrderById } = require("../controllers/orderController");

const router = express.Router();

router.post("/create", createOrder);
router.get("/:userId", getOrdersByUser);
router.get("/:orderId", getOrderById);

module.exports = router;
