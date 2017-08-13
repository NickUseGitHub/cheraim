import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";

export default function MappGoogle (props) {
  const {
    onMapLoad,
    onMapClick,
    markers,
    onMarkerRightClick
  } = props

  return (
    <GoogleMap
      ref={onMapLoad}
      defaultZoom={17}
      defaultCenter={{ lat: 13.7281262, lng: 100.5328248 }}
      onClick={onMapClick}
    >
      {markers.map(marker => (
        <Marker
          {...marker}
          onRightClick={() => onMarkerRightClick(marker)}
        />
      ))}
    </GoogleMap>
  )
}