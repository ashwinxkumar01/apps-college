import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Features from '../../pages/Features';
import Dashboard from '../../pages/Dashboard';
import Profile from '../../pages/Profile';
import Home from '../../pages/Home';

class Content extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/feature" component={Features} />
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

export default Content;
