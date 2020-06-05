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
            TuitionLower: '',
            TuitionUpper: '',
            Rank: ''
        };
        this.setSearch = this.setSearch.bind(this);
        this.searchBarInUse = this.searchBarInUse.bind(this);
        this.handleChangeTuitionUpper = this.handleChangeTuitionUpper.bind(this);
        this.handleChangeTuitionLower = this.handleChangeTuitionLower.bind(this);
        this.handleChangeRanking = this.handleChangeRanking.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderExplore = this.renderExplore.bind(this);
        this.union = this.union.bind(this);
    }


    searchBarInUse = (inUse) => {
        if (inUse != this.state.searchBar) {
            console.log(inUse);
            this.setState({ searchBar: inUse });
        }
    }

    renderExplore = (filter) => {
        //console.log("here");
        if (this.state.searchBar == false) {
            return (
                <div>
                    <form className="filter-form">
                        <input type="text" onChange={this.handleChangeTuitionLower} size="100"></input>
                        <input type="text" onChange={this.handleChangeTuitionUpper} size="100"></input>
                        <input type="text" placeholder="Ranking" onChange={this.handleChangeRanking} size="100"></input>
                    </form>
                    <ul className="ListColleges">
                        {filter}
                    </ul>
                </div>
            )
        }
    }

    union(renderListRank, renderListTuition) {
        let renderList = [];

        if(this.state.Rank === '') {
            console.log(renderListTuition);
            return renderListTuition;
        }
        
        if(this.state.TuitionLower === '' && this.state.TuitionUpper === '') {
            console.log(renderListRank);
            return renderListRank;
        }

        for(let i = 0; i < renderListTuition.length; i++) {
            for(let j = 0; j < renderListRank.length; j++) {
                if(renderListTuition[i] === renderListRank[j]) {
                    renderList.push(renderListTuition[i]);
                }
            }
        }

        console.log(renderList);
        return renderList;
    }

    getInitialState() {
        return { 
            TuitionLower: '', 
            TuitionUpper: '',
            Rank: '' 
        };
    }

    handleTuitionRange() {
        console.log(this.state.TuitionLower);
        console.log(this.state.TuitionUpper);
    }

    handleChangeTuitionLower(e) {
        this.setState({ TuitionLower: e.target.value });
    }

    handleChangeTuitionUpper(e) {
        this.setState({ TuitionUpper: e.target.value });
    }

    handleChangeRanking(e) {
        this.setState({ Rank: e.target.value });
    }

    handleClick() {
        this.state.newCollegeList = [];
        console.log(this.state.newCollegeList);
    }


    setSearch = (results) => {
        if (results !== this.state.resultsFromSearch) {
            this.setState({
                resultsFromSearch: results
            })
        }
    }

    render() {
        let renderList = [];
        
        let renderListTuition = [];
        if(this.state.TuitionLower !== '' && this.state.TuitionUpper !== '') {
            renderListTuition = this.state.Colleges.filter(college => college.Tuition <= this.state.TuitionUpper && college.Tuition >= this.state.TuitionLower);
        }

        let renderListRank = [];
        if(this.state.Rank !== '') {
            renderListRank = this.state.Colleges.filter(college => college.Rank <= this.state.Rank);
        }

        console.log(renderListRank.length);
        renderList = this.union(renderListRank, renderListTuition);
        
        const renderRank = renderList.map(college => (
            <li>{college.Name}</li>
        ))

        //console.log(filter);
        return (
            <div className="Explore">
                <Navigationbar active="2" />
                <NavBar searchBarInUse={this.searchBarInUse} setSearch={this.setSearch} />
                {this.renderExplore(renderRank)}
            </div>
        );
    }
}

export default Explore;