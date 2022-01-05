import React from "react";
import Banner from "../Banner/Banner";
import ChooseTour from "../ChooseTour/ChooseTour";
import ExploreDestination from "../ExploreDestination/ExploreDestination";
import TourPakages from "../TourPakages/TourPakages";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <TourPakages />
      <ExploreDestination />
      <ChooseTour></ChooseTour>
    </div>
  );
};

export default Home;
