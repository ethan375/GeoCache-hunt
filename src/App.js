import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Register from './Register'
import Main from './Main'
import CreateHunt from './CreateHunt'

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
    <div className="main">
      
      <CreateHunt />

    </div>
    );
  }
}

export default App;
