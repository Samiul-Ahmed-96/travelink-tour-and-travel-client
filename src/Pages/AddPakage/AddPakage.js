import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddPakage.css";

const AddPakage = () => {
  const { register, handleSubmit } = useForm();
  //Handle Submit
  const onSubmit = (data) => {
    fetch("https://limitless-earth-18876.herokuapp.com/tourPakages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Added Successfully");
      });
  };
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center add-pakage-container">
          <Col md={6} sm={12}>
            <img
              className="w-100"
              src="https://i.ibb.co/Zmd9QX6/pexels-chevanon-photography-333525-1.jpg"
              alt=""
            />
          </Col>
          <Col md={6} sm={12}>
            <h2 className="my-3 fw-bold">Add New Pakage</h2>
            <div className="add-from">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Pakage Name"
                  {...register("name", { required: true })}
                />
                <input
                  placeholder="Image Link"
                  {...register("img", { required: true })}
                />
                <textarea
                  placeholder="Description"
                  {...register("description", { required: true })}
                />
                <input
                  placeholder="Price Per Person"
                  {...register("price", { required: true })}
                />
                <input
                  placeholder="Duration"
                  {...register("duration", { required: true })}
                />
                <input
                  placeholder="rating"
                  {...register("rating", { required: true })}
                />
                <input type="submit" value="Add Pakage" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddPakage;
