import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import '../../App.css';
import SearchBar from './SearchBar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collegelist: [] 
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

  componentDidMount(){
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
    console.log(response)
    return response.json()
}).then(data => {
  console.log(data)
  let collegeList = [];
  data.map(college => {
    let collegeNames = [];
    collegeNames.push(JSON.parse(college).college_name);
    collegeNames.push(JSON.parse(college).alias);
    collegeNames.push(JSON.parse(college).abbreviation);
    collegeList.push(collegeNames);
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
      <Navbar
        bg="dark"
        className="navbar p-3 mb-4 bg-white rounded"
        expand
      >

        <SearchBar list={this.state.collegelist} searchBarInUse={this.props.searchBarInUse} setSearch={this.props.setSearch}/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Nav.Link onClick={this.handleClick} href="/">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
