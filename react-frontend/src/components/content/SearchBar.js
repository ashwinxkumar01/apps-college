import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form } from "react-bootstrap";
import '../../App.css';
import {Redirect} from 'react-router';
import '../../css/SearchBar.css';
import { Link } from 'react-router-dom';
import Heart from './Heart';
import Imaged from '../../pages/UCSDLogo.png';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            clickOutside: true,
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        // document.addEventListener('keydown', this.handleClickOutside);
        this.setState({
            searchResults: []
        });
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        // document.removeEventListener('keydown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        const domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(event.target)) {
            console.log("handleCLickOutside");
            this.setState({
                clickOutside: true
            });
            this.props.searchBarInUse(false);
        }
    }

    handleChange(e) {
        let currentResults = [];
        let filteredResults = [];
        let perfectMatches = [];
        let semiMatches = [];
        if (e.target.value !== "") {
            this.props.searchBarInUse(true);
            currentResults = this.props.list;
            currentResults.map(collegeArray => {
                var alreadyExists = false;
                var collegeNames = collegeArray[0];
                collegeNames.map(college => {
                    if (alreadyExists) {
                        return;
                    }
                    const collegeName = college.toLowerCase();
                    const typedIn = e.target.value.toLowerCase();
                    var matchPerfect = true;
                    var i;
                    var j;
                    for (let i = 0; i < typedIn.length; i++) {
                        if (typedIn.substring(i, i + 1) !== collegeName.substring(i, i + 1)) {
                            matchPerfect = false;
                            break;
                        }
                    }
                    if (matchPerfect) {
                        alreadyExists = true;
                        perfectMatches.push([collegeNames[0], collegeArray[1]]);
                        return;
                    }
                    const collegeNameSplit = collegeName.split(' ');
                    const typedInSplit = typedIn.split(' ');
                    for (i = 0; i < typedInSplit.length - 1; i++) {
                        var partMatch = false;
                        for (j = 0; j < collegeNameSplit.length; j++) {
                            if (collegeNameSplit[j] === typedInSplit[i]) {
                                partMatch = true;
                                collegeNameSplit.splice(j, 1);
                                typedInSplit.splice(i, 1);
                                continue;
                            }
                        }
                        if (!partMatch) {
                            return;
                        }
                    }
                    if (typedInSplit.length === 0) {
                        semiMatches.push([collegeNames[0], collegeArray[1]]);
                        alreadyExists = true;
                        return;
                    }
                    for (i = 0; i < collegeNameSplit.length; i++) {
                        var partMatch = true;
                        for (j = 0; j < typedInSplit[typedInSplit.length - 1].length; j++) {
                            if (typedInSplit[typedInSplit.length - 1].substring(j, j + 1) !== collegeNameSplit[i].substring(j, j + 1)) {
                                partMatch = false;
                                break;
                            }
                        }
                        if (partMatch) {
                            semiMatches.push([collegeNames[0], collegeArray[1]]);
                            alreadyExists = true;
                            return;
                        }
                    }
                })
            })
        } else {
            let blankResults = [];
            filteredResults = blankResults;
            this.props.searchBarInUse(false);
        }

        perfectMatches.map((college, i) => {
            if (filteredResults.length >= 10) {
                return;
            }
            filteredResults.push(college);
        })
        semiMatches.map(college => {
            if (filteredResults.length >= 10) {
                return;
            }
            filteredResults.push(college);
        })
        this.setState({
            searchResults: filteredResults,
            clickOutside: false
        });
    }

    render() {
        const divStyle = {
            width: 'calc(50vw)'
        }
        const searchBar = {
            display: 'flex',
            flexDirection: 'column'
        }
        if (this.props.searchBar === this.state.clickOutside) {
            this.setState({ clickOutside: !this.props.searchBar })
        }
        return (
            <Form className="ml-5 w-75" style={searchBar}>
                <Form.Control type="text" onInput={this.handleChange} placeholder="Search for colleges" className="mr-0 w-75" style={divStyle} />
                <div>
                    {this.state.searchResults.map(collegeArray => {
                        if (this.state.clickOutside) {

                        } else {
                            let college = collegeArray[0];
                            if(college.length > 43){
                                college = college.substring(0, 40) + "...";
                            }
                            return (
                                <div className="individual">
                                    <Link to={`/loginhome/page/${college}`}>
                                        <div>
                                            <div className="circle">
                                            </div>
                                            <img className="logo" src={collegeArray[1]} alt="Hello" />
                                        </div>
                                        <div className="collegeName">
                                            {college}
                                        </div>
                                    </Link>
                                    <Heart className="heart" collegeName={college} key={college} />
                                </div>
                            )
                        }
                    })}
                </div>
            </Form>
        )
    }
}

export default SearchBar;