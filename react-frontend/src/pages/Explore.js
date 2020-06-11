import React, { useEffect } from "react";
import '../css/Explore.css';
import Navigationbar from '../components/content/Navigationbar';
import { Nav } from 'react-bootstrap';
import NavBar from '../components/content/Navbar';
import Image3 from './UCSD_3.jpg';
import Tile from '../components/Tile';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBar: false,
            College: '',
            School: 'Any',
            App: 'Any',
            AppFeeLower: '',
            AppFeeUpper: '',
            AcceptanceLower: '',
            AcceptanceUpper: '',
            PopulationLower: '',
            PopulationUpper: '',
            TuitionLower: '',
            TuitionUpper: ''
        };

        this.setSearch = this.setSearch.bind(this);
        this.searchBarInUse = this.searchBarInUse.bind(this);
        this.renderExplore = this.renderExplore.bind(this);
        this.createTile = this.createTile.bind(this);

        //Handle the click for the submit button
        this.handleClick = this.handleClick.bind(this);
        //Handle the dropdown value in the App type
        this.handleAppSelect = this.handleAppSelect.bind(this);
        //Handle the dropdown value in the School type
        this.handleSchoolSelect = this.handleSchoolSelect.bind(this);
        //Handle the App Fee textboxes
        this.appFeeLower = this.appFeeLower.bind(this);
        this.appFeeUpper = this.appFeeUpper.bind(this);
        //Handle the acceptance rate textboxes
        this.acceptanceLower = this.acceptanceLower.bind(this);
        this.acceptanceUpper = this.acceptanceUpper.bind(this);
        //Handle the population textboxes
        this.populationLower = this.populationLower.bind(this);
        this.populationUpper = this.populationUpper.bind(this);
        //Handle the tuition textboxes
        this.tuitionLower = this.tuitionLower.bind(this);
        this.tuitionUpper = this.tuitionUpper.bind(this);
    }

    searchBarInUse = (inUse) => {
        if (inUse != this.state.searchBar) {
            console.log(inUse);
            this.setState({ searchBar: inUse });
        }
    }

    createTile() {
        console.log("here");
        this.state.College.forEach(college => {
            let parseCollege = JSON.parse(college);
            let alias = parseCollege["alias"];
            let tuition = parseCollege["tution_normal"];
            let acceptance = parseCollege["acceptance_rate"];
            let fee = parseCollege["app_fee"];
            
            console.log("hello");
            return <li><Tile Alias={alias} Tuition={tuition} Acceptance={acceptance} Fee={fee} /></li>
        });       
    }

    renderExplore = (filter) => {
        //console.log("here");
        if (this.state.searchBar == false) {
            return (
                <div className="container-div">
                    <div className="filter">
                        <h1 className="filter-name">Filters</h1>
                        <div className="tuition">
                            <div className="header">Tuition</div>
                            <form className="filter-form">
                                <input onChange={this.tuitionLower} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={this.tuitionUpper} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">Population</div>
                            <form className="filter-form">
                                <input onChange={this.populationLower} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={this.populationUpper} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">Acceptance</div>
                            <form className="filter-form">
                                <input onChange={this.acceptanceLower} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={this.acceptanceUpper} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">App fee</div>
                            <form className="filter-form">
                                <input onChange={this.appFeeLower} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={this.appFeeUpper} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="app-type">
                            <span className="dropdown-name">App type</span>
                            <select onChange={this.handleAppSelect} value={this.state.App}>
                                <option value="Any">Any</option>
                                <option value="Common">Common App</option>
                                <option value="Coalition">Coalition App</option>
                            </select>
                        </div>

                        <div className="school-type">
                            <span className="dropdown-name">School Type</span>
                            <select onChange={this.handleSchoolSelect} value={this.state.School}>
                                <option value="Any">Any</option>
                                <option value="Public">Public</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>

                        <form className="filter-button-div">
                            <button onClick={this.handleClick} className="filter-button">Search</button>
                        </form>
                    </div>
                    <ul className="ListColleges">
                        {/* <li><Tile /></li>
                        <li><Tile /></li>
                        <li><Tile /></li>
                        <li><Tile /></li>
                        <li><Tile /></li>
                        <li><Tile /></li> */}
                        {this.createTile}
                    </ul>
                </div>
            )
        } else {
            return (
                this.state.resultsFromSearch.map(college => (
                    <Nav.Link href={`/loginhome/features/${college}`} className="fixedHeight">
                        <div className="searchResult">
                            <img src={Image3} className="imageBox" />
                            {college}
                            <div className="heart"></div>
                        </div>
                    </Nav.Link>
                )
                )
            )
        }
    }

    setSearch = (results) => {
        if (results !== this.state.resultsFromSearch) {
            this.setState({
                resultsFromSearch: results
            })
        }
    }

    handleClick() {
        let array = [];
        if(this.state.App !== 'Any') {
            array.push("app_site");
            array.push(this.state.App);
        }

        if(this.state.AppFeeLower !== '' && this.state.AppFeeUpper !== '') {
            array.push("app_fee");
            array.push("+" + this.state.AppFeeLower);
            array.push("app_fee");
            array.push("-" + this.state.AppFeeUpper);
        }

        if(this.state.AcceptanceLower !== '' && this.state.AcceptanceUpper !== '') {
            array.push("acceptance_rate");
            array.push("+" + this.state.AcceptanceLower);
            array.push("acceptance_rate");
            array.push("-" + this.state.AcceptanceUpper);
        }

        if(this.state.PopulationLower !== '' && this.state.PopulationUpper !== '') {
            array.push("population");
            array.push("+" + this.state.PopulationLower);
            array.push("population");
            array.push("-" + this.state.PopulationUpper);
        }

        if(this.state.TuitionLower !== '' && this.state.TuitionLower !== '') {
            array.push("tuition_normal");
            array.push("+" + this.state.TuitionLower);
            array.push("tuition_normal");
            array.push("-" + this.state.TuitionUpper);
        }

        console.log(array);
        let college = '';
        fetch("/filter", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(["national_ranking", "+15", "national_ranking", "-30"])
            body: JSON.stringify(array)
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            // let value = data[0];
            // console.log(value);
            // let name = JSON.parse(value);
            // console.log(name["college_name"]);
            this.setState({
                College: data
            })
        });
    }

    appFeeLower(e) {
        this.setState({AppFeeLower: e.target.value});
    }

    appFeeUpper(e) {
        this.setState({AppFeeUpper: e.target.value});
    }

    acceptanceLower(e) {
        this.setState({AcceptanceLower: e.target.value});
    }

    acceptanceUpper(e) {
        this.setState({AcceptanceUpper: e.target.value});
    }

    populationLower(e) {
        this.setState({PopulationLower: e.target.value});
    }

    populationUpper(e) {
        this.setState({PopulationUpper: e.target.value});
    }

    tuitionLower(e) {
        this.setState({TuitionLower: e.target.value});
    }

    tuitionUpper(e) {
        this.setState({TuitionUpper: e.target.value});
    }

    handleSchoolSelect(e) {
        this.setState({School: e.target.value});
    }

    handleAppSelect(e) {
        this.setState({App: e.target.value});
    }

    render() {
        //console.log(filter);
        //Testing the fetch from database call
        // fetch("/test").then(response => {
        //     console.log(response);
        //     response.text().then(data => {
        //         console.log(data);
        //     })
        // })

        // let college = '';
        // fetch("/filter", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(["national_ranking", "+15", "national_ranking", "-30"])
        // }).then(response => {
        //     console.log(response);
        //     return response.json();
        // }).then(data => {
        //     console.log(data);
        //     let value = data[0];
        //     console.log(value);
        //     const name = JSON.parse(value);
        //     console.log(name["college_name"]);
        //     this.setState({
        //         College: name["college_name"]
        //     })
        // });

        // console.log(this.state.College);

        return (
            <div className="Explore">
                <Navigationbar active="2" />
                <NavBar searchBarInUse={this.searchBarInUse} setSearch={this.setSearch} />
                {this.renderExplore(this.state.College)}
            </div>
        );
    }
}

export default Explore;