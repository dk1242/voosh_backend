const express = require("express");
const { AddOrder, GetUserOrders } = require("../controllers/orderController");
const { requireSignIn } = require("../middleware/auth");
const router = express.Router();

router.post("/add-order", requireSignIn, AddOrder);
router.get("/get-order/:userId", requireSignIn, GetUserOrders);

module.exports = router;
