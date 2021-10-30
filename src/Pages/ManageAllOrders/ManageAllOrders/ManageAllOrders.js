import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

     //State
     const [orders,setOrders] = useState([]);
     //Data Load
     useEffect(()=>{
         fetch('http://localhost:5000/orders')
         .then(res => res.json())
         .then(data => setOrders(data))
     },[])
    
     //handle Delete
    const handleDelete = (id ) =>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                alert('Deleted');
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining);
            }
        })
    }

    return (
        <div>
            <Container className="manage-all-orders">
                <h2>All orders</h2>
                <Row>
                    {
                        orders.map(order => <Col md={4} sm={12}>
                            <div className="order-item">
                                <h2>{order.pakageName}</h2>
                                <h1>Price : {order.pakagePrice}$</h1>
                                <p>{order.address}</p>
                                <h4>Status : {order.status}</h4>
                                <h1>Booked By</h1>
                                <h3>{order.name}</h3>
                                <small>{order.email}</small>
                                <button onClick={()=>handleDelete(order._id)}>Delete Order</button>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;