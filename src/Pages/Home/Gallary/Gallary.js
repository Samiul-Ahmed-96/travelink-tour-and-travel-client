import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Gallary.css";

const Gallary = () => {
  return (
    <section className="gallary">
      <Container>
        <div className="heading-title text-center">
          <div className="title">
            <h2 className="section-heading">Our Gallary</h2>
            <p>
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. <br /> Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consectetur.
            </p>
          </div>
        </div>
        <Row className="align-items-center">
          <Col md={4} sm={12} xs={12}>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <div className="gallary-img">
                  <img
                    src="https://i.ibb.co/m92CLdB/pexels-skitterphoto-594384.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={12} sm={12} xs={12}>
                <div className="gallary-img">
                  <img
                    src="https://i.ibb.co/PCShNm0/pexels-rodnae-productions-8231193.jpg"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <div className="gallary-img">
                  <img
                    src="https://i.ibb.co/cLpWqHY/pexels-gustavo-fring-4254147.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={12} sm={12} xs={12}>
                <div className="gallary-img">
                  <img
                    src="https://i.ibb.co/5kN2cfd/pexels-dayvison-de-oliveira-silva-5696017.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={12} sm={12} xs={12}>
                <div className="gallary-img">
                  <img
                    src="https://i.ibb.co/hmgbjQC/pexels-rosivan-morais-4323978.jpg"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <div className="gallary-img">
                  <img
                    src="https://i.ibb.co/DMMmY6Z/pexels-gustavo-fring-4127634.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={12} sm={12} xs={12}>
                <div className="gallary-img">
                  <img
                    src="https://i.ibb.co/VBZ4qfP/pexels-gustavo-fring-3885527.jpg"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallary;
