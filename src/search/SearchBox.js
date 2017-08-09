import React, { Component } from 'react';
import './SearchBox.css';

export default (props) => {
  const {
    mapList = [1, 2, 3, 4]
  } = props;

  return (
      <div className="SearchBox">
        <div className="SearchBox-Container">
          <form>
            <input className="SearchBox-Input"/>
          </form>
          <ul className={`SearchBox-Suggestion`}>
            {mapList.map(v => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </div>
    );
}