import React from "react";
import '../css/Explore.css';
import { Popover, OverlayTrigger, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/content/Navbar';
import Image3 from './UCSD_3.jpg';
import Tile from '../components/Tile';
import Heart from '../components/content/Heart';
import { States, Type, App, Sortby, LOR, TuitionState } from '../components/State';
import { Tuition, Rankings, AcceptanceRate, AppFee, Population, AppType, LetterRec, SchoolType, StateList, TuitionStateList } from '../components/Popovers';
import Select from 'react-select';
import { faInfoCircleCircle, faInfoCircle, faSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBar: false,
            College: [],
            School: [],
            App: [],
            LOR: [],
            Filter: Sortby[0],
            Checkbox: false,
            AppFeeLower: null,
            AppFeeUpper: null,
            AcceptanceLower: null,
            AcceptanceUpper: null,
            PopulationLower: null,
            PopulationUpper: null,
            TuitionLower: null,
            TuitionUpper: null,
            RankingLower: null,
            RankingUpper: null,
            Ordering: "Low to High",
            TuitionState: [],
            StateFilter: [],
            CheckedState: false,
            Loading: true
        };

        this.setSearch = this.setSearch.bind(this);
        this.renderHeart = this.renderHeart.bind(this);
        this.searchBarInUse = this.searchBarInUse.bind(this);
        this.renderExplore = this.renderExplore.bind(this);

        //Handle the click for the submit button
        this.handleClick = this.handleClick.bind(this);
        //Handle the filter by dropdown 
        this.handleFilter = this.handleFilter.bind(this);
        //Handles the text inside the button
        this.changeAscent = this.changeAscent.bind(this);
        //Handles the State array
        this.handleState = this.handleState.bind(this);
        //Clears the filters on the page
        this.clearFilter = this.clearFilter.bind(this);
        //Handle the enter key when pressed
        this.enterKey = this.enterKey.bind(this);
        //Renders the results, if any
        this.displayResults = this.displayResults.bind(this);
        
        this.numFormat = this.numFormat.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
        this.pushToArray = this.pushToArray.bind(this);
        this.splitToArray = this.splitToArray.bind(this);

        this.renderHeart = this.renderHeart.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({ isTrue: true});
        let savedArray = sessionStorage.getItem("array");
        let copyArray = [];

        if (savedArray === null || savedArray === undefined) {
            //do nothing
        } else {
            copyArray = savedArray.split(",");
        }

        const filterBy = sessionStorage.getItem("filterby");
        let indices = 0;
        if(filterBy !== null) {
           const index = this.splitToArray(filterBy, Sortby);
           indices = index;
           this.setState({ Filter: Sortby[index] });
        }

        if (copyArray[0] === "") {
            copyArray = [];
        }

        const ordering = sessionStorage.getItem("ordering");
        let checkTemp = false;
        if(ordering !== null) {
            this.setState({Ordering: ordering});
            const checked = sessionStorage.getItem("checked");
            if (checked !== null) {
                let isChecked = checked === 'true';
                checkTemp = isChecked;
                this.setState({Checkbox: isChecked});
            }
        }

        fetch("/filter", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Array: copyArray,
                Filter: Sortby[indices].value,
                IsDescending: checkTemp
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            this.setState({
                College: data,
                Loading: false
            })
        });

        const appFee = sessionStorage.getItem("feelower");
        this.setState({ AppFeeLower: appFee});

        const appFeeUpper = sessionStorage.getItem("feeupper");
        this.setState({ AppFeeUpper: appFeeUpper});

        const acceptLower = sessionStorage.getItem("acceptlower");
        this.setState({ AcceptanceLower: acceptLower });

        const acceptUpper = sessionStorage.getItem("acceptupper");
        this.setState({ AcceptanceUpper: acceptUpper });

        const populationLower = sessionStorage.getItem("populationlower");
        this.setState({ PopulationLower: populationLower });

        const populationUpper = sessionStorage.getItem("populationupper");
        this.setState({ PopulationUpper: populationUpper });

        const nationalLower = sessionStorage.getItem("nationallower");
        this.setState({ RankingLower: nationalLower });

        const nationalUpper = sessionStorage.getItem("nationalupper");
        this.setState({ RankingUpper: nationalUpper });

        const checkedState = sessionStorage.getItem("checkedstate");
        if (checkedState !== null) {
            this.setState({CheckedState: checkedState});
        }

        const tuitionState = sessionStorage.getItem("tuitionstate");
        if (tuitionState !== null) {
            const index = this.splitToArray(tuitionState, TuitionState);
            this.setState({ TuitionState: TuitionState[index]});
        }

        const tuitionLower = sessionStorage.getItem("normallower");
        this.setState({ TuitionLower: tuitionLower });

        const tuitionUpper = sessionStorage.getItem("normalupper");
        this.setState({ TuitionUpper: tuitionUpper });

        const appType = sessionStorage.getItem("appfee");
        if (appType !== null) {
            const index = this.splitToArray(appType, App);
            this.setState({ App: App[index]});
        }

        const letterRec = sessionStorage.getItem("letterrec");
        if (letterRec !== null) {
            const index = this.splitToArray(letterRec, LOR);
            this.setState({ LOR: LOR[index]});
        }

        const schoolType = sessionStorage.getItem("schooltype");
        if (schoolType !== null) {
            const index = this.splitToArray(schoolType, Type);
            this.setState({ School: Type[index] });
        }

        const stateFilter = sessionStorage.getItem("statefilter");
        if (stateFilter !== null) {
            let newArray = [];
            if(stateFilter === "" || stateFilter.length === 0) {
                newArray = []
            } else {
                let splitArray = stateFilter.split(",");
                for (let i = 0; i < splitArray.length; i++) {
                let obj = {
                    value: splitArray[i],
                    label: splitArray[i]
                }
                newArray.push(obj);
            }
            }
            
            this.setState({ StateFilter: newArray});
        }
    }


    renderHeart(collegeName) {
        return (
            <Heart collegeName={collegeName} key={collegeName} />
        )
    }

    splitToArray(type, compare) {
        let spliceApp = type.split(",");
        let appTypeObj = 0;
        for (let i = 0; i < compare.length; i++) {
            let getValue = spliceApp[0];
            if (!isNaN(parseFloat(getValue))) {
                getValue = Number.parseFloat(getValue);
            }

            if (getValue === compare[i].value) {
                console.log(i);
                appTypeObj = i;
            }
        }
        return appTypeObj;
    }

    searchBarInUse = (inUse) => {
        if (inUse !== this.state.searchBar) {
            this.setState({ searchBar: inUse });
        }
    }

    displayResults() {
        if(this.state.Loading) {
            return (
                <div className="spinner-center">
                    <div className="spinner-div">
                        <Spinner animation="border" variant="secondary" role="status" className="load-spinner">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                </div>

            )   
        } else if(this.state.College.length !== 0) {
            return (
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
                    })}
                    <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks And I hate him"} Acceptance={"10"} Fee={"20000"} Type={"Private"} Logo={Image3} /></li>
                        <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"10"} Fee={"23000"} Type={"Private"} Logo={Image3} /></li>
                        <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"20"} Fee={"26000"} Type={"Private"} Logo={Image3} /></li>
                        <li> <Tile Tuition={"10000"} TuitionOOS={"10000"} Alias={"Ashwin sucks"} Acceptance={"30"} Fee={"29000"} Type={"Private"} Logo={Image3} /></li>
                </ul>
            )
        } else {
            return (
                <div className="results-div">
                    <div className="icon-results"><FontAwesomeIcon icon={faSadTear}/></div>
                    <h1>No results found...</h1>
                </div>
            )
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
                                <input onChange={(e) => this.setState({ PopulationLower: e.target.value }, () => console.log(this.state.PopulationLower))} type="text" placeholder="Lower" size="100"
                                    value={this.state.PopulationLower} onKeyDown={this.enterKey}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ PopulationUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.PopulationUpper} onKeyDown={this.enterKey}
                                ></input>
                            </form>
                            <OverlayTrigger trigger="click" placement="right" overlay={Population} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} style={{opacity: '60%'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Acceptance</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({ AcceptanceLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.AcceptanceLower} onKeyDown={this.enterKey}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ AcceptanceUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.AcceptanceUpper} onKeyDown={this.enterKey}
                                ></input>
                            </form>
                            <OverlayTrigger trigger="click" placement="right" overlay={AcceptanceRate} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} style={{opacity: '60%'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">App fee</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({ AppFeeLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.AppFeeLower} onKeyDown={this.enterKey}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ AppFeeUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.AppFeeUpper} onKeyDown={this.enterKey}
                                ></input>
                            </form>
                            <OverlayTrigger trigger="click" placement="right" overlay={AppFee} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} style={{opacity: '60%'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Ranking</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({ RankingLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.RankingLower} onKeyDown={this.enterKey}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ RankingUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.RankingUpper} onKeyDown={this.enterKey}
                                ></input>
                            </form>
                            <OverlayTrigger trigger="click" placement="right" overlay={Rankings} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} style={{opacity: '60%'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="tuition">
                            <div className="header">Tuition</div>
                            <form className="filter-form">
                                <input onChange={(e) => this.setState({ TuitionLower: e.target.value })} type="text" placeholder="Lower" size="100"
                                    value={this.state.TuitionLower} onKeyDown={this.enterKey}
                                ></input>
                                <span>-</span>
                                <input onChange={(e) => this.setState({ TuitionUpper: e.target.value })} type="text" placeholder="Upper" size="100"
                                    value={this.state.TuitionUpper} onKeyDown={this.enterKey}
                                ></input>
                            </form>
                            <OverlayTrigger trigger="click" placement="right" overlay={Tuition} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} style={{opacity: '60%'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="app-type">
                            <div className="dropdown-div">
                                <Select onChange={(e) => {this.setState({ TuitionState: e }, () => {
                                    this.handleClick();
                                    console.log(this.state.TuitionState);
                                }
                                )}} 
                                options={TuitionState} placeholder={"Tuition Type"} value={this.state.TuitionState}
                            />
                            </div>
                            <OverlayTrigger trigger="click" placement="right" overlay={TuitionStateList} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} 
                                    style={{opacity: '60%', marginLeft: 'calc(0.5rem)', marginTop: 'calc(0.6rem)'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="app-type">
                            <div className="dropdown-div">
                                <Select onChange={(e) => {this.setState({ App: e }, () => {
                                    sessionStorage.setItem("appfee", [this.state.App.value, this.state.App.label]);
                                    this.handleClick();
                                }
                                )}} 
                                options={App} placeholder={"Application type"} value={this.state.App}
                            />
                            </div>
                            <OverlayTrigger trigger="click" placement="right" overlay={AppType} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} 
                                    style={{opacity: '60%', marginLeft: 'calc(0.5rem)', marginTop: 'calc(0.6rem)'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="app-type">
                            <div className="dropdown-div">
                                <Select onChange={(e) => this.setState({ LOR: e }, () => {
                                    sessionStorage.setItem("letterrec", [this.state.LOR.value, this.state.LOR.label]);
                                    this.handleClick();
                                })}
                                    options={LOR} placeholder={"Letters of Rec."} value={this.state.LOR} 
                                    />
                            </div>
                            <OverlayTrigger trigger="click" placement="right" overlay={LetterRec} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} 
                                style={{opacity: '60%', marginLeft: 'calc(0.5rem)', marginTop: 'calc(0.6rem)'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="school-type">
                            <div className="dropdown-div">
                                <Select onChange={(e) => this.setState({ School: e }, () => {
                                    sessionStorage.setItem("schooltype", [this.state.School.value, this.state.School.label]);
                                    this.handleClick();
                                })}
                                    options={Type} placeholder={"School Type"} value={this.state.School} 
                                    />
                            </div>
                            <OverlayTrigger trigger="click" placement="right" overlay={SchoolType} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} 
                                style={{opacity: '60%', marginLeft: 'calc(0.5rem)', marginTop: 'calc(0.6rem)'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="school-type">
                            <div className="dropdown-div">
                                <Select
                                    placeholder="State(s)"
                                    onChange={this.handleState}
                                    isMulti
                                    options={States}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    value={this.state.StateFilter}
                                />
                            </div>
                            <OverlayTrigger trigger="click" placement="right" overlay={StateList} rootClose>
                                <div><FontAwesomeIcon icon={faInfoCircle} 
                                style={{opacity: '60%', marginLeft: 'calc(0.5rem)', marginTop: 'calc(0.6rem)'}}/></div>
                            </OverlayTrigger>
                        </div>

                        <hr></hr>

                        <div className="filter-button-div">
                            <button onClick={this.handleClick} className="filter-button">Apply</button>
                        </div>
                    </div>

                    <div className="content-display">                        
                        <div className="topbar-info">
                            <div className="filter-clear">
                                <button onClick={this.clearFilter}>CLEAR FILTERS</button>
                            </div>

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
                        </div>

                        {this.displayResults()}
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
                                <div className="collegeName">
                                    {college}
                                </div>
                            </div>
                        </Link>
                        <div className="height">
                            <div style={{ marginTop: "calc(-1.5vh)" }}>
                                {this.renderHeart(college)}
                            </div>
                        </div>
                    </div>
                )
                )
            )
        }
    }

    clearFilter(e) {
        console.log("here");
        this.setState({
            searchBar: false,
            College: [],
            School: [],
            App: [],
            LOR: [],
            Filter: Sortby[0],
            Checkbox: false,
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
            TuitionState: [],
            StateFilter: [],
            CheckedState: false,
            Loading: true
        }, () => this.handleClick())
    }

    renderHeart(collegeName){
        return(
          <Heart collegeName={collegeName} key={collegeName}/>
        )
      }

    setSearch = (results) => {
        if (results !== this.state.resultsFromSearch) {
            this.setState({
                resultsFromSearch: results
            })
        }
    }

    numFormat(num) {
        if (num === null) {
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
            sessionStorage.setItem(storage, '');
        } else if (/^\d+$/.test(state)) {
            array.push(string);
            array.push(sign + state);
            sessionStorage.setItem(storage, state);
        } else {
            array.push(string);
            array.push("--1000");
        }
    }

    pushToArrayDouble(state, string, array, sign, storage) {
        if (state === null || state === '') {
            //Nothing happens
            sessionStorage.setItem(storage, '');
        } else if (/\d+|(\d*.)\d+/.test(state)) {
            array.push(string);
            array.push(sign + state);
            sessionStorage.setItem(storage, state);
        } else {
            array.push(string);
            array.push("--1000");
        }
    }


    enterKey(e) {
        console.log(e.key);
        if(e.key === 'Enter') {
            this.handleClick();
        }

        // if(e.keyCode === 69 && e.keyCode === 190 && e.keyCode === 189) {
        //     e.preventDefault();

        // }
    }

    handleClick() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        let array = [];

        this.pushToArray(this.state.AppFeeLower, "app_fee", array, "+", "feelower");

        this.pushToArray(this.state.AppFeeUpper, "app_fee", array, "-", "feeupper");

        this.pushToArrayDouble(this.state.AcceptanceLower, "acceptance_rate", array, "+", "acceptlower");

        this.pushToArrayDouble(this.state.AcceptanceUpper, "acceptance_rate", array, "-", "acceptupper");

        this.pushToArray(this.state.RankingLower, "national_ranking", array, "+", "nationallower");

        this.pushToArray(this.state.RankingUpper, "national_ranking", array, "-", "nationalupper");

        this.pushToArray(this.state.PopulationLower, "population", array, "+", "populationlower");

        this.pushToArray(this.state.PopulationUpper, "population", array, "-", "populationupper");

        if (this.state.TuitionState.value === "tuition_normal") {
            console.log("in state")
            this.pushToArray(this.state.TuitionLower, "tuition_normal", array, "+", "normallower");

            this.pushToArray(this.state.TuitionUpper, "tuition_normal", array, "-", "normalupper");
        } else if (this.state.TuitionState.value === "tuition_oos") {
            console.log("oos");
            this.pushToArray(this.state.TuitionLower, "tuition_oos", array, "+", "normallower");

            this.pushToArray(this.state.TuitionUpper, "tuition_oos", array, "-", "normalupper");
        } else {
            console.log("both")
            this.pushToArray(this.state.TuitionLower, "tuition_oos", array, "+", "normallower");

            this.pushToArray(this.state.TuitionUpper, "tuition_oos", array, "-", "normalupper");

            this.pushToArray(this.state.TuitionLower, "tuition_normal", array, "+", "normallower");

            this.pushToArray(this.state.TuitionUpper, "tuition_normal", array, "-", "normalupper");   
        }

        if (this.state.App.value !== 'Any' && this.state.App.length !== 0) {
            if(this.state.App.value === 'commonapp') {
                array.push("common_app");
                array.push("y");
            } else {
                array.push("coalition_app");
                array.push("y");
            }
        }

        if (this.state.School.value !== 'Any' && this.state.School.length !== 0) {
            array.push("school_type");
            array.push(this.state.School.value);
        }

        if (this.state.LOR.value !== 'Any' && this.state.LOR.length !== 0) {
            console.log("here");
            array.push("letter_of_rec_required");
            array.push("-" + this.state.LOR.value);
            console.log(array);
        }

        if (this.state.StateFilter.value !== 'Any' && this.state.StateFilter.length !== 0) {
            this.state.StateFilter.forEach(state => {
                array.push("state")
                array.push(state.value);
            })
        }

        sessionStorage.setItem("filterby", [this.state.Filter.value, this.state.Filter.label]);
        sessionStorage.setItem("ordering", this.state.Ordering);
        sessionStorage.setItem("checked", this.state.Checkbox);
        sessionStorage.setItem("tuitionstate", [this.state.TuitionState.value, this.state.TuitionState.label]);

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
                College: data,
                Loading: false
            })
        });
    }
    handleFilter(e) {
        this.setState({ Filter: e }, () => {
            this.handleClick();
        });
    }

    changeAscent(e) {
        let value = this.state.Ordering === "Low to High" ? "High to Low" : "Low to High";
        this.setState({ Ordering: value }, () => {
            this.handleClick();
        });
        let style = !this.state.Checkbox
        this.setState({ Checkbox: style });
    }

    handleState(e) {
        const state = this.state;
        state.StateFilter = [];
        console.log(e);
        
        if(e === null) {
            state.stateFilter = [];
        } else {
            e.forEach((option) => {
                console.log(option);
                state.StateFilter.push(option);
            });
        }
        this.setState({ StateFilter: state.StateFilter }, () => {
            let array = [];
            this.state.StateFilter.forEach(state => {
                array.push(state.value);
            })
            sessionStorage.setItem("statefilter", array);
            this.handleClick();
        });
    };

    render() {
        return (
            <div className="Explore">
                {/* <Navigationbar active="2" /> */}
                <NavBar searchBarInUse={this.searchBarInUse} setSearch={this.setSearch} active="2"/>
                {this.renderExplore(this.state.College)}
            </div>
        );
    }
}

export default Explore;