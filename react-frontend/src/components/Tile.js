import React, { Component } from 'react';
import '../css/Tile.css';
import Image from '../pages/UCSD_2.jpg';

class Node extends Component {
    render() {
        return (
            <div className="tile-layout">
                <div className="college-name">
                    <h1>Ashwin is a loser</h1>
                </div>

                <div className="element-display">
                    <div className="specifications">
                        <h3>Tuition: $30,542</h3>
                        <h3>Acceptance Rate: 20%</h3>
                        <h3>School Type: Private</h3>
                        <h3>App Fee: $3000</h3>
                    </div>

                    <div className="college-icon">
                        <img src="https://seeklogo.com/images/U/university-of-california-berkeley-athletic-logo-815CB73082-seeklogo.com.png" alt="Logo" height="150" width="100%" />
                    </div>
                </div>             
            </div>
       )
    }
}

export default Node;