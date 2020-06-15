import React from "react";
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
            Ordering: "Low to High",
            TuitionState: "tuition_normal",
        };

        this.setSearch = this.setSearch.bind(this);
        this.searchBarInUse = this.searchBarInUse.bind(this);
        this.renderExplore = this.renderExplore.bind(this);

        //Handle the click for the submit button
        this.handleClick = this.handleClick.bind(this);
        //Handle the filter by dropdown 
        this.handleFilter = this.handleFilter.bind(this);
        //Handles the text inside the button
        this.changeAscent = this.changeAscent.bind(this);
        //Handles the tuition normal vs tuition oos 
        this.changeTuitionState = this.changeTuitionState.bind(this);
        this.numFormat = this.numFormat.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
    }

    searchBarInUse = (inUse) => {
        if (inUse !== this.state.searchBar) {
            console.log(inUse);
            this.setState({ searchBar: inUse });
        }
    }

    renderExplore = (College) => {
        if (this.state.searchBar === false) {
            return (
                <div className="container-div">
                    <div className="filter">
                        <h1 className="filter-name">Filters</h1>

                        <div className="tuition">
                            <div className="header">Population</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({PopulationLower: e.target.value})} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({PopulationUpper: e.target.value})} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Acceptance</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({AcceptanceLower: e.target.value})} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({AcceptanceUpper: e.target.value})}  type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">App fee</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({AppFeeLower: e.target.value})} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({AppFeeUpper: e.target.value})} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Ranking</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({RankingLower: e.target.value})} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({RankingUpper: e.target.value})} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Tuition</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({TuitionLower: e.target.value})} type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({TuitionUpper: e.target.value})} type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="oos-tuition">
                            <input
                                className="checkbox"
                                type="checkbox"
                                onClick={this.changeTuitionState}
                                />
                            <h4>Out of State</h4>
                        </div>

                        <hr></hr>

                        <div className="app-type">
                            <div className="app-div"><span className="dropdown-name">App type</span></div>
                            <select onChange={(e) => this.setState({App: e.target.value})} value={this.state.App}>
                                <option value="Any">Any</option>
                                <option value="commonapp">Common App</option>
                                <option value="coalitionapp">Coalition App</option>
                            </select>
                        </div>

                        <hr></hr>

                        <div className="school-type">
                            <div className="app-div"><span className="dropdown-name">School Type</span></div>
                            <select onChange={(e) => this.setState({School: e.target.value})} value={this.state.School}>
                                <option value="Any">Any</option>
                                <option value="Public">Public</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>

                        <hr></hr>

                        <div className="filter-button-div">
                            <button onClick={this.handleClick} className="filter-button">Apply</button>
                        </div>
                    </div>

                    <div className="content-display">
                        <div className="float-display">
                            <div className="filter-type">
                                    <select onChange={this.handleFilter} value={this.state.Filter}>
                                        <option selected disabled>Sort by</option>
                                        <option value="national_ranking">Ranking</option>
                                        <option value="tuition_normal">Tuition: In-state</option>
                                        <option value="tuition_oos">Tuition: Out of State </option>
                                        <option value="acceptance_rate">Acceptance Rate</option>
                                        <option value="app_fee">App Fee</option>
                                        <option value="population">Population</option>
                                    </select>

                                    <input
                                        className="button"
                                        type="submit"
                                        onClick={this.changeAscent} 
                                        value={this.state.Ordering}
                                        />
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
                                            <Tile Alias={val["alias"]} Tuition={this.numFormat(val["tuition_normal"])} TuitionOOS={this.numFormat(val["tuition_oos"])} 
                                            Acceptance={val["acceptance_rate"]} Fee={val["app_fee"]} collegeName={val["college_name"]}
                                            Logo={val["college_logo"]} Type={val["school_type"]}
                                            /> 
                                        </li>
                                    </Link>
                                )
                                }) 
                            }
                            <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"10"} Fee={"20000"} Type={"Private"} Logo={Image3}/></li>
                            <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"10"} Fee={"23000"} Type={"Private"} Logo={Image3}/></li>
                            <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"20"} Fee={"26000"} Type={"Private"} Logo={Image3}/></li>
                            <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"30"} Fee={"29000"} Type={"Private"} Logo={Image3}/></li>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                this.state.resultsFromSearch.map(college => (
                    <Nav.Link href={`/loginhome/features/${college}`} className="fixedHeight">
                        <div className="searchResult">
                            <img src={Image3} alt="ImageAgain" className="imageBox" />
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

    numFormat(num) {
        return num.toLocaleString();
    }

    dateFormat(input) {
        var myDate = new Date(input*1000);
        return((myDate.getUTCMonth()+1) + "/" + myDate.getUTCDate() + "/" + myDate.getUTCFullYear());
    }

    handleClick() {
        let array = [];
        if(this.state.App !== 'Any') {
            array.push("app_site");
            array.push(this.state.App);
        }

        if(this.state.School !== 'Any') {
            array.push("school_type");
            array.push(this.state.School);
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
            if(this.state.TuitionState === "tuition_normal"){ 
                array.push("tuition_normal");
                array.push("+" + this.state.TuitionLower);
                array.push("tuition_normal");
                array.push("-" + this.state.TuitionUpper);
            } else {
                array.push("tuition_oos");
                array.push("+" + this.state.TuitionLower);
                array.push("tuition_oos");
                array.push("-" + this.state.TuitionUpper);
            }
        }

        if(this.state.RankingLower !== '' && this.state.RankingUpper !== '') {
            array.push("national_ranking");
            array.push("+" + this.state.RankingLower);
            array.push("national_ranking");
            array.push("-" + this.state.RankingUpper);
        }

        console.log(array);
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

    handleFilter(e) {
        this.setState({Filter: e.target.value}, () => {
            this.handleClick();
            console.log(this.state.Filter);
        });
    }

    changeAscent(e) {
        let value = this.state.Ordering === "Low to High" ? "High to Low" : "Low to High";
        this.setState({Ordering: value}, () => {
            console.log(this.state.Ordering);
            this.handleClick();
        });
        let style = !this.state.Checkbox
        this.setState({Checkbox: style}, () => {
            console.log(this.state.Checkbox);
        })
    }

    changeTuitionState(e) {
        let value = this.state.TuitionState === "tuition_normal" ? "tuition_oos" : "tuition_normal";
        this.setState({TuitionState: value}, () => {
            console.log(this.state.TuitionState);
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