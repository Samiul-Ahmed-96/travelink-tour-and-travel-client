import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PakageDetail = () => {
    //Get the ID 
    const {id} = useParams();
    //State
    const [singlePakage,setSinglePakage] = useState({})
    //Data load
    useEffect(()=>{
        fetch(`http://localhost:5000/tourPakages/${id}`)
        .then(res => res.json())
        .then(data => setSinglePakage(data))
    },[])
    return (
        <Container>
            <Row>
                <Col md={6} sm={12} xs={12}>
                    <img className='w-100' src={singlePakage.img} alt="" />
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <div className="pakage-details">
                    <h1>{singlePakage.name}</h1>
                    <h2>${singlePakage.price} <span>/Per Person</span> </h2>
                    <p>{singlePakage.description}</p>
                    <h5><i class="far fa-star"></i> {singlePakage.rating}</h5>
                    <Link to={`/booking/${singlePakage._id}`}>
                        <button><i class="far fa-plus-square"></i> Booking</button>
                    </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PakageDetail;