import React, { Component } from 'react';
import request from 'superagent';
import GoogleMapReact from 'google-map-react'
import APIKEY from'./config.js'
import './styles/CreateHunt.css'

class CreateHunt extends Component{
  constructor(){
    super()
    this.state ={
      center:{
        lng: 30.33,
        lat: 59.95,
    },
      title: '',
      description: '',
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
    <div className="newHunt">
      <form>
        Title:<input type="text" value={this.state.title} onChange={this.handleTitle}/><br />
        Description:<input type="text" value={this.state.description} onChange={this.handleDes} /><br />
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        />
      </form>
    </div>
  )
  }
}

export default CreateHunt;