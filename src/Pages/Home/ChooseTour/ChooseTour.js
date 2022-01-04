import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ChooseTour.css";

const ChooseTour = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("/choosetour.json")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <Container id="chooseTour" className="choose-items-container">
      <div className="heading-title">
        <div className="title">
          <h2 className="section-heading">Choose Your Plan</h2>
          <p>
            Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
            hendrerit a id lectus. <br /> Suspendissendt blandit interdum. Sed
            pellentesque at nunc eget consectetur.
          </p>
        </div>
      </div>
      <Row>
        {tours.map((item) => (
          <Col md={3} sm={6} xm={12} key={item.id}>
            <div className="choose-item">
              <img src={item.img} alt="" />
              <h3>{item.des}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ChooseTour;
