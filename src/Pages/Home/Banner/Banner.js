import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import bannerOne from '../../../Images/Banner/banner.jpg';
import bannerTwo from '../../../Images/Banner/bannertwo.jpg';
import './Banner.css';

const Banner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Row>
        <Slider {...settings}>
        <div className='slider-main'>
          <img className='bannerImg' src={bannerOne} alt="" />
          <div className="banner-content">
            <h1>Travel And Adventure</h1>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nam, unde voluptatem hic aliquam placeat exercitationem ipsum deserunt magnam autem quas cupiditate in necessitatibus eligendi ut dignissimos excepturi animi praesentium est quam aut perspiciatis? Accusantium, consequatur iste, illum a, quos sed repellat ipsam fuga fugit optio maiores dolor hic consectetur.</h4>
            <Link to='/tourPakages'><button>View Adventure</button></Link>
            <Link to='/tourPakages'><button>Take A Tour</button></Link>
          </div>
        </div>
        <div className='slider-main'>
        <img className='bannerImg' src={bannerTwo} alt="" />
        <div className="banner-content">
            <h1>Move The Earth</h1>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nam, unde voluptatem hic aliquam placeat exercitationem ipsum deserunt magnam autem quas cupiditate in necessitatibus eligendi ut dignissimos excepturi animi praesentium est quam aut perspiciatis? Accusantium, consequatur iste, illum a, quos sed repellat ipsam fuga fugit optio maiores dolor hic consectetur.</h4>
            <Link to='/tourPakages'><button>View Adventure</button></Link>
            <Link to='/tourPakages'><button className='banner-btn-two'>Take A Tour</button></Link>
          </div>
        </div>
      </Slider>
        </Row>
    );
};

export default Banner;