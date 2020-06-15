import React from 'react';
import '../../css/Heart.css';

class Heart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            currentCollege: this.props.collegeName
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.state.status === true) {
            console.log(this.state.currentCollege);
        }
        if (this.state.status === true) {
            this.setState({ status: false });
        } else {
            this.setState({ status: true });
        }
    }

    render() {
        if (this.state.status === true) {
            return (
                <div className="redheart" onClick={this.handleClick} />
            )
        } else {
            return (
                <div className="heart" onClick={this.handleClick} />
            )
        }
    }
}

export default Heart