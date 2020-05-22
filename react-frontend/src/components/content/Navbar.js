import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import '../../App.css';

class NavBar extends React.Component {
  render() {
    
    const divStyle = {
      width: '200px;'
    }
    return (
      <Navbar
        bg="light"
        className="navbar shadow-sm p-3 mb-5 bg-white rounded"
        expand
      >
        <Button variant="outline-info" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>

        <Form inline className="ml-5 w-100">
          <Form.Control type="text" placeholder="Search" className="mr-0 w-75" style={divStyle} />
          <Button variant="outline-success" className="mr-0 w-0">Search</Button>
        </Form>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Nav.Link href="">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
