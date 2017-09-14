import { compose, withHandlers, withState } from 'recompose';
import getLocation from '../../utils/getLocation';
import Map from './Map';

// map Demo: https://tomchentw.github.io/react-google-maps/

export default compose(
  withState('showModal', 'setShowModal', false),
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
    handleMapClick: ({ markers, addMarkers, toggleInfoWindow, firebase, setShowModal }) => event => {
      /**
       * create marker
       */
      // const nextMarkers = [
      const marker = {
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        },
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      };
      setShowModal(true);
      // const db = firebase.database();
      // addMarkers(db.ref('/Markers'), marker);

      // if (nextMarkers.length === 3) {
      //   this.props.toast(
      //     `Right click on the marker to remove it`,
      //     `Also check the code!`
      //   );
      // }
      
      toggleInfoWindow(null);
    },
    handleOnMarkerLeftClick: ({ toggleInfoWindow }) => targetMarker => {
      toggleInfoWindow(targetMarker.position || null);
    }
    // handleMarkerRightClick: ({ markers }) => targetMarker => {
    // }
  })
)(Map);