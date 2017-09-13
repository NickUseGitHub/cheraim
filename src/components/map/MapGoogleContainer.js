import { compose, withProps } from 'recompose';
import { withGoogleMap } from 'react-google-maps';

import MapGoogle from './MapGoogle';

// iconMarkers list: http://mabp.kiev.ua/2010/01/12/google-map-markers/

function convertDataFromFirebaseListToMarkersArr (markers) {
  if (!markers) return [];

  return Object.keys(markers).map(key => {
    const iconObj = {
      1: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    }

    return {
      ...markers[key],
      icon: iconObj[markers[key].icon] || ''
    }
  });
}

export default compose (
  withGoogleMap,
  withProps(({markers}) => ({markers: convertDataFromFirebaseListToMarkersArr(markers)}))
)(MapGoogle)