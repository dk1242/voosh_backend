const User = require("../models/userModel");
const Order = require("../models/orderModel");

exports.AddOrder = async (req, res) => {
  try {
    const { user_id, sub_total, phone_number } = req.body;
    const user = await User.findById(user_id);
    if (user) {
      const newOrder = new Order({
        user_id,
        sub_total,
        phone_number,
      });
      await newOrder.save().then((data) => {
        res.status(201).json(data);
      });
    } else {
      res.status(400).json({ msg: "User doesn't exist for this user_id." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.GetUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ user_id: userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
