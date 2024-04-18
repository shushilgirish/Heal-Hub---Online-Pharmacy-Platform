import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/nav.png';
import home1 from '../../assets/home1.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img className="d-block mx-auto mb-4" src={logo} alt="" width="160" height="150" />
      <h1 className="display-5 fw-bold text-body-emphasis">Heal Hub</h1>
      <h6 className="display-7  text-body-emphasis">Your Wellness, Delivered</h6>

      <Container>
        <Row>
          <Col lg={6} className="mx-auto">
            <p className="lead mb-4">We prioritize your health and wellness, offering expert advice and guidance on medication usage, dosage, and potential interactions. Our team of pharmacists is dedicated to ensuring that you have access to the information you need to make informed decisions about your health.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="col-xxl-8 px-4 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
          <Col xs={10} sm={8} lg={6}>
            <img src={home1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </Col>
          <Col lg={6}>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your Premier Wholesale Wellness Destination</h1>
            <p className="lead">Explore our extensive selection of products, from pharmaceuticals to organic supplements, carefully curated to meet your wholesale needs. Partner with HealHub and unlock access to top-tier wellness products, ensuring your clientele receive the best in health and wellness.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              
            </div>
          </Col>
        </Row>
      </Container>

      {/* Product cards section */}
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">Featured Products</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Sample product cards */}
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ9RoiAPzD8ArqjOzY9Axy5Z9JOFNIkkDxyGs5DfRIQGd3WrtKaQeLELedb12IFNbRyGV7XHXdmRNaPWsnvuF5YBchzGpHj4yeh_CjHiOggnH6ljF-PuE38hqLQLhLUoVOc_jXni4Q&usqp=CAc" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>Tylenol Extra Strength Acetaminophen</Card.Title>
                <Card.Text>
                  $5.99
                  {/* Product description */}
                </Card.Text>
                <Link to="/signin">
                  <Button variant="primary">Add to Cart</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgDED7UZ61RNHNeeqDgC_8D0G2xgd80Owb6iRDOB7RR4FUmUBQuoBGwJHQxz3bDjQVSYFeG0fEmbYgJVUIY8v5jPeLFv5fuDsQy5SxAxQ-PzDvKuCZYn-ePy9v_3vvwEooStRvEoUB&usqp=CAc" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>MAC Lipstick</Card.Title>
                <Card.Text>
                  $8.99
                  {/* Product description */}
                </Card.Text>
                <Link to="/signin">
                  <Button variant="primary">Add to Cart</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4SsEtPxBZw4PS12_7cVhepnRoHYNmoFAfU2UZfxZorhG-85QbV-TBg8VK8f3y3gDyVhWFWXBdJF5-kwXMf1lzwRmW2apkknhpCyVhIExyCZy5AD_3ZfLS0_DosHRDsw&usqp=CAc" style={{ height: '200px'}} />
              <Card.Body>
                <Card.Title>Burt's Bees Lip Balm</Card.Title>
                <Card.Text>
                  $2.99
                  {/* Product description */}
                </Card.Text>
                <Link to="/signin">
                  <Button variant="primary">Add to Cart</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br/><br/>
      {/* Additional products section */}
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">Additional Products</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Additional product cards */}
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src= "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQedcKZ2L7Nqe7i4o_nvI8QkxyNDAtXWksPbSZ-1ytEF3LowFgnjuFrx3UgjKE5zeBjMCKbR5kPS_VGCZAfl2MPX0z9nmJObvBMzPO1u6o_00PyVFckVZImtc8APoZA4IVZ5D0wkA&usqp=CAc" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>Garden of Life Organic Vegan Protein Powder</Card.Title>
                <Card.Text>
                  {/* Product description */}
                  $4.99
                </Card.Text>
                <Link to="/signin">
                  <Button variant="primary">Add to Cart</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDrH78awP_yTuDJpnP4XNjGEcfAnG4xpdnzouBAQ6Wqn3uVlBq9hEsNbSa5VJU14IZMZSNfTCS2PrHdDSiwQhS2wV3gzJMJtVOU6_GA4ScrM4l_qVT484cyS1Q6lDQVZfmOO6n7nw&usqp=CAc" style={{ height: '200px'}} />
              <Card.Body>
                <Card.Title>Orgain Organic Plant Based Protein Bar</Card.Title>
                <Card.Text>
                  $21.99
                  {/* Product description */}
                </Card.Text>
                <Link to="/signin">
                  <Button variant="primary">Add to Cart</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyH7Obw1ZbDalGueDJI7Ucs-iHHMSFwiLBfQ5kR1xnVMExeVN-ldH6WxStBfpTi2IoTDLFEqKKJvKkNeHnuVIAUSylryGKDtDsWc3V7k3S97E10iuSfN8K6iDNT-WIRwNL0AZ36Oo&usqp=CAc" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>Benadryl Allergy Relief</Card.Title>
                <Card.Text>
                  $9.99 
                  {/* Product description */}
                </Card.Text>
                <Link to="/signin">
                  <Button variant="primary">Add to Cart</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
