import React, { Component } from 'react';
import './Main.css';
import MapContainer from './map/MapContainer';
import SearchBoxContainer from './search/SearchBoxContainer'

class Main extends Component {
  render() {
    return (
      <div className="Main">
          <div className="Main-header">
            <img className="Main-logo" src="http://cheraim.com/wp-content/uploads/2015/10/GOGO.png" />
          </div>
          <div className="Main-container">
            <SearchBoxContainer />
            <MapContainer />
          </div>
      </div>
    );
  }
}

export default Main;
