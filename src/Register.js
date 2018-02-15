import React, { Component } from 'react';
import request from 'superagent';

class Register extends Component{
  constructor(){
    super()
    this.state ={
      email: '',
      username: '',
      password: ''
    }
  }

  emailChange = (e) =>{
    this.setState({email:e.currentTarget.value})
  }

  usernameChange =(e) =>{
    this.setState({username:e.currentTarget.value})
  }

  passwordChange = (e) =>{
    this.setState({password:e.currentTarget.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault
   request
   .post('http://localhost:9292/users/register')
   .send(this.state)
   .end((err, res) =>{
    console.log(err, res)
   })
  }


  render(){
    return(
      <form>
        Email: <br />
        <input name="email" type="text" value={this.state.email} onChange={this.emailChange}/><br />
        Username: <br />
        <input type="text" name="username" value={this.state.usernameChange}/><br />
        Password: <br />
        <input type="password" name="password" value={this.state.password} onChange={this.passwordChange}/><br />
        <button onClick={this.handleSubmit}>Register</button>


      </form>
      )
  }
}
export default Register;