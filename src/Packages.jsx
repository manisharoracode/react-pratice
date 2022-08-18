import React from 'react';
import ApiData from './ApiData';
import { Container, Row } from 'react-bootstrap'; 

export default function Packages() {
  return (
    <>
    <Container>
      <h1>Packages</h1>
      <Row>
        <ApiData />
      </Row>
    </Container>
    </>
  )
}
