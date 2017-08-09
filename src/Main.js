import React, { Component } from 'react';
import './Main.css';
import MapContainer from './map/MapContainer';
import SearchBoxContainer from './search/SearchBoxContainer'

class Main extends Component {
  render() {
    return (
      <div className="Main">
          <div className="Main-header">
            <h1>Chaim.co.th</h1>
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
