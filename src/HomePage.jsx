import React from 'react';
import AboutUs from './AboutUs';
import CstCarousel from './MainPage/CstCarousel';
import CstTravelContainer from './MainPage/CstTravelContainer';
import TextManupulation from './TextManupulation';

function HomePage() {
  return (
    <>
      <CstCarousel />
      <AboutUs />
      <CstTravelContainer />
      <TextManupulation />
    </>
  )
}

export default HomePage;