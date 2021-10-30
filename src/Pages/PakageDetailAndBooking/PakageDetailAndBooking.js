import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PakageDetailAndBooking.css';

const PakageDetail = () => {
    const {user} = useAuth();
    //Get the ID 
    const {id} = useParams();
    //State
    const [singlePakage,setSinglePakage] = useState({})
    //Data load
    useEffect(()=>{
        fetch(`https://limitless-earth-18876.herokuapp.com/tourPakages/${id}`)
        .then(res => res.json())
        .then(data => setSinglePakage(data))
    },[])
    //Hookform for booking
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        fetch('https://limitless-earth-18876.herokuapp.com/orders',{

            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert('Booking Successfully')
            
        })
    };
    return (
        <Container>
            <Row className="booking-from">
                <Col md={6} sm={12} xs={12}>
                    <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        
                        <input defaultValue="pending" {...register("status",{ required: true })} />
                        <input defaultValue={singlePakage.name} {...register("pakageName" ,{ required: true })} />
                        <input defaultValue={singlePakage.price} {...register("pakagePrice" ,{ required: true })} />
                        <input defaultValue={singlePakage._id} {...register("pakageId" ,{ required: true })} />
                        <input placeholder="Phone" defaultValue="" {...register("phone",{ required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address",{ required: true })} />
                        <input className="form-btn" type="submit" value="Booking" />
                    </form>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <div className="pakage-details">
                    <img className='w-100' src={singlePakage.img} alt="" />
                    <h1>{singlePakage.name}</h1>
                    <h2>${singlePakage.price} <span>/Per Person</span> </h2>
                    <p>{singlePakage.description}</p>
                    <h5><i class="far fa-star"></i> {singlePakage.rating}</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PakageDetail;