import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ServiceCard(props) {
    return (
        <>
            <Container fluid className="my-5 py-5 cst-background">
                <h2 className="text-center"><span className="cst-icon"> <i class="bi bi-search"></i></span><i class="bi bi-telephone-inbound-fill"></i>Service</h2>
                <Row className="gy-3">
                    <Col xs={3}>
                        {/* {
        for(var i=0; i<.CardDetail.length i++){             
                        <Card >
                            <Card.Img variant="top" src={props.ServiceImage} />
                            <Card.Body>
                                <Card.Title>{props.ServiceTitle}</Card.Title>
                                <Card.Text>
                                    {props.ServiceDescription}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    } */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default ServiceCard;