import React from 'react';
import AboutUs from './AboutUs';
import CstCarousel from './MainPage/CstCarousel';
import CstTravelContainer from './MainPage/CstTravelContainer';
import FakeAddress from './MainPage/FakeAddress';
import TextManupulation from './TextManupulation';
import DailyNews from './DailyNews';
import Details from './Details';

function HomePage() {
  return (
    <>
      <CstCarousel />
      <AboutUs />
      <CstTravelContainer />
      <TextManupulation />
      <FakeAddress />
      <DailyNews />
      <Details />
    </>
  )
}

export default HomePage;