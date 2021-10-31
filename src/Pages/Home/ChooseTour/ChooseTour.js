import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ChooseTour.css';

const ChooseTour = () => {
const [tours,setTours] = useState([]);

    useEffect(()=>{
        fetch('/choosetour.json')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])
    
    return (
        <Container id="chooseTour" className='choose-items-container'>
        <Row>
        <h2 className="section-heading">Choose Tour</h2>
            {
                tours.map(item => <Col md={3} sm={6} xm={12} key={item.id}>
                                    <div className="choose-item">
                                        <img src={item.img} alt="" />
                                        <h3>{item.des}</h3>
                                    </div>
                                  </Col>)
            }
        </Row>
        </Container>
    );
};

export default ChooseTour;