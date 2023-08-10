// Author: Edwin Adams


const Notification = require('../models/notification'); 

const NotificationController = {


    createNotification: async (req, res) => {
        try {
            const notification = new Notification(req.body);
            await notification.save();
            return res.status(201).json({ success: true, data: notification });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    },

    
    getUserNotifications: async (req, res) => {
        try {
            const userId = req.params.userId; // userID to be passes in request URL
            const notifications = await Notification.find({ recipient_id: userId });
            return res.status(200).json({ success: true, data: notifications });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    },

    
    deleteNotification: async (req, res) => {
        try {
            const notificationId = req.params.notificationId; 
            await Notification.findByIdAndRemove(notificationId);
            return res.status(200).json({ success: true, message: 'Notification deleted successfully!' });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = NotificationController;
