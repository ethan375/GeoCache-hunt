import React, { Component } from 'react';
import request from 'superagent';

class ShowUser extends Component{
  constructor(){
    super()
    this.state ={
      username: '',
      email: '',
      created: '',
      userHunts: []
    }
  }

  componentDidMount() {
    request
      .get('http://localhost:9292/users/profile')
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        else {
          const parsed = JSON.parse(res.text)
          this.setState({username: parsed.user.username, email: parsed.user.email, created: parsed.user.creation_date, userHunts: [...parsed.hunts]})
        }
      }) 
  }

  handleView = (e) => {

    this.props.viewHunt(e.currentTarget.id)
  }
  render(){

    const username = this.state.username
    const email = this.state.email
    const created = this.state.created
    const displayHunts = this.state.userHunts.map((item, i)=>{
      return <div onClick={ this.handleView } className="landing-hunts" id={item.id} key={i}>{item.title}</div>
    })

    return(
      <div>
        <h1>{ username }'s profile</h1>
        <div>
          <div>Email: { email }</div>
          <div>Created on: { created }</div>
        </div>
        <div className="user-hunts">
          <h2>Your created hunts</h2>
          <div className="landing-container">
            {displayHunts}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowUser;