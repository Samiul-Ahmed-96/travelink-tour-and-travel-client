import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleGetEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const makeAdmin = (e) => {
    const user = { email };
    fetch("https://limitless-earth-18876.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          alert("Successfully Added Admin");
          setEmail("");
        }
      });

    e.preventDefault();
  };
  return (
    <Container>
      <Row className="d-flex align-items-center add-pakage-container overflow-hidden">
        <Col md={6} sm={12}>
          <img
            className="w-100"
            src="https://i.ibb.co/XJBCRMh/pexels-julie-aagaard-1374064-3.jpg"
            alt=""
          />
        </Col>
        <Col md={6} sm={12}>
          <h2 className="my-3 fw-bold">Make A Admin</h2>
          <div className="text-center">
            <form className="admin-main" onSubmit={makeAdmin}>
              <input onBlur={handleGetEmail} type="email" placeholder="Email" />
              <input type="submit" value="Make Admin" />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
