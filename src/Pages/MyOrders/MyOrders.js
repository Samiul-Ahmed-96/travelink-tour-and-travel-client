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
         fetch('https://limitless-earth-18876.herokuapp.com/orders')
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
                            <h5>Booked By</h5>
                            <h3>{order.name}</h3>
                            <small>{order.email}</small>
                            <h5>Pakage Name</h5>
                            <h3>{order.pakageName}</h3>
                            <p>Status : {order.status}</p>
                        </div>
                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default MyOrders;