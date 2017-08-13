import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";

export default function MappGoogle (props) {
  const {
    center,
    onMapLoad,
    onMapClick,
    markers,
    onMarkerRightClick
  } = props

  return (
    <GoogleMap
      center={center}
      ref={onMapLoad}
      defaultZoom={17}
      defaultCenter={center}
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