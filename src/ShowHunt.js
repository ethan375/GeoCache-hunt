import React, { Component } from 'react';
import LandingPage from './LandingPage'
import request from 'superagent';

class ShowHunt extends Component{
  constructor(props){
    super(props)

    this.state ={
      id: this.props.huntId,
      hunt: '',
      creator: '',
      buttonText: "Start this hunt",
      play: false
    }
  }

  componentDidMount() {
    request
      .get('http://localhost:9292/hunts/'+this.state.id+'/view')
      .type('form')
      .end((err, res) =>{
        const parsed = JSON.parse(res.text)
        if (err) {
          console.log(err)
        }
        else {
          this.setState({hunt: parsed.hunt, creator: parsed.creator})
        }
      })
  }

  startHunt = () => {
    const startStop = !this.state.play
    const button = startStop ? "Pause this hunt" : "Start this hunt"

    this.setState({play: startStop, buttonText: button})
  }

  handleView = (e) => {
    e.preventDefault()

    this.props.viewHunt(null)
  }

  render(){

    const title = this.state.hunt.title
    const description = this.state.hunt.description
    const date = this.state.hunt.creation_date
    const creator = this.state.creator.username
    const button = this.state.buttonText

    return(
      <div className="show-hunt-container">
        <div className="show-hunt-header">
          <span className="show-hunt-title"> { title } </span> <span> created by: { creator } on { date }</span>
        </div>
        <div className="show-hunt-description"> { description } </div>
        <div className="show-hunt-map"> THIS IS WHERE THE MAP GOES </div>
        <button onClick={this.startHunt}>{ button }</button>
      </div>
    )
  }
}

export default ShowHunt;