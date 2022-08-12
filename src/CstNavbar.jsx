import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CstNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">TravelPedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Explore</Nav.Link>
            <Nav.Link href="#action2">Destiontions</Nav.Link>
           
            <Nav.Link href="#">
            Packages
            </Nav.Link>
            <Nav.Link href="#">
            Flights
            </Nav.Link>
            <Nav.Link href="#">
            Reviews
            </Nav.Link>
            <Nav.Link href="#">
            About Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div className="cst-icon-div">
            <input
              type="search"
              className="me-2 main-seach"
              aria-label="Search"
            />
           <span className="cst-icon"> <i class="fa-solid fa-magnifying-glass"></i></span>
           </div>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CstNavbar;