import APIKEY from'./config.js'
import './styles/CreateHunt.css'
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const defaultMapCenter = {lat: 41.882059,lng: -87.627815};
const defaultZoom = 11;
 
const AnyReactComponent = ({ text }) => <div className="bigtest">{text}</div>;
 
class CreateHunt extends Component {
  constructor(){
    super()
    this.state={
      selectValue: [],
      latitude:[],
      longitude:[],
      hints: [],
      marker:{
        lat: 0,
        lng:0
      }
    }
  }


  renderMarkers = (map, maps) => {
    const marker = new maps.Marker({        
      position: {lat: 41.8781, lng: -87.6298},
      draggable: true,
      map
    })
    marker.addListener('dragend', this.checkMarker)
  }

  checkMarker = (e) => {
    console.log(e, 'lat:' + e.latLng.lat(), 'long:'+e.latLng.lng())
  }

  setMarker  = (e) =>{
    // this.setState({marker:})
  }

  handleChange = (e) =>{
    this.setState({selectValue: e.currentTarget.value})
    console.log(this.state.selectValue)
  }

 
 render() {
  //   const hintForm = for (let i = 0; i <this.state.selectValue; i++) {
  //     return <input text="text" name="hint" />
    // }
    return( 
      <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKEY  }}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        defaultCenter={defaultMapCenter}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <AnyReactComponent 
          lat={ 41.882059 }
          lng={ -87.627815 }
        />
      </GoogleMapReact>
      <button onClick={this.buttonPress}>Find position</button>
      <form>
        Title:<br /><input type="text" value={this.state.title} onChange={this.handleTitle}/><br />

        Description:<br /><input type="text" value={this.state.description} onChange={this.handleDes} /><br />

        <button onClick={this.setMarker}>Create your hunt</button>

      <p>How many hints do you want to add?</p>

      <select value={this.state.selectValue} onChange={this.handleChange}>
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

      </form>
      </div>
    )
  }
}

export default CreateHunt;