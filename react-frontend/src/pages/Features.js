import React from 'react';
import '../css/Feature.css';

import Navigationbar from '../components/content/Navigationbar';
import NavBar from '../components/content/Navbar';

function Features() {
    return (
        <div className="background-feature">
            <Navigationbar active="5"/>
            <NavBar /> 
        </div>
    );
}

export default Features;