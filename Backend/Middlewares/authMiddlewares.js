//Middlewares/authMiddlewares.js
const User = require('../Models/userModels.js');
const jwt = require('jsonwebtoken');
const ascyncHandler = require('express-async-handler');


const authMiddlewares = ascyncHandler (async (req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
        try{
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await User.findById(decoded?.id);
                req.user = user;
                next();
            }

        }catch(error){
            throw new Error('Not Authorized, token expired, please login again');
        }

    } else {
        throw new Error('There is no token to header');
    }
});
const isAdmin = ascyncHandler(async (req, res, next) => {
    const {email} = req.user;
    const adminUser = await User.findOne({email});
    if(adminUser.role !=='admin'){
        throw new Error('Not Authorized, you are not an admin');
    }
    else{
        next();
    
    }
});
module.exports = {authMiddlewares,isAdmin};
 