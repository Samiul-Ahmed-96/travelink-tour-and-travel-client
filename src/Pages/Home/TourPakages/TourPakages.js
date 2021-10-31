import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SinglePakage from '../SinglePakage/SinglePakage';
import './TourPakages.css';

const TourPakages = () => {
    //State
    const [pakages,setPakages] = useState([]);
    //Data Load
    useEffect(()=>{
        fetch('https://limitless-earth-18876.herokuapp.com/tourPakages')
        .then(res => res.json())
        .then(data => setPakages(data))
    },[])

    return (
        <Container id='tourpakages'>
            <Row>
            <h2 className="section-heading">Tour Pakages</h2>
            {
                pakages.map(pakage => <SinglePakage key={pakage._id} pakage={pakage}></SinglePakage>)
            }
            </Row>
        </Container>
    );
};

export default TourPakages;