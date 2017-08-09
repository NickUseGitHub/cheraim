import React, { Component } from 'react';
import './SearchBox.css';

const mapList = [1, 2, 3, 4];
const isTrue = false;

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 'insert some map...'
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit (e) {
    e.preventDefault();
    alert(this.state.value);
  }

  render () {
    return (
      <div className="SearchBox">
        <div className="SearchBox-Container">
          <form onSubmit={this.onHandleSubmit}>
            <input value={this.state.value} className="SearchBox-Input"/>
          </form>
          <ul className={`SearchBox-Suggestion ${isTrue ? 'active' : '' }`}>
            {mapList.map(v => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}