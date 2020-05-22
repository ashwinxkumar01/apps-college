import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginhome from './pages/Loginhome';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/loginhome" component={Loginhome} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;