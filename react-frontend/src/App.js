import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Explore from './pages/Explore';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Features from './pages/Features';
import Profile from './pages/Profile';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route path="/loginhome/explore" component={Explore} />
          <Route path="/loginhome/dashboard" component={Dashboard} />
          <Route path="/loginhome/login" component={Login} />
          <Route path="/loginhome/signup" component={Signup} />
          <Route path="/loginhome/features/:collegeName" component={Features} />
          <Route path="/loginhome/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;