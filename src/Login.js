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
    e.preventDefault()

    this.props.getRegister(true)
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    request
      .post('http://localhost:9292/users/login')
      .type('form')
      .send(this.state)
      .end((err, res) =>{
        if (err) {
          console.log(err)
        }
        else {
          const parsed = JSON.parse(res.text)
          if (parsed.success == true) {
            this.props.getName(this.state.username)
            this.props.errorMessage(parsed.message)
          }
          else {
            this.setState({username: '', password: ''})
            this.props.errorMessage(parsed.message)
          }
        }
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