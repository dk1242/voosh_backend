const express = require("express");
const { AddNewUser, Login } = require("../controllers/userController");
const router = express.Router();

router.post("/add-user", AddNewUser);
router.post("/login-user", Login);

module.exports = router;
