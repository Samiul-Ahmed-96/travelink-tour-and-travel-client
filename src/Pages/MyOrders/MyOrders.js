import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  //State
  const [myOrders, setMyOrders] = useState([]);
  //Data Load
  useEffect(() => {
    fetch("https://limitless-earth-18876.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, []);
  //handle Delete
  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("Want to delete?");
    if (deleteConfirm) {
      const url = `https://limitless-earth-18876.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted");
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
          }
        });
    }
  };
  const result = myOrders.filter((order) => order.email === user.email);

  return (
    <Container>
      {result.length === 0 ? (
        <Spinner className="text-center" animation="grow" variant="warning" />
      ) : (
        <Row className="my-orders-container">
          <h2>Your Bookings</h2>
          {result.map((order) => (
            <Col md={4} sm={12} xs={12}>
              <div className="my-orders">
                <img className="w-100" src={order.pakageImage} alt="" />
                <div className="order-content">
                  <h5>Booked By</h5>
                  <h3>{order.name}</h3>
                  <small>{order.email}</small>
                  <h5>Pakage Name</h5>
                  <h3>{order.pakageName}</h3>
                  <p>Status : {order.status}</p>
                  <button onClick={() => handleDelete(order._id)}>
                    Delete Order
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MyOrders;
