import React, { Component } from "react";
import { GoogleMap, LoadScript, Circle, Marker, Autocomplete  } from '@react-google-maps/api';
import Geolocation from "react-geolocation";
import styles from "../SearchResults/results.module.css";

export default class Map extends Component {
  // static defaultProps = {
  //   center: { lat: 40.744679, lng: -73.948542 },
  // };

  constructor(props) {
    super(props);
    this.state = props;
    this.center= { lat: this.props.lat, lng: this.props.lon }
  }

  render() {
    return (
      <Geolocation
        render={({
          position: { coords: { latitude, longitude } = {} } = {},
          error,
        }) => (
          <div>
            {error && <div>{error.message}</div>}

            <div
              className={this.props.geoStyle}
            >
              <LoadScript
                googleMapsApiKey="AIzaSyBQbOVpM2UKKRF82lw8OVr2KhKKysfjZSU"
                >
                <GoogleMap
                  mapContainerStyle={this.props.containerStyle}
                  center={this.center}
                  zoom={15}
                  >
                  <Marker
                      position={this.center}
                  />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        )}
      />
    );
  }
}
