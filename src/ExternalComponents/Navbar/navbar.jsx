import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeftLong, faCaretDown, faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {Form, Nav, Navbar, Button, InputGroup} from 'react-bootstrap'; 

// Images
import blinkitIcon from '../../assets/logo/Blinkit-icon.png';
import blinkit from '../../assets/logo/blinkit.png';

// CSS Files
import './navbar.css';
import './ModalCSS/locationModal.css';
import './ModalCSS/loginModal.css';


function NavigationBar() {
  return (
    <>
        {/* Location Modal start */}
        <div className="modal fade location-modal" id="DetectLocation" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="DetectLocationLabel" aria-hidden="true">
          <div className="modal-dialog location-modal-dialog">
            <div className="modal-content locationModalContent rounded-0">
              <div className="modal-header locationModalHeader border-0">
                <p className="modal-title fs-6 fw-normal pb-0">Change Location</p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body locationModalbody d-flex align-items-center gap-3">
                <button className="btn location-btn">Detect my location</button>
                <div className="detect-or-divider"><span>OR</span></div>
                <input type="text" className="detect-location-input" placeholder="search delivery location"/>
              </div>
            </div>
          </div>
        </div>
        {/* Location Modal end */}
        
        {/* Login Modal start */}
        <div className="modal fade login-modal" id="Login" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog login-modal-dialog modal-dialog-centered">
            <div className="modal-content loginModalContent">
              <div className="modal-header loginModalHeader">
                <h1 className="modal-title fs-5" ><FontAwesomeIcon icon={faArrowLeftLong} data-bs-dismiss="modal" aria-label="Close" /></h1>
                <img src={blinkitIcon} alt="" width={"70px"} />
              </div>
              <div className="modal-body loginModalBody">
                <h3>India's last minute app</h3>
                <p>Log in or Sign up</p>
                <form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                  <Form.Control placeholder="Enter mobile number" aria-label="Username" aria-describedby="basic-addon1"/>
                </InputGroup>
                  <Button className='btn loginbtn'>Continue</Button>
                </form>
              </div>
              <div className="modal-footer">
              By continuing, you agree to our <span>Terms of service</span> & <span>Privacy policy</span>
              </div>
            </div>
          </div>
        </div>
        {/* Login Modal end */}
           
            <Navbar fixed='top' expand='lg' style={{borderBottom:"1px solid rgb(238,238,238)"}}>
              <Navbar.Brand href="#"><img src={blinkit} alt='blinkit brand' /></Navbar.Brand>
              <div className="delivery" data-bs-toggle="modal" data-bs-target="#DetectLocation">
                <h5>Delivery in 8 minutes</h5>
                <p>B62, Pocket B, South City I, Sect...<FontAwesomeIcon icon={faCaretDown} className="down" /></p>
              </div>
              <button className="navbar-toggle user"><FontAwesomeIcon icon={faUser} className='icon' /></button>
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex align-items-center search-box">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='magnify' />
                  <Form.Control type="search" placeholder='Search "paneer"' className="search" aria-label="Search"/>
                </Form>
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link href="#action1" data-bs-toggle="modal" data-bs-target="#Login">Login</Nav.Link>
                </Nav>
                <div className="cart-btn d-flex align-items-center">
                  <FontAwesomeIcon icon={faCartShopping} className="cart"/>
                  <button>My Cart</button>
                </div>
            </Navbar.Collapse>
          </Navbar>
    </>
  );
}

export default NavigationBar;
