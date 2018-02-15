import React, { Component } from 'react';
import request from 'superagent';

class CreateHunt extends Component{
  constructor(){
    super()
    this.state ={
      title: '',
      description: '',
      longitude: 0,
      latitude: 0,
      zoom: 0
    }
  }

  handleTitle = (e) =>{
    this.setState({title:e.currentTarget.value})
  }

  handleDes = (e) =>{
    this.setState({description:e.currentTarget.value})
  }


 render(){
  return(
    <div>
      <form>
        Title:<input type="text" value={this.state.title} onChange={this.handleTitle}/>
        Description:<input type="text" value={this.state.description} onChange={this.handleDes} />
      </form>
    </div>
  )
  }
}

export default CreateHunt;