import React from 'react';
import Modal from 'react-modal';

export default function MapModal (props) {
  const { 
    showModal,
    selectedIcon,
    setShowModal,
    selectedPosition,
    onClickSave,
    onIconClick 
  } = props;

  console.log('selectedIcon', selectedIcon)

  return (<Modal
    isOpen={showModal}
    style={{ overlay: { zIndex: 102 }}}
    contentLabel="Example Modal"
  >
    <div>Name: <input /></div>
    <div>Desciption: <input /></div>
    <div>
      <div>Select Icon</div>
      <button style={{ backgroundColor: (selectedIcon === 0 ? 'green' : 'white')}} onClick={onIconClick(0)}><img src="http://maps.google.com/mapfiles/marker.png" /></button>
      <button style={{ backgroundColor: (selectedIcon === 1 ? 'green' : 'white')}} onClick={onIconClick(1)}><img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" /></button>
      <button style={{ backgroundColor: (selectedIcon === 2 ? 'green' : 'white')}} onClick={onIconClick(2)}><img src="http://maps.google.com/mapfiles/marker_orange.png" /></button>
    </div>
    <button onClick={onClickSave}>Save</button>
    <button onClick={() => setShowModal(false)}>Cancel</button>
  </Modal>)
}