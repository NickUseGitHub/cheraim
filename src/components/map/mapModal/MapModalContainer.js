import { compose, withHandlers, withState } from 'recompose';
import MapModal from './MapModal';

export default compose(
  withState('selectedIcon', 'setSelectedIcon', 0),
  withHandlers({
    onIconClick: ({setSelectedIcon}) => icon => () => {
      setSelectedIcon(icon)
    },
    onClickSave: ({ addMarkers, firebase, setShowModal, selectedIcon, selectedPosition }) => () => {
      const newMarker = Object.assign({}, selectedPosition, {icon: selectedIcon});
      const db = firebase.database();
      addMarkers(db.ref('/Markers'), newMarker);
      setShowModal(false)
    }
  })
)(MapModal);