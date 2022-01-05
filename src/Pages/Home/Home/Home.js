import React from "react";
import Banner from "../Banner/Banner";
import ChooseTour from "../ChooseTour/ChooseTour";
import ExploreDestination from "../ExploreDestination/ExploreDestination";
import Newsletter from "../Newsletter/Newsletter";
import TourPakages from "../TourPakages/TourPakages";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourPakages />
      <Newsletter/>
      <ExploreDestination />
      <ChooseTour></ChooseTour>
      <Welcome></Welcome>
    </div>
  );
};

export default Home;
