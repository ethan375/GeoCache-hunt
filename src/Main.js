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
    this.setState({showWhich: 3, viewHunt: id})
  }

  handleView = (e) => {
    this.setState({showWhich: e.currentTarget.id})
  }

  logOut = () => {
    request
      .get('http://localhost:9292/users/logout')
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        else {
          this.props.getUsername('')
        }
      })
  }
  render(){
    let view = null;

    if (this.state.showWhich == 0) {
      view = <LandingPage viewHunt={this.setViewId}/>
    }
    else if (this.state.showWhich == 1) {
      view = <ShowUser viewHunt={this.setViewId}/>
    }
    else if (this.state.showWhich == 2) {
      view = <CreateHunt />
    }
    else if (this.state.showWhich == 3) {
      view = <ShowHunt viewHunt={this.setViewId} huntId={this.state.viewHunt}/>
    }

    return(
      <div className="main-container">
        { view }
        <div className="footer">
          <div id="1" onClick={this.handleView} className="footer-nav">User profile</div>
          <div id="0" onClick={this.handleView} className="footer-nav">Home</div>
          <div id="2" onClick={this.handleView} className="footer-nav">Create hunt</div>
          <div onClick={this.logOut} className="footer-nav">Log out</div>
        </div>
      </div>
    )
  }
}

export default Main;