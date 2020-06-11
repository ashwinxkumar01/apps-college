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
            College: ''
        };

        this.setSearch = this.setSearch.bind(this);
        this.searchBarInUse = this.searchBarInUse.bind(this);
        this.renderExplore = this.renderExplore.bind(this);
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
                <div className="container-div">
                    <div className="filter">
                        <h1 className="filter-name">Filters</h1>
                        <div className="tuition">
                            <div className="header">Tuition</div>
                            <form className="filter-form">
                                <input type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">Population</div>
                            <form className="filter-form">
                                <input type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">Acceptance</div>
                            <form className="filter-form">
                                <input type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">App fee</div>
                            <form className="filter-form">
                                <input type="text" placeholder="Lower" size="100"></input>
                                <span>-</span>
                                <input type="text" placeholder="Upper" size="100"></input>
                            </form>
                        </div>

                        <div className="app-type">
                            <span className="dropdown-name">App type</span>
                            <select>
                                <option selected value="Any">Any</option>
                                <option value="Common">Common App</option>
                                <option value="Coalition">Coalition App</option>
                            </select>
                        </div>

                        <div className="school-type">
                            <span className="dropdown-name">School Type</span>
                            <select>
                                <option selected value="Any">Any</option>
                                <option value="Public">Public</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>
                    </div>
                    <ul className="ListColleges">
                        <li><Tile /></li>
                        <li><Tile /></li>
                        <li><Tile /></li>
                        <li><Tile /></li>
                        <li><Tile /></li>
                        <li><Tile /></li>
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