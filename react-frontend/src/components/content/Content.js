import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Features from '../../pages/Features';
import Dashboard from '../../pages/Dashboard';
import Profile from '../../pages/Profile';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

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
              <Route path="/loginhome/dashboard" exact component={Dashboard} />
              <Route path="/loginhome/feature" component={Features} />
              <Route path="/loginhome/profile" component={Profile} />
              <Route path="/loginhome/login" component={Login} />
              <Route path="/loginhome/signup" component={Signup} />
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

export default Content;
