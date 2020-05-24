import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import '../../App.css';
import SearchBar from './SearchBar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collegelist: ["tacos", "locos tacos", "chargers bhaj", "burritos", "chargers", "warriors",
        "ashwin", "www ashv", "kai", "amitesh", "imtoolazytotypemore",
        "beerus"]
    }

  }

  // addColleges(){
  //   fetch('/addressToBackEndList').then(res => res.json()).then(data => {
  //     this.state.collegelist.push(data.college_name);
  //     let college = data[0];
  //     const x = JSON.parse(college);
  //     console.log("college_name");
  //   });
  // }

  // componentDidMount(){
  //   this.setState({
  //     collegelist: this.addColleges()
  //   })
  // }

  render() {
    return (
      <Navbar
        bg="light"
        className="navbar shadow-sm p-3 mb-5 bg-white rounded"
        expand
      >
        <Button variant="outline-info" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>

        <SearchBar list={this.state.collegelist} />
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
