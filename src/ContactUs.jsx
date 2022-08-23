import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { Columns } from 'react-bootstrap-icons';


function ContactUs() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: ""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setData({ ...data, [name]: value });
  };

  // connect firebase
  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, emailId, phoneNumber } = data;
    const res = await fetch('https://reactfirebaseapi-default-rtdb.firebaseio.com/userDataFetch.json',
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          emailId,
        }),
      }
    );
    if (res) {
      alert("Data Stored");
    } else {
      alert("Please Fill the Form")
    }
  };

  return (

    <>

      <Container className='my-5'>
        <Form method='POST'>
          <Row className="gy-3">

            <Form.Group className="col-6" controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your First Name" name='firstName' value={data.firstName} onChange={postUserData} />
            </Form.Group>
            <Form.Group className="col-6" controlId="formGridEmail">
              <Form.Label>Last</Form.Label>
              <Form.Control type="text" placeholder="Enter your Last Name" name='lastName' value={data.lastName} onChange={postUserData} />
            </Form.Group>
            <Form.Group className="col-6" controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="email" name='emailId' value={data.emailId} onChange={postUserData} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone" placeholder='Phone Number' name='phoneNumber' value={data.phoneNumber} onChange={postUserData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select Your City</option>
                <option>Delhi</option>
                <option>Jaipur</option>
                <option>Mumbai</option>
                <option>Noida</option>
                <option>Bangalore</option>
                <option>Gurugram</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Skill</Form.Label>
              <Col sm={{}}>
                <Form.Check label="HTML" />
              </Col>
              <Col sm={{}}>
                <Form.Check label="CSS" />
              </Col>
              <Col sm={{}}>
                <Form.Check label="Bootstrap" />
              </Col>
              <Col sm={{}}>
                <Form.Check label="Jquery" />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Text your message here</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Row>
          <div className='d-flex justify-content-end'>
          <Button className='mt-3 mx-3' variant='danger' value="Cancel" type='submit' >Cancel</Button>
          <Button className='mt-3' variant="primary" onClick={submitData} >
            Submit
          </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default ContactUs;