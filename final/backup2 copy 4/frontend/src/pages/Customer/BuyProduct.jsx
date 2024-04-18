import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Modal } from 'react-bootstrap';
import './BuyProduct.css'; // Import custom CSS file for styling

const BuyProduct = ({ addToCart, cartItems }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/getAllTypeProduct');
                setProducts(response.data);
            } catch (error) {
                setError('Error fetching products');
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        const isAlreadyInCart = cartItems && cartItems.some((item) => item._id === product._id);
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
        <>
            <Container className="mt-4">
                <h2 className="section-title">Products</h2>
                <div className="row">
                    {products.map((product) => (
                        <div key={product._id} className="col-md-4 mb-3">
                            <Card className="product-card">
                                <Card.Img variant="top" src={`http://localhost:3000/Images/${product.productImage}`} className="product-image" />
                                <Card.Body>
                                    <Card.Title className="product-title">{product.productName}</Card.Title>
                                    <Card.Text className="product-description">{product.productDescription}</Card.Text>
                                    <Card.Text className="product-price">Price: ${product.productPrice}</Card.Text>
                                    <Button variant="primary" onClick={() => handleAddToCart(product)} disabled={addedToCart[product._id] || (cartItems && cartItems.some(item => item._id === product._id))}>
                                        {cartItems && cartItems.some(item => item._id === product._id) ? 'Already Added' : 'Add to Cart'}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>Product added to cart.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BuyProduct;
