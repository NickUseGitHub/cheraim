import React from 'react';
import './SearchBox.css';

const mapList = [1, 2, 3, 4];
const isTrue = false;

export default function (props) {
  return (
    <div className="SearchBox">
      <div className="SearchBox-Container">
        <input className="SearchBox-Input"/>
        <ul className={`SearchBox-Suggestion ${isTrue ? 'active' : '' }`}>
          {mapList.map(v => <li key={v}>{v}</li>)}
        </ul>
      </div>
    </div>
  );
}