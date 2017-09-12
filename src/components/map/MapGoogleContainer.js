import { compose, withProps } from 'recompose';
import { withGoogleMap } from 'react-google-maps';

import MapGoogle from './MapGoogle';

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
  withProps(() => ({convertDataFromFirebaseListToMarkersArr}))
)(MapGoogle)