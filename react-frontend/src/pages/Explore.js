import React from "react";
import '../css/Explore.css';
import Navigationbar from '../components/content/Navigationbar';
import NavBar from '../components/content/Navbar';
import Image3 from './UCSD_3.jpg';

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
                <div className="container-div">
                    <div className="filter">
                    <h1>Filters</h1>
                        <div className="tuition">
                            <div className="header">Tuition</div>
                            <form className="filter-form">
                                <input type="text" onChange={this.handleChangeTuitionLower} size="100"></input>
                                <span>-</span>
                                <input type="text" onChange={this.handleChangeTuitionUpper} size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">Population</div>
                            <form className="filter-form">
                                <input type="text" onChange={this.handleChangeTuitionLower} size="100"></input>
                                <span>-</span>
                                <input type="text" onChange={this.handleChangeTuitionUpper} size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">GPA Average</div>
                            <form className="filter-form">
                                <input type="text" onChange={this.handleChangeTuitionLower} size="100"></input>
                                <span>-</span>
                                <input type="text" onChange={this.handleChangeTuitionUpper} size="100"></input>
                            </form>
                        </div>

                        <div className="tuition">
                            <div className="header">App fee</div>
                            <form className="filter-form">
                                <input type="text" onChange={this.handleChangeTuitionLower} size="100"></input>
                                <span>-</span>
                                <input type="text" onChange={this.handleChangeTuitionUpper} size="100"></input>
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
                        {filter}
                    </ul>
                </div>
            )
        } else {
            return (
              this.state.resultsFromSearch.map(college => (
                <div className="searchResult">
                  <img src={Image3} className="imageBox" />
                  {college}
                </div>
              )
              )
            )
      
          }
    }

    union(renderListOne, renderListTwo) {
        let renderList = [];
        
        if(renderListOne === undefined || renderListOne.length == 0) {
            console.log(renderListTwo);
            return renderListTwo;
        }
        
        if(renderListTwo === undefined || renderListTwo.length == 0) {
            return renderList;
        }

        for(let i = 0; i < renderListOne.length; i++) {
            for(let j = 0; j < renderListTwo.length; j++) {
                if(renderListOne[i] === renderListTwo[j]) {
                    renderList.push(renderListOne[i]);
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

        let value = this.union(renderList, renderListTuition);
        renderList = this.union(renderListRank, value);
        
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