import React, { Component } from 'react';
import NavBar from '../components/content/Navbar';
import '../css/Essays.css';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';
import {Common, Coalition } from '../components/Popovers';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Essays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColleges: [],
            numEssays: 0,
        };
        this.requiresUCApp = this.requiresUCApp.bind(this);
        this.requiresCommonApp = this.requiresCommonApp.bind(this);
        this.requiresCoalitionApp = this.requiresCoalitionApp.bind(this);
        this.requiresOnlyCoalition = this.requiresOnlyCoalition.bind(this);
        this.requiresOnlyCommon = this.requiresOnlyCommon.bind(this);
        this.renderFirstHeader = this.renderFirstHeader.bind(this);
        this.renderUC = this.renderUC.bind(this);
        this.renderCommon = this.renderCommon.bind(this);
        this.requiresOnlyCoalition = this.requiresOnlyCoalition.bind(this);
        this.requiresCommonApp = this.requiresOnlyCommon.bind(this);
        this.renderPopup = this.renderPopup.bind(this);
        this.calculateNumEssays = this.calculateNumEssays.bind(this);

    }

    requiresUCApp() {
        var requires = this.state.selectedColleges.some(college => college.app_site === "UC Application");
        console.log("uc app: " +  requires);
        return requires;
    }

    requiresCommonApp() {
        var requires = this.state.selectedColleges.some(college => college.common_app === "y");
        console.log("common app: " + requires);
        return requires;
    }

    requiresCoalitionApp() {
        var requires = this.state.selectedColleges.some(college => college.coalition_app === "y");
        console.log("coalition app: " + requires);
        return requires;
    }

    requiresOnlyCommon() {
        var requires = this.state.selectedColleges.every(college => college.common_app === "y" || college.app_site === "UC Application");
        console.log("only common: " + requires);
        return requires;
    }

    requiresOnlyCoalition() {
        var requires = this.state.selectedColleges.every(college => college.coalition_app === "y" || college.app_site === "UC Application");
        console.log("only coalition: " + requires);
        return requires;
    }

    renderPopup() {
        var onlyCommon = this.requiresOnlyCommon();
        var onlyCoalition = this.requiresOnlyCoalition();

        if(onlyCommon && this.requiresCoalitionApp()) {
            return(
                <OverlayTrigger trigger="click" placement="right" overlay={Common} rootClose>
                    <Button variant="success"><FontAwesomeIcon icon={faInfoCircle} style={{opacity: '60%'}}/></Button>
                </OverlayTrigger>
            )
        }
        else if(onlyCoalition && this.requiresCommonApp()) {
            return(
                <OverlayTrigger trigger="click" placement="right" overlay={Coalition} rootClose>
                    <Button variant="success"><FontAwesomeIcon icon={faInfoCircle} style={{opacity: '60%'}}/></Button>
                </OverlayTrigger>
            )
        }
    }

    calculateNumEssays() {
        var num = 0;

        // first do for general essays
        if(this.requiresUCApp()) {
            num+=4;
        }

        if(this.requiresOnlyCommon()) {
            num++;
        }
        else if(this.requiresOnlyCoalition()) {
            num++;
        }
        else {
            if(this.requiresCommonApp()) {
                num++;
            }

            if(this.requiresCoalitionApp()) {
                num++;
            }
        }

        var json = this.state.selectedColleges;

        
        for(var i = 0 ; i < json.length ; i++) {
            var curr = json[i].supplemental_essays;
            console.log(curr);
            var parsed = parseInt(curr,10);
            if(!isNaN(parsed)) {
                num += parseInt(curr,10);
            }
            console.log(num);
        }
        return num;
    }


    componentDidMount() {
        fetch("/essays", {
            method: "GET",
            header: {
              'Content-Type': 'application/json'
            },
          }).then(response => {
            console.log(response);
            return response.json()
          }).then(data => {
            let collegeList = [];
            data.map(college => {
              var collegeName = JSON.parse(college);
              collegeList.push(collegeName);
            })
            console.log(collegeList);
            this.setState({selectedColleges: collegeList});
            this.setState({numEssays: this.calculateNumEssays()})
            console.log(this.state.selectedColleges);
          });
    }

    renderUC = () => {
        var uc = this.requiresUCApp();
        if(uc) {
            return(
                <div>
                    <div className = "header-div">
                        <h3>UC Application (4 of 8 Required)</h3>
                    </div>
                    <div className="essaytext">
                        <p>1. Describe an example of your leadership experience in which you have positively influenced others, helped resolve disputes or contributed to group efforts over time.</p>
                        <p>2. Every person has a creative side, and it can be expressed in many ways: problem solving, original and innovative thinking, and artistically, to name a few. Describe how you express your creative side.</p>
                        <p>3. What would you say is your greatest talent or skill? How have you developed and demonstrated that talent over time?  </p>
                        <p>4. Describe how you have taken advantage of a significant educational opportunity or worked to overcome an educational barrier you have faced.</p>
                        <p>5. Describe the most significant challenge you have faced and the steps you have taken to overcome this challenge. How has this challenge affected your academic achievement?</p>
                        <p>6. Think about an academic subject that inspires you. Describe how you have furthered this interest inside and/or outside of the classroom.</p>
                        <p>7. What have you done to make your school or your community a better place?</p>
                        <p>8. Beyond what has already been shared in your application, what do you believe makes you stand out as a strong candidate for admissions to the University of California?</p>
                    </div>
                </div>
            )
        }
    }

    renderCommon = () => {
        var common = this.requiresCommonApp();
        if(common) {
            return (
                <div>
                    <div className = "header-div">
                        <h3>Common Application (1 of 7 Required)</h3>
                    </div>

                    <div className="essaytext">
                        <p>1. Some students have a background, identity, interest, or talent so meaningful they believe their application would be incomplete without it. If this sounds like you, please share your story.</p>
                        <p>2. The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?</p>
                        <p>3. Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?</p>
                        <p>4. Describe a problem you’ve solved or a problem you’d like to solve. It can be an intellectual challenge, a research query, an ethical dilemma — anything of personal importance, no matter the scale. Explain its significance to you and what steps you took or could be taken to identify a solution.</p>
                        <p>5. Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.</p>
                        <p>6. Describe a topic, idea, or concept you find so engaging it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?</p>
                        <p>7. Share an essay on any topic of your choice. It can be one you’ve already written, one that responds to a different prompt, or one of your own design.</p>
                    </div>
                </div>
            )
        }
    }

    renderCoalition = () => {
        var coalition = this.requiresCoalitionApp();

        if(coalition) {
            return(
                <div>
                    <div className = "header-div">
                        <h3>Coalition Application (1 of 5 Required)</h3>
                    </div>

                    <div className = "essaytext" >
                        <p>1. Tell a story from your life, describing an experience that either demonstrates your character or helped to shape it.</p>
                        <p>2. Describe a time when you made a meaningful contribution to others in which the greater good was your focus. Discuss the challenges and rewards of making your contribution.</p>
                        <p>3. Has there been a time when you’ve had a long-cherished or accepted belief challenged? How did you respond? How did the challenge affect your beliefs?</p>
                        <p>4. What is the hardest part of being a student now? What’s the best part? What advice would you give a younger sibling or friend (assuming they would listen to you)?</p>
                        <p>5. Submit an essay on a topic of your choice.</p>
                    </div>
                </div>
            )
        }
    }

    renderFirstHeader = () => {
        return (
            <div>
                <div className="title">
                    <h1>Your Essay Summary</h1>
                </div>

                <div className="required">
                    <h3>You have <b>{this.state.numEssays}</b> required prompt(s).</h3>
                </div>

                {this.renderPopup()}

                <div className = "subtitle">
                    <h2>General Essays</h2>
                </div>    
            </div>

        )
    }



    render() {
        return(
            <div>
                <NavBar searchBarInUse={this.searchBarInUse} setSearch={this.setSearch} active="3"/>
                {this.renderFirstHeader()}
                {this.renderUC()}
                {this.renderCommon()}
                {this.renderCoalition()}
                <div className = "subtitle">
                    <h2>Supplemental Essays</h2>
                </div>

                <div className= "header-div" >
                    <h3>Harvard University (1 of 2 Required)</h3>
                </div>

                <div className = "essaytext" >
                    <p>1. Why did you choose Harvard University?</p>
                    <p>2. What can you contribute to our diverse group of students?</p>
                </div>

                <div className= "header-div" >
                    <h3>Cornell University (2 of 2 Required)</h3>
                </div>

                <div className = "essaytext" >
                    <p>1. Why did you choose Cornell University?</p>
                    <p>2. What can you contribute to our diverse group of students?</p>
                </div>

                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}
export default Essays;
