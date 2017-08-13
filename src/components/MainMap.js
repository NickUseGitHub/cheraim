import React from 'react';
import MapContainer from './map/MapContainer';
import SearchBoxContainer from './search/SearchBoxContainer';

export default (props) => {
  return (
    <div className="Main-container">
      <SearchBoxContainer />
      <MapContainer {...props} />
    </div>
  );
}
