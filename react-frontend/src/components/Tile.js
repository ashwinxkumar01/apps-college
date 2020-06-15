import React, { Component } from 'react';
import '../css/Tile.css';

class Node extends Component {    
    render() {
        return (
            <div className="tile-layout">
                <div className="college-name">
                    <h1>{this.props.Alias}</h1>
                </div>

                <div className="element-display">
                    <div className="specifications">
                        <h3>Tuition (In State): ${this.props.Tuition}</h3>
                        <h3>Tuition (Out of State): ${this.props.TuitionOOS}</h3>
                        <h3>Acceptance Rate: {this.props.Acceptance}%</h3>
                        <h3>School Type: {this.props.Type}</h3>
                        <h3>App Fee: ${this.props.Fee}</h3>
                    </div>

                    <div className="college-icon">
                        <img src={this.props.Logo} alt="Logo" height="150" width="100%" />
                    </div>
                </div>
            </div>
       )
    }
}

export default Node;