import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from "../../../Images/Travelink Logo.png";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
        <Container>
            <Row>
                <Col md={3} sm={6} xs={12}>
                    <div className="about-us">
                        <img src={logo} alt="" />
                        <h4>Travelink . The Best Travel Agency Company. Trusted and reliable tour and travel agency among all the leading and updated tour operation service in Bangladesh</h4>
                        <ul>
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="departments">
                    <h3>Contact Us</h3>
                        <div className="contact">
                        <i class="fas fa-phone-alt"></i>
                        <div className="contact-item">
                            <h6>+01777-1222122</h6>
                            <h6>+01888-1999122</h6>
                        </div>
                        </div>
                        <div className="contact">
                        <i class="far fa-envelope"></i>
                        <div className="contact-item">
                            <h6>info@travelink.com</h6>
                            <h6>support@travelink.com</h6>
                        </div>
                        </div>
                        <div className="contact">
                        <i class="fas fa-map-marker-alt"></i>
                        <div className="contact-item">
                            <h6>1207 Dhanmondi </h6>
                            <h6>Dhaka, Bangladesh</h6>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="links">
                        <h3>Links</h3>
                        <ul>
                          <li><Link to="/home">Home</Link></li>
                          <li><HashLink to="/home#tourpakages">Tour Pakages</HashLink></li>
                          <li><Link to="/myOrders">My Order</Link></li>
                          <li><Link to="/manageAllOrder">Manage All Order</Link></li>
                          <li><Link to="/addPakage">Add Pakage</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="we-accept">
                        <h3>We Accept</h3>
                        <img className='w-100' src="https://i.ibb.co/PCkYDgv/ssl-commerce-1d268dce.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>    
        </div>
    );
};

export default Footer;