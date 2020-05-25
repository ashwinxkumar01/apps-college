import React from "react";
import SideBar from '../components/sidebar/SideBar';
import Content from '../components/content/Content';

class Loginhome extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true,
      activeTab: ''
    };
    this.setActive = this.setActive.bind(this);
    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }
    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    console.log("here");
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }
  // componentWillUpdate(nextProps, nextState){ 
  //   if (nextState.activeTab !== this.state.activeTab){
  //     this.setState({
  //       activeTab: nextState.activeTab
  //     });
  //       console.log(nextState.activeTab + this.state.activeTab);

  //   }
  //   }
  getSnapshotBeforeUpdate(prevProps, prevState){

  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevState.activeTab !== this.state.activeTab){
      this.setState({activeTab: this.state.activeTab});
    }
  }
  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  setActive(childActive){
    this.setState({activeTab: childActive});
  }

  render() {
    return (
      <div className="App wrapper">
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen} setActive={this.setActive} active={this.current}/>
        <div>{this.state.activeTab}</div>
        <Content toggle={this.toggle} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default Loginhome;