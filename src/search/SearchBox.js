import React from 'react';
import './SearchBox.css';

export default (props) => {
  const {
    keyword,
    mapList = [1, 2, 3, 4]
  } = props;

  return (
      <div className="SearchBox">
        <div className="SearchBox-Container">
          <form>
            <input value={keyword} className="SearchBox-Input"/>
          </form>
          <ul className={`SearchBox-Suggestion`}>
            {mapList.map(v => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </div>
    );
}