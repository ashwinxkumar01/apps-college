import React from "react";
import '../css/Explore.css';
import Navigationbar from '../components/content/Navigationbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/content/Navbar';
import Image3 from './UCSD_3.jpg';
import Tile from '../components/Tile';
import Heart from '../components/content/Heart';
import { States, Type, App, Sortby, LOR } from '../components/State';
import Select from 'react-select';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBar: false,
            College: [],
            School: Type[0],
            App: App[0],
            LOR: LOR[0],
            Filter: Sortby[0],
            Checkbox: true,
            AppFeeLower: null,
            AppFeeUpper: null,
            AcceptanceLower: null,
            AcceptanceUpper: null,
            PopulationLower: null,
            PopulationUpper:null,
            TuitionLower: null,
            TuitionUpper: null,
            RankingLower: null,
            RankingUpper: null,
            Ordering: "Low to High",
            TuitionState: "tuition_normal",
            StateFilter: []
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
        //Handles the State array
        this.handleState = this.handleState.bind(this);
        
        this.numFormat = this.numFormat.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
        this.pushToArray = this.pushToArray.bind(this);
        this.splitToArray = this.splitToArray.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0,0);
        let savedArray = sessionStorage.getItem("array");
        let copyArray = [];

        if(savedArray === null || savedArray === undefined) {
            //do nothing
        } else {
            copyArray = savedArray.split(",");
        }
        
        const filterBy = sessionStorage.getItem("filterby");
        if(filterBy !== null) {
           const index = this.splitToArray(filterBy, Sortby);
           console.log(Sortby[index]);
           this.setState({ Filter: Sortby[index]}, () => console.log(this.state.Filter));
        }

        if(copyArray[0] === "") {
            copyArray = [];
        }

        fetch("/filter", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Array: copyArray,
                Filter: this.state.Filter.value,
                IsDescending: this.state.Checkbox
            })
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            this.setState({
                College: data
            })
        });

        const appFee = sessionStorage.getItem("feelower");
        this.setState({ AppFeeLower: appFee}, () => console.log(this.state.AppFeeLower));

        const appFeeUpper = sessionStorage.getItem("feeupper");
        this.setState({ AppFeeUpper: appFeeUpper}, () => console.log(this.state.AppFeeUpper));

        const acceptLower = sessionStorage.getItem("acceptlower");
        this.setState({ AcceptanceLower: acceptLower});

        const acceptUpper = sessionStorage.getItem("acceptupper");
        this.setState({ AcceptanceUpper: acceptUpper});

        const populationLower = sessionStorage.getItem("populationlower");
        this.setState({ PopulationLower: populationLower});

        const populationUpper = sessionStorage.getItem("populationupper");
        this.setState({ PopulationUpper: populationUpper});

        const nationalLower = sessionStorage.getItem("nationallower");
        this.setState({ RankingLower: nationalLower});

        const nationalUpper = sessionStorage.getItem("nationalupper");
        this.setState({ RankingUpper: nationalUpper});

        const tuitionLower = sessionStorage.getItem("normallower");
        this.setState({ TuitionLower: tuitionLower});

        const tuitionUpper = sessionStorage.getItem("normalupper");
        this.setState({ TuitionUpper: tuitionUpper});

        const appType = sessionStorage.getItem("appfee");
        console.log(appType);
        if(appType !== null) {
            const index = this.splitToArray(appType, App);
            this.setState({ App: App[index]}, () => console.log(this.state.App));
        }

        const letterRec = sessionStorage.getItem("letterrec");
        if(letterRec !== null) {
            const index = this.splitToArray(letterRec, LOR);
            console.log(LOR[index]);
            this.setState({ LOR: LOR[index]}, () => console.log(this.state.LOR));
        }

        const schoolType = sessionStorage.getItem("schooltype");
        if(schoolType !== null) {
            const index = this.splitToArray(schoolType, Type);
            this.setState({ School: Type[index]});
        }
      }

    splitToArray(type, compare) {
        let spliceApp = type.split(",");
        let appTypeObj = '';
        console.log(compare);
        console.log(type);
        for(let i = 0; i < compare.length; i++) {
            let getValue = spliceApp[0];
            if(!isNaN(parseFloat(getValue))) {
                getValue = Number.parseFloat(getValue);
            }

            console.log(getValue);
            console.log(compare[i].value);
            if(getValue === compare[i].value) {
                appTypeObj = i;
            }
        }
        console.log(appTypeObj);
        return appTypeObj;
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
                                <input onChange={(e) => this.setState({ PopulationLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.PopulationLower}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ PopulationUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.PopulationUpper}
                                ></input>
                            </form>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Acceptance</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({ AcceptanceLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.AcceptanceLower}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ AcceptanceUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.AcceptanceUpper}
                                ></input>
                            </form>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">App fee</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({ AppFeeLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.AppFeeLower}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ AppFeeUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.AppFeeUpper}
                                ></input>
                            </form>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Ranking</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({ RankingLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.RankingLower}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ RankingUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.RankingUpper}
                                ></input>
                            </form>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Tuition</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({ TuitionLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.TuitionLower}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ TuitionUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.TuitionUpper}
                                ></input>
                            </form>
                        </div>

                        <div className="oos-tuition">
                            <input
                                className="checkbox"
                                type="checkbox"
                                onClick={this.changeTuitionState}
                                value={this.state.TuitionState}
                            />
                            <h4>Out of State</h4>
                        </div>

                        <hr></hr>

                        <div className="app-type">
                            <Select onChange={(e) => {this.setState({ App: e }, () => {
                                console.log(this.state.App);
                                sessionStorage.setItem("appfee", [this.state.App.value, this.state.App.label]);
                            }
                            )}} 
                            options={App} placeholder={"Application type"} value={this.state.App}
                            />
                        </div>

                        <hr></hr>

                        <div className="app-type">
                            <Select onChange={(e) => this.setState({ LOR: e }, () => {
                                sessionStorage.setItem("letterrec", [this.state.LOR.value, this.state.LOR.label]);
                            })} 
                            options={LOR} placeholder={"Letter of Recommendations"} value={this.state.LOR}/>
                        </div>

                        <hr></hr>

                        <div className="school-type">
                            <Select onChange={(e) => this.setState({ School: e }, () => {
                                sessionStorage.setItem("schooltype", [this.state.School.value, this.state.School.label]);
                            })} 
                            options={Type} placeholder={"School Type"} value={this.state.School}/>
                        </div>

                        <hr></hr>

                        <div className="school-type">
                            <div className="dropdown-div">
                            <Select
                                placeholder={"State"}
                                onChange={this.handleState} 
                                isMulti
                                name="colors"
                                options={States}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />   
                            </div>
                        </div>

                        <hr></hr>

                        <div className="filter-button-div">
                            <button onClick={this.handleClick} className="filter-button">Apply</button>
                        </div>
                    </div>

                    <div className="content-display">
                        <div className="float-display">
                            <div className="sort-by">
                                <Select onChange={this.handleFilter} 
                                options={Sortby} placeholder={"National Ranking"} value={this.state.Filter}/>
                            </div>
                                <input
                                    className="button"
                                    type="submit"
                                    onClick={this.changeAscent}
                                    value={this.state.Ordering}
                                />                        
                            </div>

                        <ul className="ListColleges" >
                            {this.state.College.map(college => {
                                let val = JSON.parse(college);
                                let collegeName = val["college_name"];
                                return (
                                        <li>
                                            <Tile Alias={val["alias"]} Tuition={this.numFormat(val["tuition_normal"])} TuitionOOS={this.numFormat(val["tuition_oos"])}
                                                Acceptance={val["acceptance_rate"]} Fee={val["app_fee"]} collegeName={val["college_name"]}
                                                Logo={val["college_logo"]} Type={val["school_type"]} Population={this.numFormat(val["population"])} 
                                                Ranking={val["national_ranking"]}
                                            />
                                        </li>
                                )
                            })
                            }
                            <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks And I hate him"} Acceptance={"10"} Fee={"20000"} Type={"Private"} Logo={Image3} /></li>
                            <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"10"} Fee={"23000"} Type={"Private"} Logo={Image3} /></li>
                            <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"20"} Fee={"26000"} Type={"Private"} Logo={Image3} /></li>
                            <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"30"} Fee={"29000"} Type={"Private"} Logo={Image3} /></li>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                this.state.resultsFromSearch.map(college => (
                    <div>
                        <Link to={`/loginhome/page/${college}`} className="fixedHeight">
                            <div className="searchResult">
                                <div className="backgroundSolid" />
                                <div className="backgroundBlend" />
                                <img src={Image3} alt="Hello" className="imageBox" />
                                {college}
                            </div>
                        <div className="height">
                            <div className="heartHeight">
                            <Heart collegeName={college} />
                            </div>
                        </div>
                        </Link>
                    </div>
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
        if(num === null){ 
            return num;
        } else {
            return num.toLocaleString();
        }
    }

    dateFormat(input) {
        var myDate = new Date(input * 1000);
        return ((myDate.getUTCMonth() + 1) + "/" + myDate.getUTCDate() + "/" + myDate.getUTCFullYear());
    }

    pushToArray(state, string, array, sign, storage) {
        if (state === null || state === '') {
            //Nothing happens
            console.log("Expected");
            sessionStorage.setItem(storage, '');
        } else if(/^\d+$/.test(state)){
            array.push(string);
            array.push(sign + state);
            sessionStorage.setItem(storage, state);   
        } else {
            console.log(state);
            array.push(string);
            array.push("-0");    
        }
    }

    handleClick() {
        let array = [];

        this.pushToArray(this.state.AppFeeLower, "app_fee", array, "+", "feelower");

        this.pushToArray(this.state.AppFeeUpper, "app_fee", array, "-", "feeupper");

        this.pushToArray(this.state.AcceptanceLower, "acceptance_rate", array, "+", "acceptlower");

        this.pushToArray(this.state.AcceptanceUpper, "acceptance_rate", array, "-", "acceptupper");
        
        this.pushToArray(this.state.RankingLower, "national_ranking", array, "+", "nationallower");

        this.pushToArray(this.state.RankingUpper, "national_ranking", array, "-", "nationalupper");

        this.pushToArray(this.state.PopulationLower, "population", array, "+", "populationlower");

        this.pushToArray(this.state.PopulationUpper, "population", array, "-", "populationupper");

        if (this.state.TuitionLower !== null && this.state.TuitionLower !== null) {
            if (this.state.TuitionState === "tuition_normal") {
                if (this.state.TuitionLower !== null && this.state.TuitionLower !== '') {
                    array.push("tuition_normal");
                    array.push("+" + this.state.TuitionLower);
                    sessionStorage.setItem("normallower", this.state.TuitionLower);  
                } else if(this.state.TuitionLower === '') {
                    sessionStorage.setItem("normallower", this.state.TuitionLower);   
                }
        
                if(this.state.TuitionUpper !== null && this.state.TuitionUpper !== '') {
                    array.push("tuition_normal");
                    array.push("-" + this.state.TuitionUpper);
                    sessionStorage.setItem("normalupper", this.state.TuitionUpper); 
                } else if(this.state.TuitionUpper === '') {
                    sessionStorage.setItem("normalupper", this.state.TuitionUpper);  
                }

            } else {
                if (this.state.TuitionLower !== null && this.state.TuitionLower !== '') {
                    array.push("tuition_oos");
                    array.push("+" + this.state.TuitionLower);
                    sessionStorage.setItem("normallower", this.state.TuitionLower);  
                } else if(this.state.TuitionLower === '') {
                    sessionStorage.setItem("normallower", this.state.TuitionLower);   
                }
        
                if(this.state.TuitionUpper !== null && this.state.TuitionUpper !== '') {
                    array.push("tuition_oos");
                    array.push("-" + this.state.TuitionUpper);
                    sessionStorage.setItem("normalupper", this.state.TuitionUpper); 
                } else if(this.state.TuitionUpper === '') {
                    sessionStorage.setItem("normalupper", this.state.TuitionUpper);  
                }
            }
        }

        console.log(this.state.App);
        if (this.state.App.value !== 'Any') {
            if(this.state.App.value === 'commonapp') {
                array.push("common_app");
                array.push("y");
            } else {
                array.push("coalition_app");
                array.push("y");  
            }
        }

        if (this.state.School.value !== 'Any') {
            array.push("school_type");
            array.push(this.state.School.value);
        }

        if (this.state.LOR.value !== 'Any') {
            array.push("letter_of_rec_required");
            array.push(this.state.LOR.value);
        }

        if (this.state.StateFilter.length !== 0) {
            console.log(this.state.StateFilter);
            this.state.StateFilter.forEach(state => {
            array.push("state")
            array.push(state);
            })
        }

        console.log(array);
        sessionStorage.setItem("array", array);
        fetch("/filter", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Array: array,
                Filter: this.state.Filter.value,
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
        this.setState({ Filter: e }, () => {
            this.handleClick();
            sessionStorage.setItem("filterby", [this.state.Filter.value, this.state.Filter.label]);
            console.log(this.state.Filter);
        });
    }

    changeAscent(e) {
        let value = this.state.Ordering === "Low to High" ? "High to Low" : "Low to High";
        this.setState({ Ordering: value }, () => {
            console.log(this.state.Ordering);
            this.handleClick();
        });
        let style = !this.state.Checkbox
        this.setState({ Checkbox: style }, () => {
            console.log(this.state.Checkbox);
        })
    }

    changeTuitionState(e) {
        let value = this.state.TuitionState === "tuition_normal" ? "tuition_oos" : "tuition_normal";
        this.setState({ TuitionState: value });
    }

    handleState(e) {
        const state = this.state;
        state.StateFilter = [];
        e.forEach((option) => {
          state.StateFilter.push(option.label);
        });
        this.setState({StateFilter: state.StateFilter}, console.log(this.state.StateFilter));
    };

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