// Category.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Modal } from 'react-bootstrap';

const Category = ({ addToCart, cartItems }) => {
    const [productsByType, setProductsByType] = useState([]);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    useEffect(() => {
        const fetchProductsByType = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/getAllProduct');
                setProductsByType(response.data);
            } catch (error) {
                setError('Error fetching products');
                console.error('Error fetching products:', error);
            }
        };
        fetchProductsByType();
    }, []);

    const handleAddToCart = (product) => {
        const isAlreadyInCart = cartItems.some((item) => item._id === product._id);
        if (!isAlreadyInCart) {
            addToCart(product);
        }
        setAddedToCart({ ...addedToCart, [product._id]: true });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="mt-4">
            <h2>Products</h2>
            {error && <p>{error}</p>}
            {productsByType.map((group) => (
                <div key={group._id}>
                    <h3>{group._id}</h3>
                    <div className="row">
                        {group.products.map((product) => (
                            <div key={product._id} className="col-md-2 mb-3">
                                <Card style={{ width: '200px' }}>
                                    <Card.Img variant="top" src={`http://localhost:3000/Images/${product.productImage}`} style={{ width: '180px', height: '180px' }} />
                                    <Card.Body>
                                        <Card.Title>{product.productName}</Card.Title>
                                        <Card.Text>{product.productDescription}</Card.Text>
                                        <Card.Text>Price: ${product.productPrice}</Card.Text>
                                        <Button variant="primary" onClick={() => handleAddToCart(product)} disabled={addedToCart[product._id] || cartItems.some(item => item._id === product._id)}>
                                            {cartItems.some(item => item._id === product._id) ? 'Already Added' : 'Add to Cart'}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>Product added to cart.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Category;
