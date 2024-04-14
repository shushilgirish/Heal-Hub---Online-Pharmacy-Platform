//Controller/UserCtrl.js
const { generateToken } = require('../Config/jwtToken');
const asyncHandler = require('express-async-handler');
const User = require('../Models/userModels');
const validateMongodbId = require('../utils/validateMongodbId');
const { generateRefreshToken } = require('../Config/refreshtoken');
const createUser = asyncHandler(async (req, res) => {
    const { email, mobile } = req.body;
    try {
        // Create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        // Check if the error is a duplicate key error
        if (error.code === 11000 && error.keyPattern.mobile === 1) {
            return res.status(400).json({ message: "User with this mobile number already exists" });
        }
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // Check if user exists and password is correct
    const findUser = await User.findOne({ email });
    if (findUser && await findUser.ispasswordMatched(password)) {
        const refreshToken = generateRefreshToken(findUser?.id);
        const updatedUser = await User.findByIdAndUpdate(findUser._id, { refreshToken: refreshToken, }, { new: true });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser._id,
            firstName: findUser.firstName,
            lastName: findUser.lastName,
            email: findUser.email,
            mobile: findUser.mobile,
            isAdmin: findUser.isAdmin,
            role: findUser.role, 
            token: generateToken(findUser._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

const handleRrefreshToken = asyncHandler(async (req, res) =>{
    const cookie = req.cookies;
    console.log(cookie);
 } )

const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        throw new Error("Error fetching users");
    }
});

const getUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const user = await User.findById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        throw new Error("Error fetching user");
    }
});

const deleteUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (deletedUser) {
            res.json(deletedUser);
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        throw new Error("Error deleting user");
    }
});

const updateUserById = asyncHandler(async (req, res) => {
    console.log(req.user);
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },{new:true});
        res.json(updatedUser);
}catch (error) {
    throw new Error("Error updating user"); 
}   
});

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const block = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
        res.json({ message: "User blocked" });
        
    }
    catch (error) {
        throw new Error("Error blocking user");
}});
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const unblock = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
        res.json({ message: "User Unblocked" });
    }
    catch (error) {
        throw new Error("Error blocking user");
}
});


module.exports = {
    createUser,
    loginUserCtrl,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById,
    blockUser,
    unblockUser,
    handleRrefreshToken,
};
