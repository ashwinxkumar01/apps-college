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
      active: this.props.active,
      allTabs: [new tabInfo('Home', faHome, '/loginhome/dashboard', 'mr-2', 'Dashboard'),
      new tabInfo('Explore', faBriefcase, '/loginhome/explore', 'mr-2', 'Explore'),
      new tabInfo('Profile', faQuestion, '/loginhome/profile', 'mr-2', 'Profile'),
      new tabInfo('Feature', faPaperPlane, '/loginhome/feature', 'mr-2', 'Feature'),
      new tabInfo('Log In', faPaperPlane, '/loginhome/login', 'mr-2', 'Log In'),
      new tabInfo('Sign Up', faPaperPlane, '/loginhome/signup', 'mr-2', 'Sign Up')]
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
        <Nav>
        <Tabs onChange={active => {this.setState({active})}}
        setActiveTab={this.props.setActive}
        tabs={this.state.allTabs}/>
        </Nav>
          </div>
    );
  }
}

export default SideBar;
