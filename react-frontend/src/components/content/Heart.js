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
    
    handleClick (e) {
        if(this.state.status){
            console.log(this.state.currentCollege);
        }
        if(this.state.status){
            this.setState({status: false});
        }else{    
            this.setState({status: true});    
        }
    }

    render() {
        return(
            <div className="heart" onClick={this.handleClick}/>
        )
    }
}

export default Heart