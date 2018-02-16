import React, { Component } from 'react';
import request from 'superagent';

class LandingPage extends Component{
  constructor(){
    super()
    this.state ={
      allHunts: [],
      keyword: '',
      whichKeyword: 'hunt title'
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
          console.log(parsedHunts.sorted_closest)
          this.setState({allHunts: [...parsedHunts.sorted_closest]})
        }
      })
  }

  handleChange = (e) => {
    this.setState({keyword: e.currentTarget.value})
  }

  handleView = (e) => {
    if (e.currentTarget.id < 1) {
      return;
    }
    this.props.viewHunt(e.currentTarget.id)
  }

  keywordSearch = (e) => {
    e.preventDefault()
    request
      .post('http://localhost:9292/hunts/search')
      .send({keyword: this.state.keyword})
      .type('form')
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        else {
          const parsed = JSON.parse(res.text)
          if (!parsed.success) {
            this.setState({allHunts: [{id: 0, title: "Sorry, no results found."}]})
          }
          else {
            this.setState({allHunts: [...parsed.results]})
          }
        }
      })
  }

  render(){
    const displayHunts = this.state.allHunts.map((item, i)=>{
      return <div onClick={this.handleView} className="landing-hunts" id={item.id} key={i}>{item.title}</div>
    })

    return(
      <div className="landing-page">
        <form className="search-field">
          <h2>Search for hunts!</h2>
          <input onChange={this.handleChange} value={this.state.keyword} type="text" placeholder="Enter keyword"/>
          <button onClick={this.keywordSearch}>search</button>
        </form>
        <h1>Hunts near you:</h1>
        <div className="landing-container">
          {displayHunts}
        </div>
      </div>
      )
  }
}

export default LandingPage;