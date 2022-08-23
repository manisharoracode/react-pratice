import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav,Form } from "react-bootstrap";
import { Link } from "react-router-dom";


function CstNavbar() {
   const toggleStyle = ()=> {
    var element = document.getElementById("myNavbar");
    element.classList.toggle("cst-changeBackground");
   }
   return (
    <>
      <Navbar id="myNavbar" className="cst-background" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="text-uppercase font-weight-bold">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/"}>Home</Link>
              <Link to={"/AboutUs"}>About Us</Link>
              <Link to={"/Service"}>Service</Link>
              <Link to={"/ContactUs"}>Contact</Link>
            </Nav>
          </Navbar.Collapse>
          <Form>
       <Form.Check 
        type="switch"
        id="custom-switch" onClick={toggleStyle}
        label="Enable Darkmode"
      />
       </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default CstNavbar;
