import { compose, withHandlers, withState } from 'recompose';
import Map from './Map';

export default compose(
  withState('center', 'updateCenter', { lat: 13.7281262, lng: 100.5328248 }),
  withState('markers', 'updateMarkers', () => [{
    position: {
      lat: 13.7281262,
      lng: 100.5328248
    },
    key: `Taiwan`,
    defaultAnimation: 2,
  }]),
  withHandlers({
    handleMapLoad: () => map => {
      if (map) {
        console.log(map.getZoom());
      }
    },
    handleMapClick: ({ markers, updateMarkers }) => event => {
      /**
       * create marker
       */
      // const nextMarkers = [
      //   ...markers,
      //   {
      //     position: event.latLng,
      //     defaultAnimation: 2,
      //     key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      //   },
      // ];
      // updateMarkers(nextMarkers);

      // if (nextMarkers.length === 3) {
      //   this.props.toast(
      //     `Right click on the marker to remove it`,
      //     `Also check the code!`
      //   );
      // }
    },
    handleMarkerRightClick: ({ markers, updateMarkers }) => targetMarker => {
      /**=
        * All you modify is data, and the view is driven by data.
        * This is so called data-driven-development. (And yes, it's now in
        * web front end and even with google maps API.)
        */
        const nextMarkers = markers.filter(marker => marker !== targetMarker);
        updateMarkers(nextMarkers);
    }
  })
)(Map);