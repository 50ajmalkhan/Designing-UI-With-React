import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
const card = () => {
    return (
        <div>
            <Container>
                <div className="cardData">We help makers build +  launch  business that <br></br>
               they love (and make them money too!)</div>

                <Row>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }} className="border-0">

                            <Card.Body>
                                <i class="fa fa-lightbulb-o" style={{ fontSize: "48px", color: "#f8c471" }}></i><br></br><br></br>
                                <Card.Title><span class="icon-name">Build</span></Card.Title>
                                <Card.Text>
                                    <p className="icon-text">Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                                </Card.Text>
                                <span class="icon-button"><Button variant="primary" className="border-0">Go somewhere</Button></span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }} className="border-0">
                            <Card.Body>
                                <i class="fa fa-calendar" style={{ fontSize: "48px", color: "#f8c471" }}></i><br></br><br></br>
                                <Card.Title><span class="icon-name">Lunch</span></Card.Title>
                                <Card.Text>
                                    <p className="icon-text">   Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>
                                </Card.Text>
                                <span class="icon-button"><Button variant="primary" className="border-0">Go somewhere</Button></span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }} className="border-0">

                            <Card.Body>
                                <i class="fa fa-cubes" style={{ fontSize: "48px", color: "#f8c471" }}></i><br></br><br></br>
                                <Card.Title><span class="icon-name">Snow</span></Card.Title>
                                <Card.Text>
                                    <p className="icon-text"> Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>
                                </Card.Text>
                                <span class="icon-button"><Button variant="primary" className="border-0" >Go somewhere</Button></span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );

};
export default card;