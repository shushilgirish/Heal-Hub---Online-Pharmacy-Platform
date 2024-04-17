const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.sk_test_51P6IGS083sUohJxxZOwaSu6xXLSJcnocBKQhX8tuhx25FvTaUKvSIQvqLikYIekzvil1H1QrV58wEO5hiG4f1nqL0065kRIygt);

// Import your user and product controllers
const { createUser, loginUserCtrl, getAllUsers, getUserById, deleteUserById, updateUserByEmail, getUserByEmail, updateUserPasswordByEmail } = require('../Controllers/userCtrl');
const { createProduct, getAllProducts, getAllTypeProduct } = require('../Controllers/productCtrl');

// User routes
router.post("/register", createUser);
router.post("/login", loginUserCtrl); 
router.get("/getAllUsers", getAllUsers);
router.get("/editUser/:id", getUserById);
router.delete("/deleteUser/:id", deleteUserById);
router.put("/updateUser/:email", updateUserByEmail);
router.get("/getUserByEmail/:email", getUserByEmail);
router.put("/updatePasswordByEmail/:email", updateUserPasswordByEmail);

// Product routes
router.post("/product", createProduct);
router.get("/getAllProduct", getAllProducts);
router.get("/getAllTypeProduct", getAllTypeProduct);  

// Checkout route
router.post("/checkout", async (req, res) => {
    const { product } = req.body;
    const line_items = product.map(item => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.productName,
                    images: [item.productImage]
                },
                unit_amount: Math.round(item.productPrice * 100)   
            },
            quantity: item.quantity
        };
    });
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });
    res.json({ id: session.id });
});

module.exports = router;
