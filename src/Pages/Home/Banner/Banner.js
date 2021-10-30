import React from 'react';
import { Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <Row>
            <div className="banner">
                <div className="banner-content">
                    <h3> Travel with your soul with Travelink</h3>
                    <h1>Experience everything has nature offer</h1>
                    <HashLink to="/home#tourpakages"><button>Explore Pakages</button></HashLink>
                </div>
            </div>
        </Row>
    );
};

export default Banner;