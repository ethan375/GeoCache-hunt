import React, { Component } from 'react';
import request from 'superagent';

class LandingPage extends Component{
  constructor(){
    super()
    this.state ={
      allHunts: []
    }
  }

  ComponentDidMount(){
    request
    .get('http://localhost:9292/hunts')
    .end((err, res)=>{
      console.log(err, res)
      const parsedHunts = JSON.parse(res.text)
      console.log(parsedHunts, res.text)
      this.setState({allHunts: [...parsedHunts]})
    })
  }

  render(){
    const displayHunts = this.state.allHunts.map((item, i)=>{
      return <li key={i}>{item}</li>
    })
    return(
      <div>
        <ul>
          {displayHunts}
        </ul>
        <footer>
        </footer>
      </div>
      )
  }
}

export default LandingPage;