import React from 'react';
import { Button, Form } from "react-bootstrap";
import '../../App.css';
import '../../css/SearchBar.css';
import { Link } from 'react-router-dom';
import Heart from './Heart';
import Imaged from '../../pages/UCSDLogo.png';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            searchResults: []
        });
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
            searchResults: filteredResults
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
        return (
            <Form className="ml-5 w-75" style={searchBar}>
                <Form.Control type="text" onInput={this.handleChange} placeholder="Search for colleges" className="mr-0 w-75" style={divStyle} />
                <div>
                    {this.state.searchResults.map(collegeArray => {
                        var college = collegeArray[0];
                        return (
                            <Link to={`/loginhome/page/${college}`} className="individual">
                                <div>
                                    <div className="circle">
                                    </div>
                                    <img className="logo" src={collegeArray[1]} alt="Hello" />
                                </div>
                                <div className="collegeName">
                                    {college}
                                </div>
                                <Heart className="heart" collegeName={college} key={college} />
                            </Link>
                        )
                    })}
                </div>
            </Form>
        )
    }
}

export default SearchBar;