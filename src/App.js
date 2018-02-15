import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Register from './Register'
import Main from './Main'

class App extends Component {
  constructor(){
    super()
    this.state={
      register: false,
      username: ''
    }
  }

  getUsername = (username) => {
    this.setState({username: username})
  }

  getRegister = (bool) =>{
    console.log(bool)
    this.setState({register:bool})
  }

  render() {
    return (
    <div>
      {this.state.username === '' ? this.state.register === false ? <Login getName={this.getUsername} getRegister={this.getRegister}/> : <Register /> : <Main />}
    </div>
    );
  }
}

export default App;
