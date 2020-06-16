import React, { Component } from 'react';
import '../css/Individual.css';
import UCSDImage from './UCSDLogo.png';
import Grid from '@material-ui/core/Grid';
import Geisel from './UCSDCampus.jpg';

class Individual extends Component {
    constructor(props){
		super(props);
		this.myRef = React.createRef();
        this.imageRef = React.createRef();
    }
    render() {
        return (
            <div>
                <img className="Geisel" src={Geisel} />
                <div className = "tint"> 
                </div>
                <div className="description-box">
                </div>
                <p className="description-text" >
                The University of California, San Diego (UC San Diego or, colloquially, UCSD) is a public research university in San Diego, California. Established in 1960 near the pre-existing Scripps Institution of Oceanography, UC San Diego is the seventh-oldest of the 10 University of California campuses and offers over 200 undergraduate and graduate degree programs, enrolling approximately 30,800 undergraduate and 8,000 graduate students. The university occupies 2,141 acres (866 ha) near the coast of the Pacific Ocean, with the main campus resting on approximately 1,152 acres (466 ha).
                </p>
                <h1 className="UCSD" >
                    University of California, San Diego
                </h1>
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
                <div className = "grid-layout">
                    <Grid container direction="column" spacing={5}>
                        <Grid item className="crest-layout">
                            <h1 className="return"> Return </h1>
                            <img className = "UCSDImage" src = {UCSDImage}/>
                        </Grid>
                        <Grid item className = "general-layout" >
                            <h1 className="general-text">
                                General Info
                            </h1>
                        </Grid>                    
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Individual;
