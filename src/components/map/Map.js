import React from 'react';
import MapGoogleContainer from './MapGoogleContainer';

export default function (props) {
  const {
    markers,
    handleMapLoad,
    handleMapClick,
    handleOnMarkerLeftClick,
    handleMarkerRightClick
  } = props

  return (
      <div style={{height: `70vh`}}>
        <MapGoogleContainer
          {...props}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={handleMapLoad}
          onMapClick={handleMapClick}
          markers={markers}
          onMarkerLeftClick={handleOnMarkerLeftClick}
          onMarkerRightClick={handleMarkerRightClick}
        />
      </div>
    );
}