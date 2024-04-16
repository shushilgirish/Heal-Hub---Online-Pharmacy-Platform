import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const AddToCartPage = ({ cartItems, setCartItems }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [removedItemName, setRemovedItemName] = useState('');

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [cartItems]);

    function calculateTotalPrice() {
        return cartItems.reduce((total, item) => total + (item.productPrice * parseInt(item.quantity || 1)), 0);
    }

    const handleCheckout = async () => {
        try {
            const stripePromise = loadStripe('pk_test_51P6IGS083sUohJxxQ6MyIZmVoOt27nejRJDCa9oS8Se0bnMahOm4ZAnzDdrCZclaGBp3vK6mKcyzo0vjjdmVjuhI00LlH6kuCh');
            const response = await axios.post('http://localhost:3000/api/user/checkout', { product: cartItems }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const session = response.data;
            
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (error) {
                console.error('Error redirecting to checkout:', error);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server Error:', error.response.data);
                console.error('Status Code:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up request:', error.message);
            }
        }
    };

    const removeFromCart = (index) => {
        const removedItem = cartItems[index];
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        setRemovedItemName(removedItem.productName);
        setShowModal(true);
    };

    const handleQuantityChange = (index, event) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity = event.target.value;
        setCartItems(newCartItems);
    };

    const incrementQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity = (newCartItems[index].quantity || 1) + 1;
        setCartItems(newCartItems);
    };

    const decrementQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity--;
            setCartItems(newCartItems);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="mt-4">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.productName}</td>
                                    <td>{item.productDescription}</td>
                                    <td>${item.productPrice.toFixed(2)}</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" onClick={() => decrementQuantity(index)}>-</Button>{' '}
                                        <span>{item.quantity || 1}</span>
                                        <Button variant="outline-primary" size="sm" onClick={() => incrementQuantity(index)}>+</Button>
                                    </td>
                                    <td>${(item.productPrice * parseInt(item.quantity || 1)).toFixed(2)}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
                    <Button variant="success" onClick={handleCheckout}>Checkout</Button>
                </div>
            )}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Item Removed</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`${removedItemName} has been removed from the cart.`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AddToCartPage;
