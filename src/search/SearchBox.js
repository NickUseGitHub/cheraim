import React from 'react';
import './SearchBox.css';

export default (props) => {
  const {
    keyword,
    mapList,
    isActive,
    onClick,
    onChange,
    onSubmit
  } = props;

  return (
      <div className="SearchBox">
        <div className="SearchBox-Container">
          <form onSubmit={onSubmit}>
            <input value={keyword} onClick={onClick} onChange={onChange} className="SearchBox-Input"/>
          </form>
          <ul className={`SearchBox-Suggestion ${isActive ? 'active' : ''}`}>
            {mapList.map(v => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </div>
    );
}