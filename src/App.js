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
      message: '',
      register: false,
      username: ''
    }
  }

  getUsername = (username) => {
    this.setState({username: username})
  }

  getRegister = (bool) =>{
    this.setState({register:bool})
  }

  whenRegistered = () => {
    this.setState({register:false})
  }

  errorMessage = (str) => {
    this.setState({message: str})
  }
  render() {
    let logView = null;

    if (this.state.username === "" && this.state.register === false) {
      logView = <Login getName={this.getUsername} getRegister={this.getRegister} errorMessage={this.errorMessage}/>
    }
    else if (this.state.username === "") {
      logView = <Register getName={this.getUsername} whenRegistered={this.whenRegistered} errorMessage={this.errorMessage}/>
    }
    else {
      logView = <Main />
    }
    return (
    <div className="root">
      { logView }
    </div>
    );
  }
}

export default App;
