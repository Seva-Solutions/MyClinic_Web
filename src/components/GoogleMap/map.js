import React, { Component } from "react";
import { GoogleMap, LoadScript, Circle, Marker, Autocomplete  } from '@react-google-maps/api';
import Geolocation from "react-geolocation";
import styles from "../SearchResults/results.module.css";

// const options = {
//     strokeColor: '#FF0000',
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: '#2B64D2',
//     fillOpacity: 0.35,
//     clickable: false,
//     draggable: false,
//     editable: false,
//     visible: true,
//     radius: 3000,
//     zIndex: 1
// }
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    // zoom: 9.5,
  };

  constructor(props) {
    super(props);

    this.state = props;
    this.autocomplete = null
    this.onLoad = this.onLoad.bind(this)
    // this.onPlaceChanged = this.onPlaceChanged.bind(this)
  }

  geoSuccess = position => {
    console.log("position.coords.latitude: ", position.coords.latitude);
    console.log("position.coords.longitude: ", position.coords.longitude);
    let coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    
    this.setState({
      center: coords
    })
    this.props.setLocation({lat:coords.lat, lng: coords.lng, address:'Your Location'})
  };
  onLoad (autocomplete) {
    console.log('autocomplete: ', autocomplete)
    this.autocomplete = autocomplete
  }

  onPlaceChanged = () => {
    if (this.autocomplete !== null) {
      console.log(this.autocomplete.getPlace())
      let coords = {
        lat: this.autocomplete.getPlace().geometry.location.lat(),
        lng: this.autocomplete.getPlace().geometry.location.lng()
      }
      
      this.setState({
        center: coords
      })
      this.props.setLocation({lat:coords.lat, lng: coords.lng, address:this.autocomplete.getPlace().name})

    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }
  render() {
    console.log(this.state.center);
    return (
      <Geolocation
        onSuccess={this.geoSuccess}
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition
        }) => (
          <div>
            {error && <div>{error.message}</div>}
            {/* <pre>
              latitude: {latitude}
              longitude: {longitude}
            </pre> */}
            <div
              className={this.props.geoStyle}
            >
              {/* <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyBQbOVpM2UKKRF82lw8OVr2KhKKysfjZSU' }}
                center={this.state.center}
                zoom={this.state.zoom}
              >
              </GoogleMapReact> */}
                <LoadScript
                    googleMapsApiKey="AIzaSyBQbOVpM2UKKRF82lw8OVr2KhKKysfjZSU"
                    libraries={['places']}
                    >
                    <GoogleMap
                    mapContainerStyle={this.props.containerStyle}
                    center={this.state.center}
                    zoom={this.props.mapZoom}
                    >
                    <button onClick={getCurrentPosition} 
                      style={{
                        position:'absolute', 
                        zIndex:'1', 
                        bottom:'10px', 
                        left:'10px', 
                        background:'white', 
                        border:'1px solid #2B64D2', 
                        color:'black',
                        cursor:'pointer',
                        height:'30px',
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                      }}
                      >Locate me
                    </button>
                    <Circle
                        center={this.state.center}
                        options={{
                          strokeColor: '#FF0000',
                          strokeOpacity: 0.8,
                          strokeWeight: 2,
                          fillColor: '#2B64D2',
                          fillOpacity: 0.35,
                          clickable: false,
                          draggable: false,
                          editable: false,
                          visible: true,
                          radius: this.props.radius *1000,
                          zIndex: 1,
                        }}
                    />
                    <Marker
                        position={this.state.center}
                    />
                    {/* <Autocomplete
                        onLoad={this.onLoad}
                        onPlaceChanged={this.onPlaceChanged}
                    >
                        <input
                        type="text"
                        placeholder={this.props.information.address}
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid #2B64D2`,
                            width: `80%`,
                            height: `40px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: "absolute",
                            left:'10%',
                        }}
                        />
                    </Autocomplete> */}
                    </GoogleMap>
                </LoadScript>
            </div>
          </div>
        )}
      />
    );
  }
}
