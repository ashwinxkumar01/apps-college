import '../css/Dashboard.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from '../components/Table';
import Navigationbar from '../components/content/Navigationbar';
import NavBar from '../components/content/Navbar';
import Image1 from './UCSD_1.jpg';
import Image2 from './UCSD_2.jpg';
import Image3 from './UCSD_3.jpg';
import Image4 from './UCSD_4.jpg';

import { UsersToolbar, UsersTable } from './dashboardComponents';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));


// class Dashboard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchBar: false,
//             resultsFromSearch: []
//         };
//         this.setSearch = this.setSearch.bind(this);
//         this.searchBarInUse = this.searchBarInUse.bind(this);
//     }

//     setSearch = (results) => {
//         if(results !== this.state.resultsFromSearch){
//             this.setState({
//                 resultsFromSearch: results
//             })
//         }
//     }

//     searchBarInUse = (inUse) => {
//         if (inUse !== this.state.searchBar) {
//             this.setState({ searchBar: inUse });
//         }
//     }

//     renderDashboard = () => {
//         if (this.state.searchBar === false) {
//             return (
//                 <div>
//                     <Table />
//                 </div>
//             )
//         }else{
//             return(
//                 this.state.resultsFromSearch.map(college => (
//                 <div className="searchResult">
//                     <img src={Image3} className="imageBox"/>
//                     {college}
//                 </div>
//                 )
//             )
//             )
            
//         }
//     }

//     render() {
//         return (
//             <div className="dashboard">
//                 <Navigationbar active="1" />
//                 <NavBar searchBarInUse={this.searchBarInUse} setSearch={this.setSearch}/>
//                 <div className="screenContent">
//                     {
//                     this.renderDashboard()
//                     }
//                 </div>
                
//             </div>
//         )
//     }

    
// }

const Dashboard = () => {
    const classes = useStyles();
  
    const [users] = useState(mockData);
  
    return (
      <div className={classes.root}>
        <UsersToolbar />
        <div className={classes.content}>
          <UsersTable users={users} />
        </div>
      </div>
    );
  };

export default Dashboard;