import React from 'react';
import { Container, Nav, Button, Row, Col, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import { faSearch, faGlobeAmericas, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    console.log(sessionStorage.getItem("userData"));
    return (
        <div className="Background-home-page">

            <div className="image-background">
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/loginhome/login">Login</Nav.Link>
                    </Nav.Item>
                
                    <Nav.Item>
                        <Nav.Link as={Link} to="/loginhome/signup">Sign up</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto" style={{fontSize: "calc(5.5rem"}}>5400 APPS. ONE PLACE</Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col md="auto">ALL YOUR NEEDS SATISFIED BY BOSSMAN</Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Link to="/loginhome/signup">
                            <Button variant="primary" size="lg">
                                Sign up
                            </Button>{' '}
                        </Link>
                    </Row>
                </Container>

            </div>

            <div className="features-container">
                <div className="features">
                    <h1>FEATURES OF THIS NONSENSE</h1>
                    
                    <div className="header-div">
                        <h1 className="header-feature">SEARCH</h1>
                        <h1 className="header-feature">EXPLORE</h1>
                        <h1 className="header-feature">ORGANIZE</h1>
                    </div>

                    <Container fluid>
                        <Row>
                            <Col xs={6} md={4}>
                                <div className='description-hover'>
                                    <div className="icon-border">
                                        <div><FontAwesomeIcon icon={faSearch} /></div>
                                    </div>
                                    <p> SEARCH FOR ANY COLLEGE YOU NEED </p>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='description-hover'>
                                    <div className="icon-border">
                                        <div><FontAwesomeIcon icon={faGlobeAmericas} /></div>
                                    </div>
                                    <p> ACCESS TO INFORMATION FOR 100+ SCHOOLS </p>
                                </div>
                            </Col>
                            <Col xs={6} md={4}> 
                                <div className='description-hover'>
                                    <div className="icon-border">
                                        <div><FontAwesomeIcon icon={faLayerGroup} /></div>
                                    </div>
                                    <p> ALL YOUR NEEDS ORGANIZED. ONE PLACE </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="contact-div">
                <section className="contact">
                <h1>Feel free to Contact us!</h1>
                    <Form>
                        <Form.Row>
                            <Col style={{marginTop: 'calc(4rem)'}}>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{display: 'flex', justifyContent: 'center'}}>
                                    <Form.Control type="text" placeholder="John Doe" style={{width: 'calc(85%)'}}/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{display: 'flex', justifyContent: 'center'}}>
                                    <Form.Control type="email" placeholder="name@example.com" style={{width: 'calc(85%)'}}/>
                                </Form.Group>
                            </Col>
                            <Col style={{marginTop: 'calc(4rem)'}}>
                                <Form.Group controlId="exampleForm.ControlTextarea1" style={{display: 'flex', justifyContent: 'center'}}>
                                    <Form.Control as="textarea" rows="3" style={{height: 'calc(10rem)', width: 'calc(85%)'}} placeholder="Enter message here..."/>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Row>
                            <Col md={{ span: 6, offset: 6 }}>
                                <Button variant="primary" size="lg">
                                    Send Message
                                </Button>{' '}
                            </Col>
                        </Row>
                    </Form>
                </section>
            </div>

            <span></span>

        </div>
    );
}

export default Home;