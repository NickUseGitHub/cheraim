import React from 'react';
import MapContainer from './map/MapContainer';
import SearchBoxContainer from './search/SearchBoxContainer';

export default (props) => {
  const {
    updateCenter
  } = props;

  return (
    <div className="Main-container">
      <SearchBoxContainer updateCenter={updateCenter} />
      <MapContainer {...props} />
    </div>
  );
}
