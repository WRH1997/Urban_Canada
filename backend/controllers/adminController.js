// author: Nandkumar Kadivar

const User = require("../models/users");
const Service =  require("../models/services")

exports.approveVendor = async (req, res) => {
    try{
        var vendor_id = req.params.id
        console.log(vendor_id)
        if(vendor_id != null){
            const vendor = await User.findByIdAndUpdate(vendor_id, {$set: {isValidated: true}}, { new: true });
            console.log(vendor)
            if(vendor){
                res.status(200)
                res.send("approved")
            }else {
                res.status(400)
                res.send("user not found")
            }
        }else {
            res.status(400)
            res.send("bad-request")
        }
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.rejectVendor = async (req, res) => {
    try{
        var vendor_id = req.params.id
        console.log(vendor_id)
        if(vendor_id != null){
            const vendor = await User.findByIdAndRemove(vendor_id);
            console.log(vendor)
            if(vendor){
                res.status(200)
                res.send("removed")
            }else {
                res.status(400)
                res.send("user not found")
            }
        }else {
            res.status(400)
            res.send("bad-request")
        }
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.getUnVerifiedVendors = async (req, res) => {
    try{
        const users = await User.find({role: "service-provider", isValidated: false})

        res.json(users)
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.getBlockedVendors = async (req, res) => {
    try{
        const users = await User.find({role: "service-provider", isBlocked: true})

        res.json(users)
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.getBlockedConsumers = async (req, res) => {
    try{
        const users = await User.find({role: "service-consumer", isBlocked: true})

        res.json(users)
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.getActiveVendors = async (req, res) => {
    try{
        const users = await User.find({role: "service-provider", isBlocked: false})

        res.json(users)
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.getActiveConsumers = async (req, res) => {
    try{
        const users = await User.find({role: "service-consumer", isBlocked: false})

        res.json(users)
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.blockVendor = async (req, res) => {
    try{
        var vendor_id = req.params.id
        console.log(vendor_id)
        if(vendor_id != null){
            const vendor = await User.findByIdAndUpdate(vendor_id, {$set: {isBlocked: true}}, { new: true });
            console.log(vendor)
            if(vendor){
                res.status(200)
                res.send("blocked")
            }else {
                res.status(400)
                res.send("user not found")
            }
        }else {
            res.status(400)
            res.send("bad-request")
        }
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.unBlockVendor = async (req, res) => {
    try{
        var vendor_id = req.params.id
        console.log(vendor_id)
        if(vendor_id != null){
            const vendor = await User.findByIdAndUpdate(vendor_id, {$set: {isBlocked: false}}, { new: true });
            console.log(vendor)
            if(vendor){
                res.status(200)
                res.send("unblocked")
            }else {
                res.status(400)
                res.send("user not found")
            }
        }else {
            res.status(400)
            res.send("bad-request")
        }
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.blockConsumer = async (req, res) => {
    try{
        var consumer_id = req.params.id
        console.log(consumer_id)
        if(consumer_id != null){
            const consumer = await User.findByIdAndUpdate(consumer_id, {$set: {isBlocked: true}}, { new: true });
            console.log(consumer)
            if(consumer){
                res.status(200)
                res.send("blocked")
            }else {
                res.status(400)
                res.send("user not found")
            }
        }else {
            res.status(400)
            res.send("bad-request")
        }
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.unBlockConsumer = async (req, res) => {
    try{
        var consumer_id = req.params.id
        console.log(consumer_id)
        if(consumer_id != null){
            const consumer = await User.findByIdAndUpdate(consumer_id, {$set: {isBlocked: false}}, { new: true });
            console.log(consumer)
            if(consumer){
                res.status(200)
                res.send("unblocked")
            }else {
                res.status(400)
                res.send("user not found")
            }
        }else {
            res.status(400)
            res.send("bad-request")
        }
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.getTopServiceStatistics = async (req, res) => {
    try{

        const services = await Service.find()

        var categories = []
        var category_values = []
        services.forEach((element)=>{
            if(!categories.includes(element.category) && categories.length < 6){
                categories.push(element.category)
            }
        })

        categories.forEach((category)=>{
            var sum=0
            services.forEach((element)=>{
                if(element.category == category){
                    sum += 1
                }
            })
            category_values.push(sum)
        })

        const data = {
            categories,category_values
        }

        res.status(200)
        res.json(data)
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.getCityStatistics = async (req, res) => {
    try{
        const cityData = [
            {
              name: 'Toronto',
              coordinates: [-79.3832,43.6532]
            },
            {
              name: 'Halifax',
              coordinates: [-63.5728, 44.6476]
            },
            {
              name: "New york",
              coordinates: [-74.006, 40.7128]
            },
            {
              name: "Calgary",
              coordinates: [-114.0719,51.0447]
            },
            {
              name: "Moncton",
              coordinates: [-64.7782,46.0878]
            },
            {
              name: "Montreal",
              coordinates: [-73.5674,45.5019]
            },
            {
              name: "Ottawa",
              coordinates: [-75.6972,45.4215]
            },
            {
              name: "Quebec",
              coordinates: [-71.2075,46.8131]
            },
            {
              name: "Vancouver",
              coordinates: [-123.1207,49.2827]
            },
            {
              name: "Cape Breton",
              coordinates: [-60.1135,46.0820]
            }
        ]

        const services = await Service.find()
        
        var cities = []
        services.forEach((element)=>{
            if(!cities.includes(element.vendorLocation)){
                cities.push(element.vendorLocation)
            }
        })

        var city_coordinates = []

        cities.forEach((city)=>{
            cityData.forEach((record)=>{
                if(city == record.name){
                    city_coordinates.push(record)
                }
            })
        })

        res.status(200)
        res.json(city_coordinates)
    }
    catch(e){
        res.status(500).send(e)
    }
}