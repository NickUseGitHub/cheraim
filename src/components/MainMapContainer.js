import { compose, withState } from 'recompose';
import MainMap from './MainMap'

export default compose(
  withState('center', 'updateCenter', { lat: 13.7281262, lng: 100.5328248 }),
  withState('markers', 'updateMarkers', () => [{
    position: {
      lat: 13.7281262,
      lng: 100.5328248
    },
    key: `Silom`,
    defaultAnimation: 2,
  }])
)(MainMap);
