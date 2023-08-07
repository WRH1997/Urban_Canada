// author: Nandkumar Kadivar

const express = require("express")
const router = express.Router()
const adminController = require("../controllers/adminController")
const adminAuth = require("../middlewares/adminAuthMiddleware")

router.post("/approve-vendor/:id", adminAuth, adminController.approveVendor)
router.post("/reject-vendor/:id", adminAuth, adminController.rejectVendor)
router.get("/unverified-vendors", adminAuth, adminController.getUnVerifiedVendors)

router.get("/active-vendors", adminAuth, adminController.getActiveVendors)
router.get("/active-consumers", adminAuth, adminController.getActiveConsumers)

router.get("/blocked-vendors", adminAuth, adminController.getBlockedVendors)
router.get("/blocked-consumers", adminAuth, adminController.getBlockedConsumers)

router.post("/block-vendor/:id", adminAuth, adminController.blockVendor)
router.post("/block-consumer/:id", adminAuth, adminController.blockConsumer)

router.post("/unblock-vendor/:id", adminAuth, adminController.unBlockVendor)
router.post("/unblock-consumer/:id", adminAuth, adminController.unBlockConsumer)

router.get("/top-service-statistics", adminController.getTopServiceStatistics)
router.get("/city-statistics", adminAuth ,adminController.getCityStatistics)

module.exports = router