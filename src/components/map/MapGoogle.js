import React from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';

export default function MappGoogle (props) {
  const {
    center,
    onMapLoad,
    onMapClick,
    markers,
    onMarkerRightClick,
    onMarkerLeftClick,
    infoWindowPosition
  } = props;

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

      {infoWindowPosition && <InfoWindow position={infoWindowPosition.position || {}} >
        {
          <div className="marker-info">
            <h2>{infoWindowPosition.name}</h2>
            <span>{infoWindowPosition.description}</span>
          </div>
        }
      </InfoWindow>}

    </GoogleMap>
  )
}