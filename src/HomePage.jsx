import React from 'react';
import AboutUs from './AboutUs';
import CstCarousel from './MainPage/CstCarousel';
import CstTravelContainer from './MainPage/CstTravelContainer';
import FakeAddress from './MainPage/FakeAddress';
import TextManupulation from './TextManupulation';
import DailyNews from './DailyNews';
import Details from './Details';
import ToDoList from './ToDoList';
import AddBook from './BookComponent/AddBook';

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
      <ToDoList />
      <AddBook />
    </>
  )
}

export default HomePage;