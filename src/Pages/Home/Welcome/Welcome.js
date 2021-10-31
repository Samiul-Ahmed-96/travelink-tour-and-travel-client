import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Welcome.css';

const Welcome = () => {
    return (
        <Container className="p-4">
            <Row className="d-flex align-items-center welcome-container" >
                <Col md={6} sm={12} xs={12}>
                    <div className="left-item">
                        <img className="w-100" src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </div>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <div className="right-item">
                        <h1>A Simply Perfect Place To Get Lost</h1>
                        <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
                        <button>See more</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;