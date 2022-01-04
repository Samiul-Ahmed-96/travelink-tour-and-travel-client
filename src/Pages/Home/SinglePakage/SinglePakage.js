import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SinglePakage.css";

const SinglePakage = (props) => {
  //Destructuring Values
  const { _id, name, duration, price, rating, img } = props.pakage;
  return (
    <Col md={4} sm={6} xs={12}>
      <div className="single-pakage">
        <img className="w-100" src={img} alt="" />
        <div className="pakage-content">
          <h4>{duration}</h4>
          <h2>
            ${price} <span>/Per Person</span>{" "}
          </h2>

          <h3>{name}</h3>
          <h5>
            <i class="far fa-star"></i> {rating}
          </h5>
          <Link to={`/pakageDetail/${_id}`}>
            <button>
              {" "}
              <i class="fas fa-plus-circle"></i> Book Now
            </button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default SinglePakage;
