import React, { Component } from 'react';
import '../css/Individual.css';
import UCSDImage from './UCSDLogo.png';
import Grid from '@material-ui/core/Grid';
import Geisel from './UCSDCampus.jpg';
import Heart from '../components/content/Heart';

class Individual extends Component {
    constructor(props){
		super(props);
		this.myRef = React.createRef();
        this.imageRef = React.createRef();
        this.state = {
            college_name: "San Diego State University",
            college_json: []
        }
        this.numFormat = this.numFormat.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    numFormat(num) {
        if(typeof num === 'number'){ 
            return num.toLocaleString();
        }
        else {
            return num;
        }
    }

    dateFormat(input) {
        if(input === -1) {
            return("N/A");
        }
        var myDate = new Date(input * 1000);
        return ((myDate.getUTCMonth() + 1) + "/" + myDate.getUTCDate() + "/" + myDate.getUTCFullYear());
    }

    goBack(){
        this.props.history.goBack();
    }


    componentDidMount(){
        fetch("/individual", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.props.match.params.collegeName
            })
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            let value = JSON.parse(data);
            this.setState({college_json: value})
            console.log(this.state.college_json)
        });
        
      }
    
    renderIndividual = () => {
    
        return (
            <div>
                <img className="Geisel" src={Geisel} />
                <div className = "tint"> 
                </div>
                <div className="image-box">
                    <h1>
                        {this.state.college_json["college_name"]}  
                    </h1>
                </div>
                <div className="circle">
                </div>
                <img className="logo" src={this.state.college_json["college_logo"]} />
                <div className="description-box">
                </div>
                <p className="description-text" >
                    {this.state.college_json["college_description"]}
                </p>
                <div className="essay-text" >
                    <h1 className="essay-header">
                        Essay Questions (4)
                    </h1>
                    <p>
                    1. Describe an example of your leadership experience in which you have positively influenced others, helped resolve disputes or contributed to group efforts over time. (350) 
                    </p>
                    <p>
                    2. Every person has a creative side, and it can be expressed in many ways: problem solving, original and innovative thinking, and artistically, to name a few. Describe how you express your creative side. (350)
                    </p>
                    <p>
                    3. What would you say is your greatest talent or skill? How have you developed and demonstrated that talent over time? (350) 
                    </p>
                    <p>
                    4. Describe how you have taken advantage of a significant educational opportunity or worked to overcome an educational barrier you have faced. (350)
                    </p>
                    <p>
                    5. Describe the most significant challenge you have faced and the steps you have taken to overcome this challenge. How has this challenge affected your academic achievement? (350)
                    </p>
                    <p>
                    6.  Think about an academic subject that inspires you. Describe how you have furthered this interest inside and/or outside of the classroom. (350)
                    </p>
                    <p>
                    7. What have you done to make your school or your community a better place? (350)
                    </p>
                    <p>
                    8. Beyond what has already been shared in your application, what do you believe makes you stand out as a strong candidate for admissions to the University of California? (350)
                    </p>
                </div>
                <div className="application-type" >
                    <h1 className="application-header" >
                        Apply via: 
                    </h1>
                    <p>
                        {this.state.college_json["app_site"]}
                    </p>
                </div>
                <div className = "grid-layout">
                    <Grid container direction="column" spacing={5}>
                        <Grid item className = "general-layout" >
                            <button onClick={this.goBack}>Return</button>
                            <h1 className="general-text">
                                General Info
                            </h1>
                                <p>
                                    Acceptance Rate: {this.state.college_json["acceptance_rate"]}%
                                </p>
                                <p>
                                    US News Ranking: {this.state.college_json["national_ranking"]}
                                </p>
                                <p> 
                                    Undergrad Population: {this.numFormat(this.state.college_json["population"])}
                                </p>
                                <p>
                                    Tuition: ${this.numFormat(this.state.college_json["tuition_normal"])} (In)/ ${this.numFormat(this.state.college_json["tuition_oos"])} (Out)
                                </p>
                                <p>
                                    Application Fee: ${this.state.college_json["app_fee"]}
                                </p>
                                <p>
                                    School: {this.state.college_json["school_type"]}
                                </p>
                        </Grid> 
                        <Grid item className="deadline-layout" >
                            <h1 className="deadline-header">
                                Deadlines
                            </h1>
                            <p>
                                Regular Decision Deadline: {this.dateFormat(this.state.college_json["regular_decision"])}
                            </p>
                            <p>
                                Early Decision Deadline: {this.dateFormat(this.state.college_json["early_decision"])}
                            </p>
                            <p>
                                Early Action Deadline: {this.dateFormat(this.state.college_json["early_action"])}
                            </p>
                            <p>
                                Scholarship Deadline: {this.dateFormat(this.state.college_json["scholarship_date"])}
                            </p>
                        </Grid>
                        <Grid item className="sat-layout">
                            <h1 className="sat-header">
                                Tests and Transcripts
                            </h1>
                            <p>
                                Transcripts: {this.state.college_json["transcripts"]}
                            </p>
                            <p>
                                Mid-Year Report: {this.state.college_json["mid_year"]}
                            </p>
                            <p>
                                Letters of Recommendation Required: {this.state.college_json["letter_of_rec_required"]}
                            </p>
                            <p>
                                SAT/ACT Required: {this.state.college_json["sat"]}
                            </p>
                            <p>
                                SAT/ACT Self-Report: {this.state.college_json["self_report"]}
                            </p>
                            <p>
                                Subject Tests: {this.state.college_json["subject_tests"]}
                            </p>
                        </Grid>                   
                    </Grid>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
             {this.renderIndividual()}
            </div>
        );
    }
}

export default Individual;
