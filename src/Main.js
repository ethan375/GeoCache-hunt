import React, { Component } from 'react';
import LandingPage from './LandingPage'
import request from 'superagent';

class Main extends Component{
  constructor(){
    super()
    this.state ={

    }
  }


  render(){
    return(
      <LandingPage />
      )
  }
}

export default Main;