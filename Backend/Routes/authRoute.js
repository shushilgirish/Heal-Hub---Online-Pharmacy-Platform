//Routes/authRoute.js
const express = require('express');
const { createUser, loginUserCtrl, getAllUsers, getUserById, deleteUserById, updateUserById,blockUser,unblockUser, handleRrefreshToken } = require('../Controllers/userCtrl');
const router = express.Router();
const { authMiddlewares ,isAdmin} = require('../Middlewares/authMiddlewares');

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", authMiddlewares, getAllUsers);
router.get("/refresh",handleRrefreshToken);
router.get("/:id", authMiddlewares,isAdmin,getUserById);
router.delete("/:id",  deleteUserById);
router.put("/edit-user",authMiddlewares, updateUserById);
router.put("/block-user/:id",authMiddlewares,isAdmin ,blockUser);
router.put("/unblock-user/:id",authMiddlewares,isAdmin ,unblockUser); 

module.exports = router;

