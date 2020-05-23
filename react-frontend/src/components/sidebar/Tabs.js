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
import '../../App.css';
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class Tabs extends React.Component {
    render() {
        return (
            <Nav className="flex-column pt-2">
                <p className="ml-3">MY COLLEGES</p>
                {this.props.tabs.map((tab, i) => {
                    let currentstate = '';
                    if (tab.name === this.props.active) {
                        currentstate = 'active';
                    }
                    return (
                        <Nav.Item className={currentstate} onClick={() => {
                            this.props.onChange(tab.name);
                            this.props.setActiveTab(tab.name);
                        }}>
                            <Nav.Link href={tab.hrefs}>
                                <FontAwesomeIcon icon={tab.icon} className={tab.classname} />
                                {tab.text}
                            </Nav.Link>
                        </Nav.Item>
                    )
                })
                }
            </Nav>
        )
    }
}

export default Tabs;