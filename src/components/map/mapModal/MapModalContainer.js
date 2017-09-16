import { compose, withHandlers, withState } from 'recompose';
import MapModal from './MapModal';

export default compose(
  withState('selectedIcon', 'setSelectedIcon', 0),
  withState('name', 'setName', ''),
  withState('description', 'setDescription', ''),
  withHandlers({
    onIconClick: ({setSelectedIcon}) => icon => () => {
      setSelectedIcon(icon)
    },
    onValueChange: props => type => event => {
      props[`set${type}`](event.target.value)
    },
    onClickSave: ({ addMarkers, firebase, setShowModal, selectedIcon, setSelectedIcon, selectedPosition, name, setName, description, setDescription }) => () => {
      const newMarker = Object.assign({}, selectedPosition, {name, description, icon: selectedIcon});
      const db = firebase.database();
      
      addMarkers(db.ref('/Markers'), newMarker);
      setName('');
      setDescription('');
      setSelectedIcon(0);

      setShowModal(false);
    }
  })
)(MapModal);