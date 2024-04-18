import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/nav.png';
import home1 from '../../assets/home1.png';
import Carousel from 'react-bootstrap/Carousel';
import home2 from '../../assets/c2.png'
import home3 from '../../assets/c3.png'
import { Link } from 'react-router-dom';
import './styles.css';

const Loggenin = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBookConsultation = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Sample articles data
  const articles = [
    { title: '5 Tips for a Healthy Lifestyle', content: 'This article could discuss the various responsibilities and contributions of pharmacists in ensuring patient health and safety, including medication dispensing',image: {home3} },
    { title: 'The Role of Pharmacists in Healthcare"', content: 'This article could explore recent advancements in pharmaceutical technology, such as the development of novel drug delivery systems, the use of artificial intelligence in drug discovery, and the rise of personalized medicine.',image: 'path/to/image1.jpg' },
    { title: 'he Impact of Regulatory Changes on the Pharmacy Industry', content: 'This article could examine how changes in regulations, such as new drug approval processes or healthcare policies, affect pharmacy practices and patient care. ',image: 'path/to/image1.jpg' },
  ];

  return (
    <div className="px-4 py-5 my-5 text-center">

      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mx-auto text-lg-start">
            <img className="d-block mx-auto mb-4" src={logo} alt="Heal Hub Logo" width="400" height="350" />
          </Col>
          <Col lg={6} className="mx-auto text-lg-start">
            <h1 className="display-5 fw-bold text-body-emphasis">Welcome to Heal Hub</h1>
            <h6 className="display-7 text-body-emphasis">Your Wellness, Delivered</h6>
            <p className="lead mb-4">At Heal Hub, we prioritize your health and well-being. Our platform offers a wide range of wellness products and services, along with expert advice from our team of pharmacists. Whether you're looking for medication information, health tips, or high-quality products, Heal Hub is here to support you on your wellness journey.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="./buyproduct">
                <Button variant="success" className="me-2">Explore Products</Button>
              </Link>
              <Button variant="outline-success" onClick={handleBookConsultation}>Book Consultation</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container>
        <Row className="mt-5">
          <Col lg={6} className="d-flex align-items-center">
            <div>
              <h2>Why Choose Heal Hub?</h2>
              <p>Discover the benefits of using Heal Hub for your health and wellness needs:</p>
              <ul>
                <li>Access to a wide range of high-quality products</li>
                <li>Expert advice and guidance from qualified pharmacists</li>
                <li>Convenient online platform for easy browsing and ordering</li>
                <li>Secure and reliable transactions for peace of mind</li>
              </ul>
              <p>Join Heal Hub today and take control of your health journey!</p>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center"> {/* Adjusted alignment */}
            <img src={home2} alt="Image Description" className="img-fluid rounded-custom" style={{ maxWidth: '100%', height: 'auto' }} /> {/* Added style for responsive image */}
          </Col>
        </Row>
      </Container>

      <br></br>

      <Container>
        <Row className="mt-5">
          <Col>
            <h2>Discover Our Services</h2>
            <p>At Heal Hub, we offer a variety of services tailored to meet your health and wellness needs:</p>
            <p>Our pharmacy services include prescription filling, medication therapy management, and immunizations. We also provide personalized consultations with experienced pharmacists who can offer advice on medication usage, health conditions, and lifestyle modifications.</p>
            <p>In addition to pharmaceutical services, we offer a wide range of wellness products, including vitamins, supplements, and over-the-counter medications. Our knowledgeable staff is here to help you find the right products for your health goals.</p>
            <p>Whether you're looking for expert advice or high-quality products, Heal Hub is your one-stop destination for all things health and wellness.</p>
          </Col>
        </Row>
      </Container>

      {/* Modal for consultation booking */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book Consultation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Our team will contact you in the next 24 hours to schedule your consultation.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Loggenin;
