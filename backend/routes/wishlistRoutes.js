const express = require("express");
const router = express.Router();
const wishListController = require("../controllers/wishListController");

router.post("/add", wishListController.addToWishlist);
router.post("/remove", wishListController.removeFromWishlist);
router.get("/getUserWishlist/:userId", wishListController.getUserWishlist);

module.exports = router;
