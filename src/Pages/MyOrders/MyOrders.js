import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth()
     //State
     const [myOrders,setMyOrders] = useState([]);
     //Data Load
     useEffect(()=>{
         fetch('http://localhost:5000/orders')
         .then(res => res.json())
         .then(data => {
            setMyOrders(data);
         })
     },[])
     const result = myOrders.filter(order => order.email === user.email);
     
    return (
        <Container>
            <Row className='my-orders-container'>
            <h2>Your Orders</h2>
                {
                    result.map(order => <Col md={4}>
                        <div className="my-orders">
                            <h5>Booked By : {order.name}</h5>
                            <small>{order.email}</small>
                            <h5>Pakage Name</h5>
                            <h4>{order.pakageName}</h4>
                            <p>Status : {order.status}</p>
                        </div>
                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default MyOrders;