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
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>

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
                        <Col md="auto" style={{fontSize: "calc(5.5rem"}}>5400 APPS. ONE PLACE.</Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col md="auto" style={{fontSize: "calc(2rem", marginTop: 'calc(0.7rem)'}}>College Apps, Redefined.</Col>
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
                    <h1 className="header-h1">FEATURES</h1>
                    
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
                                    <p>Search for any college you're thinking about with one powerful search bar. 
                                        No more endless navigation.</p>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='description-hover'>
                                    <div className="icon-border">
                                        <div><FontAwesomeIcon icon={faGlobeAmericas} /></div>
                                    </div>
                                    <p> Don't know where to start? Explore colleges with filters customizable by you. Explore and
                                    find hundreds of colleges that fit your needs. </p>
                                </div>
                            </Col>
                            <Col xs={6} md={4}> 
                                <div className='description-hover'>
                                    <div className="icon-border">
                                        <div><FontAwesomeIcon icon={faLayerGroup} /></div>
                                    </div>
                                    <p> Keep track of all your colleges with a simple click, with important deadlines 
                                        at your fingertips.       </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="contact-div">
                <section className="contact">
                <h1>Questions? Contact Us.</h1>
                    <Form>
                        <Form.Row>
                            <Col style={{marginTop: 'calc(4rem)'}}>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Form.Control type="text" placeholder="John Doe" style={{width: 'calc(55%)'}}/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Form.Control type="email" placeholder="name@example.com" style={{width: 'calc(55%)'}}/>
                                </Form.Group>
                            </Col>
                            <Col style={{marginTop: 'calc(4rem)'}}>
                                <Form.Group controlId="exampleForm.ControlTextarea1" style={{display: 'flex', justifyContent: 'left'}}>
                                    <Form.Control as="textarea" rows="3" style={{height: 'calc(10rem)', width: 'calc(55%)'}} placeholder="Enter message here..."/>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
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