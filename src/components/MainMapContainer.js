import { compose, withState } from 'recompose';
import MainMap from './MainMap';

/**
 * referrence for setZoom & setCenter: https://github.com/tomchentw/react-google-maps/issues/188
 */

const icon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

export default compose(
  withState('center', 'updateCenter', { lat: 13.7281262, lng: 100.5328248 }),
  withState('markers', 'updateMarkers', () => [{
    position: {
      lat: 13.7281262,
      lng: 100.5328248
    },
    icon,
    key: `Silom`,
    defaultAnimation: 2,
  }])
)(MainMap);
