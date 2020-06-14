import React, { useEffect } from "react";
import '../css/Explore.css';
import Navigationbar from '../components/content/Navigationbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/content/Navbar';
import Image3 from './UCSD_3.jpg';
import Tile from '../components/Tile';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBar: false,
            College: [],
            School: 'Any',
            App: 'Any',
            Filter: 'national_ranking',
            Checkbox: true,
            AppFeeLower: '',
            AppFeeUpper: '',
            AcceptanceLower: '',
            AcceptanceUpper: '',
            PopulationLower: '',
            PopulationUpper: '',
            TuitionLower: '',
            TuitionUpper: '',
            RankingLower: '',
            RankingUpper: '',
            Ordering: "Ascending"
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
        //Handle the filter by dropdown 
        this.handleFilter = this.handleFilter.bind(this);
        //Handle the checkbox
        this.handleCheckbox = this.handleCheckbox.bind(this);
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
        //Handle the ranking textboxes
        this.rankingLower = this.rankingLower.bind(this);
        this.rankingUpper = this.rankingUpper.bind(this);
        this.changeAscent = this.changeAscent.bind(this);
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

    renderExplore = (College) => {
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

                        <div className="tuition">
                            <div className="header">Ranking</div>
                            <form className="filter-form">
                                <input onChange={this.rankingLower} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={this.rankingUpper} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="app-type">
                            <span className="dropdown-name">App type</span>
                            <select onChange={this.handleAppSelect} value={this.state.App}>
                                <option value="Any">Any</option>
                                <option value="commonapp">Common App</option>
                                <option value="coalitionapp">Coalition App</option>
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

                        <div className="filter-button-div">
                            <button onClick={this.handleClick} className="filter-button">Apply</button>
                        </div>
                    </div>

                    <div className="content-display">
                        <div className="float-display">
                            <div className="filter-type">
                                    <h3 className="filter-span">Sort by</h3>
                                    <select onChange={this.handleFilter} value={this.state.Filter}>
                                        <option value="tuition_normal">Tuition</option>
                                        <option value="acceptance_rate">Acceptance Rate</option>
                                        <option value="app_fee">App Fee</option>
                                        <option value="population">Population</option>
                                        <option value="national_ranking">Ranking</option>
                                    </select>

                                    <h3 className="filter-ordering">{this.state.Ordering}</h3>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                        onChange={this.handleCheckbox}
                                        onClick={this.changeAscent} />
                            </div>
                        </div>

                        <ul className="ListColleges" >
                            { this.state.College.map(college => {
                                console.log(college)
                                let val = JSON.parse(college);
                                let collegeName = val["college_name"];
                                return (
                                    <Link to={`/loginhome/features/${collegeName}`}>
                                        <li>
                                            <Tile Alias={val["alias"]} Tuition={val["tuition_normal"]} 
                                            Acceptance={val["acceptance_rate"]} Fee={val["app_fee"]} collegeName={val["college_name"]}
                                            Logo={val["college_logo"]} Type={val["school_type"]}
                                            /> 
                                        </li>
                                    </Link>
                                )
                                }) 
                            }
                            {/* <li> <Tile Tuition={"1000000"} Alias={"Ashwin sucks"} Acceptance={"0"} Fee={"20000"}/></li>
                            <li> <Tile Tuition={"Hello"} Alias={"Ashwin sucks"} Acceptance={"Never"} Fee={"23000"}/></li>
                            <li> <Tile Tuition={"Hello"} Alias={"Ashwin sucks"} Acceptance={"Never"} Fee={"26000"}/></li>
                            <li> <Tile Tuition={"Hello"} Alias={"Ashwin sucks"} Acceptance={"Never"} Fee={"29000"}/></li> */}
                        </ul>
                    </div>
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

        if(this.state.RankingLower !== '' && this.state.RankingUpper !== '') {
            array.push("national_ranking");
            array.push("+" + this.state.RankingLower);
            array.push("national_ranking");
            array.push("-" + this.state.RankingUpper);
        }

        console.log(array);
        let college = '';
        fetch("/filter", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(["national_ranking", "+15", "national_ranking", "-30"])
            body: JSON.stringify({
                Array: array,
                Filter: this.state.Filter,
                IsDescending: this.state.Checkbox
            })
        }).then(response => {
            return response.json();
        }).then(data => {
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
    
    rankingLower(e) {
        this.setState({RankingLower: e.target.value});
    }

    rankingUpper(e) {
        this.setState({RankingUpper: e.target.value});
    }

    handleSchoolSelect(e) {
        this.setState({School: e.target.value});
    }

    handleAppSelect(e) {
        this.setState({App: e.target.value});
    }

    handleFilter(e) {
        this.setState({Filter: e.target.value}, () => {
            this.handleClick();
            console.log(this.state.Filter);
        });
    }

    handleCheckbox(e) {
        let value = !this.state.Checkbox
        this.setState({Checkbox: value}, () => {
            console.log(this.state.Checkbox);
        })
    }

    changeAscent(e) {
        let value = this.state.Ordering === "Ascending" ? "Descending" : "Ascending";
        this.setState({Ordering: value}, () => {
            this.handleClick();
        });
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