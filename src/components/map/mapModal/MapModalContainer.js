import { compose, withHandlers, withState } from 'recompose';
import MapModal from './MapModal';

export default compose(
  withState('seletedIcon', 'setSelectedIcon', null),
  withHandlers({
    onIconClick: ({setSelectedIcon}) => icon => () => {
      setSelectedIcon(icon)
    },
    onClickSave: ({ addMarkers, firebase, setShowModal, seletedIcon, selectedPosition }) => () => {
      const newMarker = Object.assign({}, selectedPosition, {icon: seletedIcon});
      const db = firebase.database();
      addMarkers(db.ref('/Markers'), newMarker);
      setShowModal(false)
    }
  })
)(MapModal);