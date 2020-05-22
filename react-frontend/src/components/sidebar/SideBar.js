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

class SideBar extends React.Component {
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

        <Nav className="flex-column pt-2">
          <p className="ml-3">MY COLLEGES</p>

          <Nav.Item className="active">
            <Nav.Link href="/loginhome/dashboard">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Dashboard
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
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
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;
