import React from 'react';
import Banner from '../Banner/Banner';
import ChooseTour from '../ChooseTour/ChooseTour';
import TourPakages from '../TourPakages/TourPakages';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <TourPakages/>
            <ChooseTour></ChooseTour>
        </div>
    );
};

export default Home;