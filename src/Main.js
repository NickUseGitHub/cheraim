import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
          <div className="Main-header">
            <h2>Welcome to Chaim</h2>
          </div>
          <div className="Main-container">
            <p className="Main-intro">
              Hello Chaim
            </p>
          </div>
      </div>
    );
  }
}

export default Main;
