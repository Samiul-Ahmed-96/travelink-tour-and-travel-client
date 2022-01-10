import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SinglePakage from "../SinglePakage/SinglePakage";
import "./TourPakages.css";

const TourPakages = () => {
  //State
  const [pakages, setPakages] = useState([]);
  //Data Load
  useEffect(() => {
    fetch("https://limitless-earth-18876.herokuapp.com/tourPakages")
      .then((res) => res.json())
      .then((data) => setPakages(data));
  }, []);

  return (
    <Container id="tourpakages" className="tourPakages overflow-hidden">
      {pakages.length === 0 ? (
        <Spinner className="text-center" animation="grow" variant="warning" />
      ) : (
        <Row>
          <div className="heading-title">
            <div className="title">
              <h2 className="section-heading">Popular Tour Package</h2>
              <p>
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit a id lectus. <br /> Suspendissendt blandit
                interdum. Sed pellentesque at nunc eget consectetur.
              </p>
            </div>
          </div>
          {pakages.slice(0, 6).map((pakage) => (
            <SinglePakage key={pakage._id} pakage={pakage}></SinglePakage>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default TourPakages;
