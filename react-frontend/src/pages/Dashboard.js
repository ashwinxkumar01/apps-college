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
      rerenders: 0
    };
    this.setSearch = this.setSearch.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.searchBarInUse = this.searchBarInUse.bind(this);
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
      this.setState({ searchBar: inUse});
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
      if(collegeList.length !== this.state.users.length){
        boolean = false;
      }
      // if (sessionStorage.getItem("collegeNames")) {
      //   JSON.parse(sessionStorage.getItem("collegeNames")).map(college1 => {
      //     if (boolean) {
      //       let inside = false;
      //       collegeList.map(college2 => {
      //         if (college1.college_name === college2.college_name) {
      //           inside = true;
      //         }
      //       })
      //       if (inside) {

      //       } else {
      //         boolean = false;
      //       }
      //     }
      //   })
      //   sessionStorage.removeItem("collegeNames");
      // }else{
      //   boolean = false;
      // }
      sessionStorage.setItem("collegeNames", JSON.stringify(collegeList));
      if (boolean) {
      } else {
        this.setState({ users: collegeList, rerenders: 1});
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
      this.pullColleges();
      return (
        <div className={useStyles.root}>
          {/* <UsersToolbar /> */}
          <div className={useStyles.theme}>
            <UsersTable users={this.state.users} heartClicked={this.pullColleges()} />
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
    if (sessionStorage.getItem("userData")) {
      console.log(sessionStorage.getItem("userData"));
    }
    return (
      <div className="dashboard">
        <Navigationbar active="1" />
        <NavBar searchBarInUse={this.searchBarInUse} setSearch={this.setSearch} />
        <div>
          {
            this.renderDashboard()
          }
        </div>

      </div>
    )
  }


}

// const Dashboard = () => {
//     const classes = useStyles();

//     const [users] = useState(mockData);

//     return (
//       <div className={classes.root}>
//         <UsersToolbar />
//         <div className={classes.content}>
//           <UsersTable users={users} />
//         </div>
//       </div>
//     );
//   };

export default Dashboard;