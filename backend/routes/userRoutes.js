// author: Muskan Vazirani

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.put("/update-password", userController.updatePassword);
router.put("/:id", userController.updateProfile);
router.delete("/:id", userController.deleteUser);
router.post("/reset-password-request", userController.resetPasswordRequest);
router.post("/reset-password-confirm", userController.resetPasswordConfirm);

module.exports = router;
