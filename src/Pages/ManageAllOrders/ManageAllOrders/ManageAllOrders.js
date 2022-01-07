import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

     //State
     const [orders,setOrders] = useState([]);
     //Data Load
     useEffect(()=>{
         fetch('https://limitless-earth-18876.herokuapp.com/orders')
         .then(res => res.json())
         .then(data => setOrders(data))
     },[])
    
     //handle Delete
    const handleDelete = (id ) =>{
        const result = window.confirm("Want to delete?");
        if (result){
            const url = `https://limitless-earth-18876.herokuapp.com/orders/${id}`;
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
       
    }

    return (
        <div>
            <Container className="manage-all-orders">
                <h2>All orders</h2>
                {
                    orders.length === 0 ? <Spinner className="text-center" animation="grow" variant="warning" /> :

                    <Row>
                    {
                        orders.map(order => <Col md={4} sm={12}>
                            <div className="order-item">
                                <img className='w-100' src={order.pakageImage} alt="" />
                                <h3>{order.pakageName}</h3>
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
                }
            </Container>
        </div>
    );
};

export default ManageAllOrders;