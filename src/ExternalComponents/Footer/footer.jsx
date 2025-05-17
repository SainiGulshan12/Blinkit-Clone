import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faTwitter, faThreads, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <Container className='footer outerSection'>
        <Row className='link-catogories'>
          <Col lg={4}>
            <h4>Useful Links</h4>
          </Col>
          <Col lg={8}>
            <h4>Categories <span>see all</span></h4>
          </Col>
        </Row>

        <Row className='pageLinks'>
          <Col lg={12} className="d-flex">
            <Row className="col-lg-4 linkItem1">
              <Col>
                <p>About</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Press</p>
                <p>Lead</p>
                <p>Value</p>
              </Col>
              <Col>
                <p>Privacy</p>
                <p>Terms</p>
                <p>FAQs</p>
                <p>Security</p>
                <p>Mobile</p>
                <p>Contact</p>
              </Col>
              <Col>
                <p>Partner</p>
                <p>Franchise</p>
                <p>Seller</p>
                <p>Warehouse</p>
                <p>Deliver</p>
                <p>Resources</p>
              </Col>
            </Row>
            <Row className="col-lg-8 linkItem2">
              <Col>
                <p>Vegetables & Fruits</p>
                <p>Cold Drinks & Juices</p>
                <p>Bakery & Biscuits</p>
                <p>Dry Fruits, Masala & Oil</p>
                <p>Paan Corner</p>
                <p>Pharma & Wellness</p>
                <p>Ice Creams & Frozen Desserts</p>
                <p>Beauty & Cosmetics</p>
                <p>Electronics & Electricals</p>
                <p>Toys & Games</p>
              </Col>
              <Col className="ms-5">
                <p>Dairy & Breakfast</p>
                <p>Instant & Frozen Food</p>
                <p>Sweet Tooth</p>
                <p>Sauces & Spreads</p>
                <p>Organic & Premium</p>
                <p>Cleaning Essentials</p>
                <p>Personal Care</p>
                <p>Magazines</p>
                <p>Stationery Needs</p>
                <p>Print Store</p>
              </Col>
              <Col>
              <p>Munchies</p>
                <p>Tea, Coffee & Health Drinks</p>
                <p>Atta, Rice & Dal</p>
                <p>Chicken, Meat & Fish</p>
                <p>Baby Care</p>
                <p>Home & Office</p>
                <p>Pet Care</p>
                <p>Fashion & Accessories</p>
                <p>Books</p>
                <p>E-Gift Cards</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='downloadAndFollow align-items-center justify-content-center'>
          <Col lg={4} className="copyright text-xl-end text-start">
            <p>© Blink Commerce Private Limited, 2016-2025</p>
          </Col>
          <Col lg={4} className="download d-flex justify-content-end align-items-center gap-3 fw-bold">
              <p>Download App</p>
              <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="img" />
              <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="img" />
          </Col>
          <Col lg={4} className='follow'>
            <FontAwesomeIcon icon={faFacebookF} className='icon'/>
            <FontAwesomeIcon icon={faTwitter} className='icon'/>
            <FontAwesomeIcon icon={faInstagram} className='icon'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
            <FontAwesomeIcon icon={faThreads} className='icon'/>
          </Col>
        </Row>
        <Row>
        <Col className='col-12 description'>
            <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
          </Col>
        </Row>
    </Container>
  )
}

export default Footer;