import React from "react";
import '../css/Explore.css';
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import Navigationbar from '../components/content/Navigationbar';
import NavBar from '../components/content/Navbar';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBar: false,
            Colleges: [{
                Name: 'UCSD',
                Tuition: 20000,
                Rank: 1
            }, {
                Name: 'Berkeley',
                Tuition: 25000,
                Rank: 2    
            }, {
                Name: 'Miramar',
                Tuition: 10000,
                Rank: 3   
            }, {
                Name: 'UCR',
                Tuition: 5000,
                Rank: 10    
            }],
            newCollegeList: [],
            Tuition: '',
            Rank: ''
        };
        this.setSearch = this.setSearch.bind(this);
        this.searchBarInUse = this.searchBarInUse.bind(this);
        this.handleChangeTuition = this.handleChangeTuition.bind(this);
        this.handleChangeRanking = this.handleChangeRanking.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    searchBarInUse = (inUse) => {
        if (inUse != this.state.searchBar) {
            console.log(inUse);
            this.setState({ searchBar: inUse });
        }
    }

    renderExplore = (filter) => {
        console.log("here");
        if (this.state.searchBar == false) {
            return (
                <div>
            <form className="filter-form">
                <input type="text" onChange={ this.handleChangeTuition } size="100"></input>
                <input type="text" onChange={ this.handleChangeRanking } size="100"></input>
            </form>
            <ul className="ListColleges">
             {filter}
            </ul>
            </div>
            )
        }
    }

    getInitialState() {
        return {inputNode: ''};
    }

    handleChangeTuition(e) {
        this.setState({ Tuition: e.target.value });
    }

    handleChangeRanking(e) {
        this.setState({ Rank: e.target.value });
    }

    handleClick() {
        this.state.newCollegeList = [];
        console.log(this.state.newCollegeList);
    }

    
    setSearch = (results) => {
        if(results !== this.state.resultsFromSearch){
            this.setState({
                resultsFromSearch: results
            })
        }
    }
    
    render() {
        const renderListTuition = this.state.Colleges.filter(college => college.Tuition < this.state.Tuition);
        const renderTuition = renderListTuition.map(college => (
            <li>{college.Name}</li>
        ))

        const renderListRank = this.state.Colleges.filter(college => college.Rank <= this.state.Rank);
        const renderRank = renderListRank.map(college => (
            <li>{college.Name}</li>
        ))

        let filter;
        if(this.state.Tuition === '') {
            filter = renderRank;
        } else {
            filter = renderTuition;
        }

        console.log(filter);
        return (
            <div className="Explore">
            <Navigationbar active="2" />
            <NavBar searchBarInUse={this.searchBarInUse} setSearch={this.setSearch}/>
                {this.renderExplore(filter)}
            </div>
        );
    }
}

export default Explore;