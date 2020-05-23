import React from "react";
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
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import Tabs from './Tabs';

function tabInfo(name, icon, hrefs, classname, text) {
  this.name = name;
  this.icon = icon;
  this.hrefs = hrefs;
  this.classname = classname;
  this.text = text;
}

class SideBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      allTabs: [new tabInfo('Home', faHome, '/', 'mr-2', 'Dashboard'),
      new tabInfo('Search', faBriefcase, '/home', 'mr-2', 'Search'),
      new tabInfo('Profile', faQuestion, '/profile', 'mr-2', 'Profile'),
      new tabInfo('Feature', faPaperPlane, '/feature', 'mr-2', 'Feature'),
      new tabInfo('Log In', faPaperPlane, '/login', 'mr-2', 'Log In'),
      new tabInfo('Sign Up', faPaperPlane, '/signup', 'mr-2', 'Sign Up')]
    };
  }

  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>College Search</h3>
        </div>
        <Nav defaultActiveKey={this.state.active}>
        <Tabs active={this.state.active} onChange={active => {this.setState({active})}}
        setActiveTab={this.props.setActive}
        tabs={this.state.allTabs}/>
        <div>{this.state.active}</div>
        </Nav>
          {/* <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Dashboard
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="active">
            <Nav.Link href="/home">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Search
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/loginhome/profile">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              FAQ
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/loginhome/feature">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Contact
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/loginhome/login">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Log In
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/loginhome/signup">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Sign Up
            </Nav.Link>
          </Nav.Item> */}
      </div>
    );
  }
}

export default SideBar;
