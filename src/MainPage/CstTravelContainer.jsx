import { Container, Row, Button, Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CardDetail from "./CardDetail";
import { useState } from 'react';


function CstTravelContainer(props) {
    const [cardTitle, setText] = useState("Gekki");
    return (
        
        <>
            <Container fluid>
                <div className="d-flex justify-content-between my-5">
                    <h3><i className="bi bi-telephone-inbound-fill"></i>Discover your next adventure</h3>
                    <Button type="button" className="btn">Show me more</Button>
                </div>
                <Row className="my-5 cardSection">
                    {CardDetail && CardDetail.map(props => (
                        <Col xs={3} className="gy-3">
                            <Card>
                                <Card.Img variant="top" src={props.cardImage} />
                                <Card.Body>
                                    <Card.Title>{props.cardTitle}</Card.Title>
                                    <Card.Text>
                                        {props.cardDescription}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=> setText("Kamal")}>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        </>
        
    )
}

export default CstTravelContainer;