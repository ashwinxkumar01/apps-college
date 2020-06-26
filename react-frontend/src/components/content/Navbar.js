import React from "react";
import { Navbar, Nav, NavDropdown, Dropdown, ButtonGroup } from "react-bootstrap";
import '../../App.css';
import SearchBar from './SearchBar';
import { IoMdContact } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collegelist: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // addColleges(){
  //   fetch('/addressToBackEndList').then(res => res.json()).then(data => {
  //     this.state.collegelist.push(data.college_name);
  //     let college = data[0];
  //     const x = JSON.parse(college);
  //     console.log("college_name");
  //   });
  // }


  componentDidMount() {
    fetch("/filter", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Array: [],
        Filter: "national_ranking",
        IsDescending: true
      })
    }).then(response => {
      return response.json()
    }).then(data => {
      let collegeList = [];
      data.map(college => {
        let collegeNames = [];
        collegeNames.push(JSON.parse(college).college_name);
        collegeNames.push(JSON.parse(college).alias);
        collegeNames.push(JSON.parse(college).abbreviation);
        collegeList.push([collegeNames, JSON.parse(college).college_logo]);
      })
      this.setState({
        collegelist: collegeList
      })
    });
  }

  handleClick = () => {
    sessionStorage.clear();
    localStorage.clear();
    fetch("/logout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Navbar
          className="navbar p-3"
          expand="lg"
          bg="dark" variant="dark"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>College Search</Navbar.Brand>
            <Nav className="mr-auto" defaultActiveKey={this.props.active}>
              <Nav.Item className="dashboard">
=======
      <Navbar
        className="navbar p-3 mb-0"
        expand="lg"
        bg="dark" variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand>College Search</Navbar.Brand>
        <Nav className="mr-auto" defaultActiveKey={this.props.active}>
            <Nav.Item className="dashboard">
>>>>>>> ff28a21e119c7740fe2938232be92e431be11268
                <Nav.Link eventKey="1" href="/loginhome/dashboard">
                  Dashboard
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="explore">
                <Nav.Link eventKey="2" href="/loginhome/explore">
                  Explore
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="explore">
                <Nav.Link eventKey="3" href="/loginhome/essays">
                  Essays
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto" navbar>
              <Nav.Item>
                <NavDropdown drop="down" alignRight="false">
                  <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={this.handleClick} href="/">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ position: 'absolute', top: 'calc(3vh)', left: 'calc(32vw)', width: 'calc(60vw)' }}>
          <SearchBar list={this.state.collegelist} searchBarInUse={this.props.searchBarInUse}/>
        </div>
      </div>
    );
  }
}

export default NavBar;
