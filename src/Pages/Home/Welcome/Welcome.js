import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className='welcome my-5'>
        <Row className='align-items-center'>
          <Col md={6} sm={12} xs={12}>
            <img className="w-100" src="https://i.ibb.co/B31txpr/pexels-pixabay-415708-1.jpg" alt="" />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div className="welcome-content">
            <h1>A Simply Perfect Place To Get Lost</h1>
            <h5>
              When it comes to exploring exotic places, the choices are numerous.
              Whether you like peaceful destinations or vibrant landscapes, we
              have offers for you.Treat yourself with a journey to your inner
              self. Visit a mystique Tibet and start your spiritual adventure. We
              promise, you’ll enjoy every step you make.
            </h5>
            <button className="">
              See more <i class="fas fa-arrow-right"></i>
            </button>
            </div>
          </Col>

        </Row>
    </section>
  );
};

export default Welcome;