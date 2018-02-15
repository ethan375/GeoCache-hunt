import React, { Component } from 'react';
import request from 'superagent';

class Login extends Component{
  constructor(){
    super()
    this.state ={
      username: '',
      password: ''
    }
  }

  passwordChange = (e) =>{
    this.setState({password:e.currentTarget.value})
  }

  usernameChange = (e) =>{
    this.setState({username: e.currentTarget.value})
  }

  register = (e) =>{
    this.props.getRegister(true)
  }
  handleSubmit = (e) =>{
    console.log(this.state)
    e.preventDefault()
    request
    .post('http://localhost:9292/users/login')
    .send(this.state)
    .end((err, res) =>{
      console.log(err, res)
    })

  }

  render(){
    return(
      <div>
        <form>
          Username: <br />
          <input type="text" name="username" value={this.state.username} onChange={this.usernameChange}/><br />
          Password: <br />
          <input type="password" name="password" value={this.state.password} onChange={this.passwordChange} /><br />
          <button onClick={this.handleSubmit}>Login</button>
        </form>
        <button onClick={this.register}>Not a user? Click here</button>
      </div>
      )
  }
}
export default Login;