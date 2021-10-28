import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SinglePakage from '../Home/SinglePakage/SinglePakage';

const TourPakages = () => {

    const [pakages,setPakages] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/tourPakages')
        .then(res => res.json())
        .then(data => setPakages(data))
    },[])

    return (
        <Container>
            <Row>
            {
                pakages.map(pakage => <SinglePakage key={pakage._id} pakage={pakage}></SinglePakage>)
            }
            </Row>
        </Container>
    );
};

export default TourPakages;