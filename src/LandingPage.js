import React, { Component } from 'react';
import request from 'superagent';

class LandingPage extends Component{
  constructor(){
    super()
    this.state ={
      allHunts: []
    }
  }

  componentDidMount(){
    request
      .get('http://localhost:9292/hunts')
      .end((err, res)=>{
        if (err) {
          console.log(err)
        }
        else {
          const parsedHunts = JSON.parse(res.text)
          // console.log(parsedHunts)
          this.setState({allHunts: [...parsedHunts.sorted_closest]})
        }
      })
  }

  handleView = (e) => {

    this.props.viewHunt(e.currentTarget.id)
  }

  render(){
    const displayHunts = this.state.allHunts.map((item, i)=>{
      return <div onClick={this.handleView} className="landing-hunts" id={item.id} key={i}>{item.title}</div>
    })
    return(
      <div className="landing-page">
        <h2>Hunts near you:</h2>
        <div className="landing-container">
          {displayHunts}
        </div>
      </div>
      )
  }
}

export default LandingPage;