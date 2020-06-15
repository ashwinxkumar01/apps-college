import React, { Component } from 'react';
import '../css/Tile.css';
import Heart from './content/Heart';

class Node extends Component {    
    render() {
        return (
            <div className="tile-layout">
                <div className="college-name">
                    <h1>{this.props.Alias}</h1>
                </div>
                <div className="favorite-icon">
                    <Heart />
                </div>
                <div className="college-icon">
                        <img src={this.props.Logo} alt="Logo" height="150" width="70%" />
                </div>

                <div className="specifications">
                    <div className="tuition-display">
                        <h3>(In State): ${this.props.Tuition}</h3>
                        <span></span>
                        <h3>(Out of State): ${this.props.TuitionOOS}</h3>
                    </div>
                    
                    <div className="information-div">
                        <h3>Acceptance Rate: {this.props.Acceptance}%</h3>
                        <h3>School Type: {this.props.Type}</h3>
                        <h3>App Fee: ${this.props.Fee}</h3>
                    </div>

                </div>

            </div>
       )
    }
}

export default Node;