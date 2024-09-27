const express = require("express");
const { registerController, loginController,homeController } = require("../controllers/userController");
const authController = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register",registerController);
router.post("/login",loginController);
router.get("/home",authController,homeController);


module.exports = router;