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
    console.log(this.state)
    this.setState({register:bool})
  }

  whenRegistered = () => {
    console.log(this.state)
    this.setState({register:false})
  }
  render() {
    let logView = null;

    if (this.state.username === "" && this.state.register === false) {
      logView = <Login getName={this.getUsername} getRegister={this.getRegister}/>
    }
    else if (this.state.username === "") {
      logView = <Register getName={this.getUsername} whenRegistered={this.whenRegistered}/>
    }
    else {
      logView = <Main />
    }
    return (
    <div className="main">

      { logView }
    </div>
    );
  }
}

export default App;
