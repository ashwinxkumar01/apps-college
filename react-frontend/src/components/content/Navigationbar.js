import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import '../../css/Navigationbar.css';

class Navigationbar extends React.Component {
    render() {
        return (
            <div className="navigation-div">
                <div className="sidebar-header">
                    <h3>College Search</h3>
                </div>
                <Nav variant="tabs" className="flex-column" defaultActiveKey={this.props.active}>
                    <Nav.Item className="dashboard">
                        <Nav.Link eventKey="1" href="/loginhome/dashboard">
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>  Dashboard</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="explore">
                        <Nav.Link eventKey="2" href="/loginhome/explore">
                        <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>  Explore</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="login">
                        <Nav.Link eventKey="3" href="/loginhome/login">
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>  Login</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="signup">
                        <Nav.Link eventKey="4" href="/loginhome/signup">
                        <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>  Signup</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="features">
                        <Nav.Link eventKey="5" href="/loginhome/features">
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>  Features</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="faq">
                        <Nav.Link eventKey="6" href="/loginhome/profile">
                        <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>  FAQ</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default Navigationbar