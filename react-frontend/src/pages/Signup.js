import React from 'react';
import '../css/Loginsignup.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: ''
        };
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
    }
     
    handleChangeUser(event) {
        this.setState({ user: event.target.value});
    };

    handleChangePass(event) {
        this.setState({ password: event.target.value});
    };
     
    signup = () => {
        if (this.state.user === '' || this.state.password === '') {
            console.log('empty');
        }
        else {
            console.log(this.state.user);
            console.log(this.state.password);
        }
        console.log('button works');
    };
    
    render() {
        return (
            <div className="Signup">
                <div className="Box">
                    <div className="Log-in">
                        <h1 className="header"> Get Started</h1>
                        <form className="signup-form">
                            <input className="email" type="text" placeholder="Email" 
                            value={this.state.user} onChange={this.handleChangeUser} />
                            <input className="password" type="text" placeholder="Password" 
                            value={this.state.password} onChange={this.handleChangePass} />
                            <button className="signup-button" onClick={this.signup}>SIGNUP</button>
                        </form>
                    </div>
                    <div className="Sign-up"> 
                    </div>
                </div>   
            </div>
        );
    }
  }

  export default Signup;