import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  //State
  const [orders, setOrders] = useState([]);
  //Data Load
  useEffect(() => {
    fetch("https://limitless-earth-18876.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  //handle Delete
  const handleDelete = (id) => {
    const result = window.confirm("Want to delete?");
    if (result) {
      const url = `https://limitless-earth-18876.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <Container className="manage-all-orders">
        <h2>All orders</h2>
        {orders.length === 0 ? (
          <Spinner className="text-center" animation="grow" variant="warning" />
        ) : (
          <Row>
            {orders.map((order) => (
              <Col md={3} sm={12}>
                <div className="my-orders">
                  <img className="w-100" src={order.pakageImage} alt="" />
                  <div className="order-content">
                    <h5>Booked By</h5>
                    <h4>{order.name}</h4>
                    <small>{order.email}</small>
                    <h5>Pakage Name</h5>
                    <h4>{order.pakageName}</h4>
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
    </div>
  );
};

export default ManageAllOrders;
