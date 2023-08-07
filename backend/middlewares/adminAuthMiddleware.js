// author: Nandkumar Kadivar

const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/users.js')

const verifyToken = async (token) => {
    try{
        console.log(token)
        const data = jwt.verify(token,process.env.JWT_SECRET)
        if(data){
            var user = null
            await User.findById(data.userId).then((doc)=>{
                if(doc){
                    user = doc
                }
            })
            if(user && user.role == "admin"){
                return true
            }else {
                return false
            }
        }else {
            return false
        }
    }catch(err){
        console.log(err)
        return false
    }
}

const adminAuth = asyncHandler(async(req, res, next) => {
    var jwt_token
    if(req.headers.token){
        var header_auth = req.headers.token
        var jwt_token = header_auth.substring(7)
        // console.log(jwt_token)
        try {
            const result = await verifyToken(jwt_token)
            if(result){
                next()
            }else {
                res.status(401)
                res.send("Unauthorized")
            } 
        }catch(err){
            res.status(400)
            res.send("Error")
        }
    }
})

module.exports = adminAuth