import APIKEY from'./config.js'
import './styles/CreateHunt.css'
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import request from 'superagent'

const defaultMapCenter = {lat: 41.882059,lng: -87.627815};
const defaultZoom = 11;
 
const AnyReactComponent = ({ text }) => <div className="bigtest">{text}</div>;
 
class CreateHunt extends Component {
  constructor(){
    super()
    this.state={
      title: '',
      description: '',
      selectValue: 0,
      latitude:[],
      longitude:[],
      hints: [],
      zoom: 15,
      marker: {
        lat: 0,
        lng: 0
      }
    }
  }


  renderMarkers = (map, maps) => {
    const marker = new maps.Marker({        
      position: {lat: 41.8781, lng: -87.6298},
      draggable: true,
      map
    })
    marker.addListener('dragend', this.setMarker)
  }


  setMarker  = (e) =>{
    this.setState({latitude:e.latLng.lat(), longitude:e.latLng.lng()})
  }

  handleChange = (e) =>{
    this.setState({selectValue: e.currentTarget.value})
    console.log(this.state.selectValue)
  }

  submitHunt = (e) => {
    e.preventDefault()
    request
    .post('http://localhost:9292/hunts/new')
    .send({
      title: this.state.title,
      description: this.state.description,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      zoom:this.state.zoom,
      hints: this.state.hints
    })
   
  }

  titleChange = (e) =>{
    this.setState({title:e.currentTarget.value})
  }

  desChange = (e) =>{
    this.setState({description:e.currentTarget.value})
  }

  checkState = (e) =>{
    e.preventDefault()
    console.log(this.state)
  }


 
 render() {

    const inputs = [];
    for(let i = 0; i < this.state.selectValue; i++) {
      inputs.push(<div><input type="text" name="hint" key={i} /><br /></div>)
    }
    for(let i=0; i < inputs.length; i++){
      inputs[i].value.push(this.state.hints)
    }

    return( 
      <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKEY  }}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        defaultCenter={defaultMapCenter}
        defaultZoom={this.state.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <AnyReactComponent 
          lat={ 41.882059 }
          lng={ -87.627815 }
        />
      </GoogleMapReact>
      <form>
        Title:<br /><input type="text" value={this.state.title} onChange={this.titleChange}/><br />

        Description:<br /><input type="text" value={this.state.description} onChange={this.desChange} /><br />

      <p>How many hints do you want to add?</p>

      <select multiple={true}  onChange={this.handleChange}>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      </form>

        <form>
          {inputs}
          <button onClick={this.submitHunt}>Create your hunt</button>
        </form>
      </div>
    )
  }
}
export default CreateHunt;