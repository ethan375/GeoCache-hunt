import React, { Component } from 'react';
import request from 'superagent';

class ShowUser extends Component{
  constructor(){
    super()
    this.state ={
      showWhich: 0,
      viewHunt: null
    }
  }

  componentDidMount() {
    request
  }
  render(){

    return(
      <div>
        the user has been shown
      </div>
    )
  }
}

export default ShowUser;