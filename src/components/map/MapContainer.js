import { compose, withHandlers } from 'recompose';
import getLocation from '../../utils/getLocation';
import Map from './Map';

export default compose(
  withHandlers({
    handleMapLoad: ({ updateCenter }) => map => {
      if (map) {
        const getLatlong = pos => ({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        const setMapToCurrentLocation = pos => updateCenter(pos);

        getLocation()
          .then(getLatlong)
          .then(setMapToCurrentLocation);
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