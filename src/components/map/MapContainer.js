import { compose, withHandlers, withState } from 'recompose';
import { isEmpty } from 'lodash';
import getLocation from '../../utils/getLocation';
import Map from './Map';

// map Demo: https://tomchentw.github.io/react-google-maps/

export default compose(
  withState('showModal', 'setShowModal', false),
  withState('selectedPosition', 'setSelectedPosition', {}),
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
    handleMapClick: ({ markers, toggleInfoWindow, setShowModal, setSelectedPosition }) => event => {
      /**
       * create marker
       */
      // const nextMarkers = [
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      const marker = {
        position,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      };
      setSelectedPosition(marker);
      setShowModal(true);

      // if (nextMarkers.length === 3) {
      //   this.props.toast(
      //     `Right click on the marker to remove it`,
      //     `Also check the code!`
      //   );
      // }
      
      toggleInfoWindow(null);
    },
    handleOnMarkerLeftClick: ({ toggleInfoWindow }) => targetMarker => {
      if (isEmpty(targetMarker)) return;
      toggleInfoWindow(targetMarker || null);
    },
    handleMarkerRightClick: ({ markers }) => targetMarker => {
      console.log('targetMarker', targetMarker)
    }
  })
)(Map);