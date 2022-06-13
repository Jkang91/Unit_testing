const express = require("express");
const router = new express.Router();
const userController = require('../controller/users/userController')

router.post("/signup", userController.signUp)

module.exports = {UserRouter: router}