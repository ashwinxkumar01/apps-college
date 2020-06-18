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
            fetch("/removecollege", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    CollegeName: this.state.currentCollege
                })
            }).then(response => {
                return response.json();
            }).then(data => { })
            this.setState({ status: false });
        } else {
            fetch("/addcollege", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    CollegeName: this.state.currentCollege
                })
            }).then(response => {
                return response.json();
            }).then(data => { })
            this.setState({ status: true });
        }
    }

    render() {
        JSON.parse(sessionStorage.getItem("collegeNames")).map(college => {
            console.log(college.college_name);
            console.log(this.state.currentCollege);
            if (college.college_name === this.state.currentCollege) {
                if(this.state.status !== true){
                    this.setState({status: true})
                }
            }
        });

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