import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddPakage.css';

const AddPakage = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/tourPakages',{

            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert('Added Successfully')
            
        })
    };
    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center add-pakage-container">
                    <Col md={6} sm={12}>
                        <img className="w-100" src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    </Col>
                    <Col md={6} sm={12}>
                    <h2>Add your own pakage</h2>
                        <div className="add-from">
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Pakage Name" {...register("name",{ required: true })} />
                        <input placeholder="Image Link" {...register("img",{ required: true })} />
                        <textarea placeholder="Description" {...register("description",{ required: true })} />
                        <input placeholder="Price Per Person" {...register("price",{ required: true })} />
                        <input placeholder="Duration" {...register("duration",{ required: true })} />
                        <input placeholder="rating" {...register("rating",{ required: true })} />
                        <input type="submit" value="Add Pakage"/>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddPakage;