import React, { Component } from 'react';
import LandingPage from './LandingPage';
import ShowHunt from './ShowHunt';
import request from 'superagent';
import ShowUser from './ShowUser';
import CreateHunt from './CreateHunt'

class Main extends Component{
  constructor(){
    super()
    this.state ={
      showWhich: 0,
      viewHunt: null
    }
  }

  setViewId = (id) => {
    this.setState({viewHunt: id})
  }
  render(){
    let view = null;

    if (this.state.showWhich == 0) {
      view = <LandingPage viewHunt={this.setViewId}/>
    }
    else if (this.state.showWhich == 1) {
      view = <ShowHunt viewHunt={this.setViewId} huntId={this.state.viewHunt}/>
    }
    else if (this.state.showWhich == 2) {
      view = <CreateHunt />
    }
    else if (this.state.showWhich == 3) {
      view = <ShowUser />
    }

    return(
      <div className="main-container">
        { view }
        <div className="footer">
          <div className="footer-nav">User profile</div>
          <div className="footer-nav">Create hunt</div>
        </div>
      </div>
    )
  }
}

export default Main;