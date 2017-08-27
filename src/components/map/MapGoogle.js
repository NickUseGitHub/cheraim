import React from 'react';
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";

export default function MappGoogle (props) {
  const {
    center,
    onMapLoad,
    onMapClick,
    markers,
    onMarkerRightClick,
    onMarkerLeftClick,
    infoWindowPosition,
    toggleInfoWindow
  } = props;

  console.log('infoWindowPosition', infoWindowPosition)

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
          onClick={() => onMarkerLeftClick(marker)}
          onRightClick={() => onMarkerRightClick(marker)}
        />
      ))}

      <InfoWindow
                  defaultPosition={ infoWindowPosition }
                  position={infoWindowPosition}
                  onCloseclick={() => toggleInfoWindow(null)}
                  >
        {<span>Hello Info</span>}
      </InfoWindow>
    </GoogleMap>
  )
}