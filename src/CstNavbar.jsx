import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav, } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";


function CstNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
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
        </Container>
      </Navbar>
    </>
  );
}

export default CstNavbar;
