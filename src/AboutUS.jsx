import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AboutUs() {
  const [text, setText] = useState("!");
  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col>
            <img src='https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </Col>
          <Col>
            <h2 className="text-center my-5">Hello Everyone{text}</h2>
            <h4>Hello Dosto Kase Ho</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <ul className="text-center list-style-none">
              <li><span className="cst-icon"> <i class="bi bi-search"></i></span>lorem 1</li>
              <li><i class="bi bi-telephone-inbound-fill"></i>lorem 2</li>
              <li>lorem 3</li>
              <li>lorem 4</li>
              <li>lorem 5</li>
              <li>lorem 6</li>
            </ul>
            <Button type="button" className="btn btn-primary" onClick={() => setText(" Kase Ho")}>Click Here</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default AboutUs