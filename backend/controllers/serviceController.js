const Service = require('../models/services');


exports.getAllServices = async (req, res) => {
    try{
        let allServices = await Service.find();
        res.json({'services': allServices});
    }
    catch(e){
        res.status(500).json({'error':'There was an issue retreiving the services from the database.', 'errorMessage': e.message()});
    }
}


exports.searchForServices = async (req, res) => {
    let searchTerm = req.body.searchTerm;
    if(searchTerm.trim() == ""){
        this.getAllServices();
        return;
    }
    try{
        let servicesCursor = await Service.find().cursor();
        let matchingServices = [];
        for(let service = await servicesCursor.next(); service != null; service = await servicesCursor.next()){
            if(service.serviceName.includes(searchTerm) || service.serviceDesc.includes(searchTerm)){
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