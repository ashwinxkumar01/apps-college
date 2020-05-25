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
      collegelist: [['Princeton University', 'Princeton', ''], ['Harvard University', 'Harvard', ''], ['Columbia University', 'Columbia', ''], ['Yale University', 'Yale', ''], ['University of Chicago', 'U Chicago', ''], ['Stanford University', 'Stanford', ''], ['University of Pennsylvania ', 'UPenn', 'Penn'], ['Northwestern University', 'Northwestern', ''], ['Duke University', 'Duke', ''], ['Johns Hopkins University', 'Johns Hopkins', ''], ['Brown University', 'Brown', ''], ['Vanderbilt University', 'Vanderbilt', ''], ['Washington University in St Louis', 'WashU', 'WUSTL'], ['University of California, Los Angeles', 'UC Los Angeles', 'UCLA'], ['University of California, Berkeley', 'UC Berkeley', 'UCB'], ['University of Southern California', '', 'USC'], ['University of Michigan - Ann Arbor', 'Michigan', 'UMich'], ['University of Virginia- Main Campus', '', 'UVA'], ['New York University', '', 'NYU'], ['Georgia Institute of Technology-Main Campus', 'Georgia Tech', 'GT'], ['University of California, Santa Barbara', 'UC Santa Barbara', 'UCSB'], ['University of Florida', '', 'UF'], ['University of California, Irvine', 'UC Irvine', 'UCI'], ['University of California, San Diego', 'UC San Diego', 'UCSD'], ['Boston College', '', ''], ['University of California, Davis', 'UC Davis', 'UCD'], ['Boston University', '', 'BU'], ['Case Western Reserve University', 'Case Western', 'CWRU'], ['Tulane University of Louisiana', 'Tulane', ''], ['Northeastern University', 'Northeastern', ''], ['University of Illinois at Urbana-Champaign', '', 'UIUC'], ['Syracuse University', 'Syracuse', ''], ['University of Miami', '', ''], ['Purdue University - Main Campus', 'Purdue', ''], ['University of Pittsburgh-Pittsburgh Campus', 'University of Pittsburgh', ''], ['Florida State University', 'Florida State', 'FSU'], ['Pennsylvania State University - Main Campus', 'Penn State', 'PSU'], ['Rutgers University - New Brunswick', 'Rutgers', ''], ['University of Washington-Seattle Campus', 'UW Seattle', 'UW'], ['University of Connecticut', '', 'UConn'], ['University of Massachusetts-Amherst', 'Umass Amherst', 'Umass'], ['University of Maryland-College Park', 'Maryland', 'UMD'], ['Clemson University', 'Clemson', ''], ['George Washington University', 'George Washington', 'GW'], ['University of Minnesota - Twin Cities', 'University of Minnesota', ''], ['Fordham University', 'Fordham', ''], ['Binghamton University', 'Binghamton', ''], ['University at Buffalo', '', 'UB'], ['University of California, Santa Cruz', 'UC Santa Cruz', 'UCSC'], ['University of Iowa', 'Iowa', 'uiowa'], ['North Carolina State University at Raleigh', '', 'NC State'], ['University of California, Riverside', 'UC Riverside', 'UCR'], ['Stony Brook University', 'Stony Brook', ''], ['Miami University-Oxford', 'Miami University', 'Miami'], ['Drexel University', 'Drexel', ''], ['University of California, Merced', 'UC Merced', 'UCM'], ['University of South Florida-Main Campus', '', 'USF'], ['San Diego State University', 'San Diego State', 'SDSU'], ['The University of Alabama ', 'Alabama', 'bama'], ['Hofstra University', 'Hofstra', ''], ["St John's University-New York", '', ''], ['San Jose State University', 'San Jose State', 'SJSU'], ['California State University - Long Beach', 'CSU Long Beach', 'CSULB'], ['Northern Arizona University', '', 'NAU'], ['San Francisco State University', 'San Francisco State', 'SFSU'], ['Liberty University', '', ''], ['California State University, Los Angeles', 'CSU Los Angeles', 'CSULA'], ['California State University-Fullerton  ', 'CSU Fullerton', 'CSUF'], ['Michigan State University  ', 'Michigan State', 'MSU'], ['CUNY Hunter College', 'Hunter College', ''], ['California Polytechnic State University - San Luis Obispo', 'Cal Poly SLO', 'SLO']]
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
        bg="dark"
        className="navbar shadow-sm p-3 mb-5 bg-white rounded"
        expand
      >

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
