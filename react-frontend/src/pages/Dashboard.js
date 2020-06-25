import '../css/Dashboard.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Navigationbar from '../components/content/Navigationbar';
import { Nav } from 'react-bootstrap';
import NavBar from '../components/content/Navbar';
import Image3 from './UCSD_3.jpg';

import { UsersToolbar, UsersTable } from '../components/dashboardComponents';
import mockData from './data';
import Heart from '../components/content/Heart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: false,
      resultsFromSearch: [],
      users: [],
      rerender: false,
      selectedColleges: []
    };
    this.removeColleges = this.removeColleges.bind(this);
    this.selectedCollegeSet = this.selectedCollegeSet.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.searchBarInUse = this.searchBarInUse.bind(this);
  }

  removeColleges = async () => {
    let CollegeNames = []
    this.state.selectedColleges.map(colleges => {
      CollegeNames.push(colleges.college_name);
    })
    fetch("/removecolleges", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        CollegeName: CollegeNames
      })
    }).then(response => {
      return response.json();
    }).then(data => {
      this.setState({ rerender: false, selectedColleges: [] })
    })
}

selectedCollegeSet = (colleges) => {
  if (this.state.selectedColleges !== colleges) {
    this.setState({ selectedColleges: colleges });
  }
}

setSearch = (results) => {
  if (results !== this.state.resultsFromSearch) {
    this.setState({
      resultsFromSearch: results
    })
  }
}

searchBarInUse = (inUse) => {
  if (inUse !== this.state.searchBar) {
    if (inUse) {
      this.setState({ searchBar: inUse, rerender: true });
    } else {
      this.setState({ searchBar: inUse, rerender: false });
    }
  }
}

pullColleges() {
  fetch("/dashboard", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => {
    return response.json()
  }).then(data => {
    let collegeList = [];
    let boolean = true;
    data.map(college => {
      var collegeName = JSON.parse(college);
      collegeList.push(collegeName);
    })
    console.log(collegeList);
    sessionStorage.setItem("collegeNames", JSON.stringify(collegeList));
    if (this.state.rerender) {
    } else {
      this.setState({ users: collegeList, rerender: true });
    }
  });

}

renderHeart(collegeName) {
  return (
    <Heart collegeName={collegeName} key={collegeName} />
  )
}

renderDashboard = () => {
  if (this.state.searchBar === false) {
    if (this.state.rerender) {

    } else {
      this.pullColleges();
    }
    return (
      <div className={useStyles.root}>
        <UsersToolbar selectedColleges={this.state.selectedColleges} removeColleges={this.removeColleges} />
        <div className={useStyles.theme}>
          <UsersTable users={this.state.users} setColleges={this.selectedCollegeSet} selectedColleges={this.state.selectedColleges} />
        </div>
      </div>
    )
  } else {
    return (
      this.state.resultsFromSearch.map(college => {
        return (
          <div>
            <Link to={`/loginhome/page/${college}`} className="fixedHeight">
              <div className="searchResult">
                <div className="backgroundSolid" />
                <div className="backgroundBlend" />
                <img src={Image3} alt="Hello" className="imageBox" />
                <div className="collegeName">
                  {college}
                </div>
              </div>
            </Link>
            <div className="height">
              <div style={{ marginTop: "calc(-1.5vh)" }}>
                {this.renderHeart(college)}
              </div>
            </div>
          </div>
        )
      }
      )
    )
  }
}

render() {
  return (
    <div className="dashboard">
      {/* <Navigationbar active="1" /> */}
      <NavBar searchBarInUse={this.searchBarInUse} setSearch={this.setSearch} active="1" />
      <div>
        {
          this.renderDashboard()
        }
      </div>

    </div>
  )
}


}

export default Dashboard;