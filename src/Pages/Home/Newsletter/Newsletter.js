import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} sm={12} xs={12}>
                        <div className="newsletter-left">
                            <h2>SUBSCRIBE OUR <br /> <span>NEWSLETTER</span></h2>
                            <p>Sign up to receive the best offers on promotion and coupons. <br /> Don’t worry! It’s not Spam</p>
                            <div className="input-item">
                                <input type="email" placeholder='Email Here' id="" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <Row>
                            <Col md={6} sm={12} xs={12}>
                                <div className="newsletter-right">
                                <i class="fas fa-globe-asia"></i>
                                <h2>500+</h2>
                                <h4>Awesome Tour</h4>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12}>
                                <div className="newsletter-right">
                                <i class="fas fa-search-location"></i>
                                <h2>300+</h2>
                                <h4>New Destinations</h4>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12}>
                                <div className="newsletter-right">
                                <i class="fas fa-certificate"></i>
                                <h2>05+</h2>
                                <h4>Years Experience</h4>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12}>
                            <div className="newsletter-right">
                                <i class="fas fa-globe-asia"></i>
                                <h2>150+</h2>
                                <h4>Best Mountains</h4>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;