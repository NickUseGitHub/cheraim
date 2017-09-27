import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { addMarkersCreator, mapMarkersCreator } from '../reducers/marker';
import MainMap from './MainMap';

/**
 * referrence for setZoom & setCenter: https://github.com/tomchentw/react-google-maps/issues/188
 */

const icon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
const infoWindowPosition = {};

const mapStateToProps = state => ({
  markers: state.markers
});

const mapDispatchToProps = dispatch => {
  return {
    mapMarkers: markers => {
      dispatch(mapMarkersCreator(markers))
    },
    addMarkers: (db, marker) => {
      dispatch(addMarkersCreator(db, marker))
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('center', 'updateCenter', infoWindowPosition),
  withState('infoWindowPosition', 'updateInfoWindowPosition', null),
  withHandlers({
    toggleInfoWindow: ({ updateInfoWindowPosition }) => marker => {
      console.log('marker', marker);
      updateInfoWindowPosition(marker);
    }
  }),
  lifecycle({
    componentDidMount () {
      const { mapMarkers, firebase } = this.props;
      const db = firebase.database();
      db.ref('/Markers').once('value', (snapshot) => {
        mapMarkers(snapshot.val());
      })
    }
  })
)(MainMap);
