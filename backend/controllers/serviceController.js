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
            console.log(service.serviceName);
            console.log(searchTerm);
            if(service.serviceName.includes(searchTerm) || service.serviceDesc.includes(searchTerm)){
                matchingServices.push(service)
            }
        }
        if(matchingServices.length==0){
            res.status(400).json({'error':'No services match the search term [' + searchTerm + ']'});
            return;
        }
        res.json({'filteredServices': matchingServices});
    }
    catch(e){
        res.status(500).json({'error': 'There was an issue retreiving the services from the database.', 'errorMessage': e.message()});
    }
}


exports.filterServices = async (req, res) => {
    let filters = req.body.filters;
    if(filters.length==0){
        this.getAllServices();
        return;
    }
    try{
        let serviceCursor = await Service.find().cursor();
        let matchingServices = [];
        for(let service = await serviceCursor.next(); service != null; service = await serviceCursor.next()){
            if(filters.includes(service.category)){
                matchingServices.push(service);
            }
        }
        if(matchingServices.length==0){
            res.status(400).json({'error': 'No services match the applied filters.'});
            return;
        }
        res.json({'filteredServices': matchingServices});
    }
    catch(e){
        res.status(500).json({'error': 'There was an issue retreiving the services from the database.', 'errorMessage': e.message()});

    }
}