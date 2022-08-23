import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import ApiData from './ApiData';
// import { Nav } from 'react-bootstrap';

function Service() {
  return (
    <>
      <Container >
        <Row >
          <ApiData />
        </Row>
      </Container>
    </>
  )
}

export default Service;