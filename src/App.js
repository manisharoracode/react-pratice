// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CstCarousel from './CstCarousel';
import CstNavbar from './CstNavbar';
import CstTravelContainer from './CstTravelContainer';
import AboutUs from './AboutUS';
import ServiceCard from './ServiceCard';
// import { IconName } from "react-icons/bs";
import ApiData from './ApiData';

function App() {
  return (
    <>
      <CstNavbar />
      <CstCarousel />
      <CstTravelContainer />
      <AboutUs />
      <ServiceCard />
      <ApiData />
    </>
  );
}

export default App;
