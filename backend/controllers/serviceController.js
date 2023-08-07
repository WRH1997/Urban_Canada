/*
Author(s): 
- Waleed R. Alhindi (B00919848)
- Edwin Adams (B00917930)
*/

const Service = require('../models/services');
const mongoose = require("mongoose");


exports.getAllServices = async (req, res) => {
    try{
        let allServices = await Service.find();
        res.json({'services': allServices});
    }
    catch(e){
        res.status(500).json({'error':'There was an issue retreiving the services from the database.', 'errorMessage': e.message()});
    }
}

// Delete? Not being used
exports.searchForServices = async (req, res) => {
    let searchTerm = req.body.searchTerm;
    searchTerm = searchTerm.toLowerCase();
    if(searchTerm.trim() == ""){
        this.getAllServices();
        return;
    }
    try{
        let servicesCursor = await Service.find().cursor();
        let matchingServices = [];
        for(let service = await servicesCursor.next(); service != null; service = await servicesCursor.next()){
            if(service.serviceName.toLowerCase().includes(searchTerm) || service.serviceDesc.toLowerCase().includes(searchTerm)){
                matchingServices.push(service)
            }
        }
        res.json({'services': matchingServices});
    }
    catch(e){
        res.status(500).json({'error': 'There was an issue retreiving the services from the database.', 'errorMessage': e.message()});
    }
}


exports.filterServices = async (req, res) => {
    let filters = req.body.filters;
    try{
        let serviceCursor = await Service.find().cursor();
        let matchingServices = [];
        for(let service = await serviceCursor.next(); service != null; service = await serviceCursor.next()){
            if(filters.includes(service.category)){
                matchingServices.push(service);
            }
        }
        res.json({'services': matchingServices});
    }
    catch(e){
        res.status(500).json({'error': 'There was an issue retreiving the services from the database.', 'errorMessage': e.message()});

    }
}

exports.createService = async (req, res) => {
    try {
        const {
            serviceName,
            vendorID,
            vendorName,
            vendorLocation,
            serviceDesc,
            pricePerHour,
            category,
            serviceImg
        } = req.body;


        const newService = new Service({
            serviceName,
            vendorID,
            vendorName,
            vendorLocation,
            serviceDesc,
            pricePerHour,
            category,
            serviceImg
        });

        const savedService = await newService.save();

        res.status(201).json({ service: savedService });
        } catch (e) {
            res.status(500).json({ error: 'Failed to create the service.', errorMessage: e.message });
    }
}

exports.editService = async (req, res) => {
    try {
        const serviceId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(serviceId)) {
            return res.status(400).json({ error: 'Invalid service ID' });
        }

        const existingService = await Service.findById(serviceId);
  
        if (!existingService) {
        return res.status(404).json({ error: 'Service not found' });
        }
  
        const {
            serviceName,
            vendorID,
            vendorName,
            vendorLocation,
            serviceDesc,
            pricePerHour,
            category,
            serviceImg
        } = req.body;
  
        existingService.serviceName = serviceName;
        existingService.vendorID = vendorID;
        existingService.vendorName = vendorName;
        existingService.vendorLocation = vendorLocation;
        existingService.serviceDesc = serviceDesc;
        existingService.pricePerHour = pricePerHour;
        existingService.category = category;
        existingService.serviceImg = serviceImg;
  

        const updatedService = await existingService.save();
        res.json({ service: updatedService });
    } catch (e) {
        res.status(500).json({ error: 'Failed to update the service.', errorMessage: e.message });
    }
  }

exports.deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;
  
        if (!mongoose.Types.ObjectId.isValid(serviceId)) {
            return res.status(400).json({ error: 'Invalid service ID' });
        }
  
        const existingService = await Service.findById(serviceId);
  
        if (!existingService) {
            return res.status(404).json({ error: 'Service not found' });
        }
  

        await existingService.deleteOne();
  
        res.json({ message: 'Service deleted successfully' });
    } catch (e) {
        res.status(500).json({ error: 'Failed to delete the service.', errorMessage: e.message });
    }
};