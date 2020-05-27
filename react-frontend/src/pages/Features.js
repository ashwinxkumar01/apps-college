import React from 'react';
import '../css/Feature.css';

import Navigationbar from '../components/content/Navigationbar';
import NavBar from '../components/content/Navbar';

class Features extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBar: false
        };
        this.searchBarInUse = this.searchBarInUse.bind(this);
    }

    searchBarInUse = (inUse) => {
        if (inUse != this.state.searchBar) {
            console.log(inUse);
            this.setState({ searchBar: inUse });
        }
    }

    renderFeatures = () => {
        console.log("here");
        if (this.state.searchBar == false) {
            return (
                <div>
                </div>
            )
        }
    }

    render() {
    return (
        <div className="background-feature">
            <Navigationbar active="5"/>
            <NavBar searchBarInUse={this.searchBarInUse}/>
            {this.renderFeatures()} 
        </div>
    );
}
}

export default Features;