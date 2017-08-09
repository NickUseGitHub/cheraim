import React, { Component } from 'react';
import './Main.css';
import Map from './map/map';

class Main extends Component {
  render() {
    return (
      <div className="Main">
          <div className="Main-header">
            <h1>Chaim.co.th</h1>
          </div>
          <div className="Main-container">
            <p className="Main-intro">
              Hello Chaim
            </p>
            <Map />
          </div>
      </div>
    );
  }
}

export default Main;
