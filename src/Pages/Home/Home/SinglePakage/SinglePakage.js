import React from 'react';
import { Col } from 'react-bootstrap';

const SinglePakage = (props) => {
    const{name,duration,price,rating,img} = props.pakage;
    return (
        <Col md={6} sm={6} xs={12}>
            <div className="single-pakage">
                <img className='w-100' src={img} alt="" />
                <h2>${price} <span>/Per Person</span> </h2>
                <h4>{duration}</h4>
                <h3>{name}</h3>
                <h5>{rating}</h5>
            </div>
        </Col>
    );
};

export default SinglePakage;