import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import bannerOne from "../../../Images/Banner/banner.jpg";
import bannerThree from "../../../Images/Banner/bannerThree.jpg";
import bannerTwo from "../../../Images/Banner/bannertwo.jpg";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="banner overflow-hidden">
      <Row>
        <Slider {...settings}>
          <div className="slider-main">
            <img className="bannerImg" src={bannerOne} alt="" />
            <div className="banner-content">
              <h1>
                Travel And <br /> Adventure
              </h1>
              <h4>
                Travel is the movement of people between distant geographical
                locations. Travel can be done by foot, bicycle, automobile,
                train, boat, bus, airplane, ship or other means, with or without
                luggage, and can be one way or round trip.
              </h4>
              <HashLink to="/home#tourpakages">
                <button>View Adventure</button>
              </HashLink>
              <HashLink to="/home#tourpakages">
                <button>Take A Tour</button>
              </HashLink>
            </div>
          </div>
          <div className="slider-main">
            <img className="bannerImg" src={bannerTwo} alt="" />
            <div className="banner-content">
              <h1>
                Explore New <br /> Things
              </h1>
              <h4>
                Travel is the movement of people between distant geographical
                locations. Travel can be done by foot, bicycle, automobile,
                train, boat, bus, airplane, ship or other means, with or without
                luggage, and can be one way or round trip.
              </h4>
              <Link to="/tourPakages">
                <button>View Adventure</button>
              </Link>
              <Link to="/tourPakages">
                <button className="banner-btn-two">Take A Tour</button>
              </Link>
            </div>
          </div>
          <div className="slider-main">
            <img className="bannerImg" src={bannerThree} alt="" />
            <div className="banner-content">
              <h1>
                Move The <br /> Earth
              </h1>
              <div className="banner-text">
                <h4>
                  Travel is the movement of people between distant geographical
                  locations. Travel can be done by foot, bicycle, automobile,
                  train, boat, bus, airplane, ship or other means, with or
                  without luggage, and can be one way or round trip.
                </h4>
              </div>
              <Link to="/tourPakages">
                <button>View Adventure</button>
              </Link>
              <Link to="/tourPakages">
                <button id="banner-btn-two">Take A Tour</button>
              </Link>
            </div>
          </div>
        </Slider>
      </Row>
    </section>
  );
};

export default Banner;
