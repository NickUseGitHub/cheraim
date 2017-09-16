import { compose, withHandlers, withState } from 'recompose';
import MapModal from './MapModal';

export default compose(
  withState('seletedIcon', 'setSelectedIcon', null),
  withHandlers({
    onIconClick: ({setSelectedIcon}) => icon => () => {
      setSelectedIcon(icon)
    },
    onClickSave: ({ setShowModal, seletedIcon, selectedPosition }) => () => {
      console.log('seletedIcon', seletedIcon)
      console.log('selectedPosition', selectedPosition)
      setShowModal(false)
    }
  })
)(MapModal);