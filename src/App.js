import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CstNavbar from "./CstNavbar";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Service from "./Service";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
      <CstNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
