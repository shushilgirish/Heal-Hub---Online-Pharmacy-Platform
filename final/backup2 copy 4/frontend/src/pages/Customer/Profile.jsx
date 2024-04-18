import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'; // Import custom CSS file for styling

const Profile = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            axios.get(`http://localhost:3000/api/user/getUserByEmail/${email}`)
                .then(response => setUser(response.data))
                .catch(error => console.error('Error fetching user:', error));
        }
    }, []);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            mobile: user.mobile
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const email = localStorage.getItem('email');
        try {
            await axios.put(`http://localhost:3000/api/user/updateUser/${email}`, formData);
            // Fetch user details again after update
            axios.get(`http://localhost:3000/api/user/getUserByEmail/${email}`)
                .then(response => {
                    setUser(response.data);
                    setShowSuccessModal(true);
                    setIsEditing(false);
                })
                .catch(error => console.error('Error fetching user:', error));
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user details.');
        }
    };

    return (
        <Container className="profile-container">
            <h2 className="profile-heading">User Profile</h2>
            {user ? (
                <Card className="profile-card">
                    <Card.Body>
                        {!isEditing ? (
                            <>
                                <div className="profile-info">
                                    <label className="profile-label">First Name:</label>
                                    <span>{user.firstName}</span>
                                </div>
                                <div className="profile-info">
                                    <label className="profile-label">Last Name:</label>
                                    <span>{user.lastName}</span>
                                </div>
                                <div className="profile-info">
                                    <label className="profile-label">Mobile:</label>
                                    <span>{user.mobile}</span>
                                </div>
                                
                                <Button variant="primary" onClick={handleEditClick} className="edit-button">
                                    Edit
                                </Button>
                                <br /><br />  
                            </>
                        ) : (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label className="profile-label">First Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formLastName">
                                    <Form.Label className="profile-label">Last Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formMobile">
                                    <Form.Label className="profile-label">Mobile:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter mobile number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <br />
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                                <br /><br />
                                <Button variant="secondary" onClick={handleCancelClick} className="cancel-button">
                                    Cancel
                                </Button>
                                <br /> <br />
                            </Form>
                            
                        )}
                        <div className="profile-info">
                            <label className="profile-label">Email:</label>
                            <span>{user.email}</span>
                        </div>
                        <div className="profile-info">
                            <label className="profile-label">Role:</label>
                            <span>{user.role}</span>
                        </div>
                    </Card.Body>
                </Card>
            ) : (
                <p>Loading...</p>
            )}

            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>User details updated successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Profile;
