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
      users: mockData
    };
    this.setSearch = this.setSearch.bind(this);
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
      this.setState({ searchBar: inUse });
    }
  }

  componentWillMount(){
    fetch("/dashboard", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      }).then(response => {
      console.log(response)
      return response.json()
      }).then(data => {
      console.log(data)
      if(this.state.users === data){

      }else{
        this.setState({users : data});
      }
    });
  }

  renderDashboard = () => {
    if (this.state.searchBar === false) {
      return (
        <div className={useStyles.root}>
          {/* <UsersToolbar /> */}
          <div className={useStyles.theme}>
            <UsersTable users={this.state.users} />
          </div>
        </div>
      )
    } else {
      return (
        this.state.resultsFromSearch.map(college => (
          <div>
            <Nav.Link href={`/loginhome/features/${college}`} className="fixedHeight">
              <div className="searchResult">
                <div className="backgroundSolid" />
                <div className="backgroundBlend" />
                <img src={Image3} alt="Hello" className="imageBox" />
                {college}
              </div>
            </Nav.Link>
            <div className="height">
                <Heart collegeName={college} />
            </div>
          </div>
        )
        )
      )
    }
  }

  render() {
    if(sessionStorage.getItem("userData")){
      console.log(sessionStorage.getItem("userData"));
    }
    console.log()
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