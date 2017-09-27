import React, { Component } from 'react';
import './Main.css';
import MainMapContainer from './components/MainMapContainer';
// import CounterContainer from './components/counter/CounterContainer'

class Main extends Component {
  render() {
    return (
      <div className="Main">
          <div className="Main-header">
            <img className="Main-logo" src="http://cheraim.com/wp-content/uploads/2015/10/GOGO.png" />
          </div>
          {/* <CounterContainer {...this.props}/> */}
          <MainMapContainer {...this.props}/>
          <div>{this.props.testStr}</div>
      </div>
    );
  }
}

export default Main;
