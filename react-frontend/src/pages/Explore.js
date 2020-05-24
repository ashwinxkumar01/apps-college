import React from "react";
import '../css/Explore.css';
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

        this.handleChangeTuition = this.handleChangeTuition.bind(this);
        this.handleChangeRanking = this.handleChangeRanking.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
               <form className="filter-form">
                   <input type="text" onChange={ this.handleChangeTuition } size="100"></input>
                   <input type="text" onChange={ this.handleChangeRanking } size="100"></input>
               </form>
               
               <ul className="ListColleges">
                {filter}
               </ul> 
            </div>
        );
    }
}

export default Explore;