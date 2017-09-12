import { compose, withProps } from 'recompose';
import { withGoogleMap } from 'react-google-maps';

import MapGoogle from './MapGoogle';

function convertDataFromFirebaseListToMarkersArr (markers) {
  if (!markers) return [];

  return Object.keys(markers).map(key => markers[key]);
}

export default compose (
  withGoogleMap,
  withProps(() => ({convertDataFromFirebaseListToMarkersArr}))
)(MapGoogle)