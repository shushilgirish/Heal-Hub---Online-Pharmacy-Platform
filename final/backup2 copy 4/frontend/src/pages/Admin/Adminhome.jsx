import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/nav.png';
import home1 from '../../assets/home1.png';
import adminImage from '../../assets/c1.png'; // Importing admin image

const Home = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      {/* Admin Section */}
      <Container className="col-xxl-8 px-4 py-5">
        <Row className="py-5">
          <Col>
            <h2 className="text-center">Admin Workspace</h2>
            <p className="lead text-center">This is your dashboard where you can manage all aspects of your website. Feel free to add, edit, or remove content as needed.</p>
          </Col>
        </Row>
        <Row className="flex-lg-row align-items-center g-5 py-5">
          <Col lg={6}>
            <img src={adminImage} className="d-block mx-lg-auto img-fluid" alt="Admin Page" width="700" height="500" loading="lazy" />
          </Col>
          <Col lg={6}>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome, <span style={{ color: 'green' }}>Admin!</span></h1>
            <p className="lead">Manage your website efficiently with our user-friendly admin panel. Add, edit, or remove content effortlessly.</p>
            <Button variant="success">Go to Admin Panel</Button>
          </Col>
        </Row>
        {/* Additional Content */}
        <Row className="py-5">
          <Col>
            <h2 className="text-center">Other Contents</h2>
            <p className="lead text-center">Here you can add more information or features related to your admin panel or website management.</p>
            <p className="lead text-center">You might want to include charts, tables, or other interactive elements to visualize data or statistics.</p>
            <Button variant="success" className="mx-auto d-block">View Reports</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
