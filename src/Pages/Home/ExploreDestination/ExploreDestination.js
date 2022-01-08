import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./ExploreDestination.css";
const ExploreDestination = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch("/exploreDestination.json")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  return (
    <section className="explore-destination">
      <Container>
        <div className="heading-title text-center">
          <div className="title">
            <h2 className="section-heading">Explore Your Destination</h2>
            <p>
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. <br /> Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consectetur.
            </p>
          </div>
        </div>
      </Container>
      <Row className="p-4">
        <Slider {...settings}>
          {destination.map((item) => (
            <div key={item.id} className="desti-item">
              <img className="w-100" src={item.img} alt="" />
              <div className="desti-content">
                <h3>{item.place}</h3>
                <h4>Space : {item.space}</h4>
                <h4>Hotels : {item.hotel}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </Row>
    </section>
  );
};

export default ExploreDestination;
