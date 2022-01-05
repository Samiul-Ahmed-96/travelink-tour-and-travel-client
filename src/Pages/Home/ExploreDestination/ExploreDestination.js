import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Slider from "react-slick";
import './ExploreDestination.css';
const ExploreDestination = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    const [destination,setDestination] = useState([]);

    useEffect(()=>{
        fetch('/exploreDestination.json')
        .then(res => res.json())
        .then(data => setDestination(data))
    },[])

    return (
        <section className='explore-destination'>
            <Row>
            <Slider {...settings}>
                {
                    destination.map(item => <div key={item.id} className='desti-item'>
                        <img className='w-100' src={item.img} alt="" />
                        <div className="desti-content">
                            <h3>{item.place}</h3>
                            <h4>{item.space}</h4>
                            <h4>{item.hotel}</h4>
                        </div>
                    </div> )
                }
                </Slider>
            </Row>
        </section>
    );
};

export default ExploreDestination;