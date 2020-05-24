import React from 'react';
import { Button, Form, FormControl } from "react-bootstrap";
import '../../App.css';
import Stack from './Stack';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
        };
        this.allResults = new Stack(this.props.list);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            searchResults: this.props.list
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            searchResults: nextProps.list
        });
    }

    handleChange(e) {
        let currentResults = [];
        let filteredResults = [];
        let perfectMatches = [];
        let semiMatches = [];
        if (e.target.value !== "") {
            currentResults = this.props.list;
            currentResults.map(collegeNames => {
                var alreadyExists = false;
                collegeNames.map(college => {
                    if(alreadyExists){
                        return;
                    }
                    const collegeName = college.toLowerCase();
                    const typedIn = e.target.value.toLowerCase();
                    var matchPerfect = true;
                    var i;
                    var j;
                    for (let i = 0; i < typedIn.length; i++) {
                        if (typedIn.substring(i, i + 1) != collegeName.substring(i, i + 1)) {
                            matchPerfect = false;
                            break;
                        }
                    }
                    if (matchPerfect) {
                        alreadyExists = true;
                        perfectMatches.push(collegeNames[0]);
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
                            }
                        }
                        if (!partMatch) {
                            return;
                        }
                    }
                    for (i = 0; i < collegeNameSplit.length; i++) {
                        var partMatch = true;
                        for (j = 0; j < typedInSplit[typedInSplit.length - 1].length; j++) {
                            if (typedIn.substring(j, j + 1) != collegeNameSplit[i].substring(j, j + 1)) {
                                partMatch = false;
                                break;
                            }
                        }
                        if (partMatch) {
                            semiMatches.push(collegeNames[0]);
                            alreadyExists = true;
                            return;
                        }
                    }
                })
            })
        } else {
            let blankResults = [];
            filteredResults = blankResults;
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
        console.log(perfectMatches);
        // console.log(semiMatches);
        console.log(filteredResults);
        this.setState({
            searchResults: filteredResults,
            allResults: this.allResults.push(filteredResults)
        });
    }

    render() {
        const divStyle = {
            width: '200px;'
        }
        return (
            <Form inline className="ml-5 w-100">
                <Form.Control type="text" onInput={this.handleChange} placeholder="Search" className="mr-0 w-75" style={divStyle} />
                {this.state.searchResults.map((college => (
                    <li>{college}</li>
                )
                ))
                }
                <Button variant="outline-success" className="mr-0 w-0">Search</Button>
            </Form>
        )
    }
}

export default SearchBar;