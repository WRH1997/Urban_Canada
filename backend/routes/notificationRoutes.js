// Author: Edwin Adams

const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController'); 


router.post('/', NotificationController.createNotification);
router.get('/:userId', NotificationController.getUserNotifications);
router.delete('/:notificationId', NotificationController.deleteNotification);

module.exports = router;
