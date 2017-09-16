import React from 'react';
import Modal from 'react-modal';

export default function MapModal (props) {
  const { showModal, setShowModal, selectedPosition, onClickSave, onIconClick } = props;

  return (<Modal
    isOpen={showModal}
    style={{ overlay: { zIndex: 102 }}}
    contentLabel="Example Modal"
  >
    <div>Name: <input /></div>
    <div>Desciption: <input /></div>
    <div>
      <div>Select Icon</div>
      <button onClick={onIconClick(0)}><img src="http://maps.google.com/mapfiles/marker.png" /></button>
      <button  onClick={onIconClick(1)}><img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" /></button>
      <button  onClick={onIconClick(2)}><img src="http://maps.google.com/mapfiles/marker_orange.png" /></button>
    </div>
    <button onClick={onClickSave}>Save</button>
    <button onClick={() => setShowModal(false)}>Cancel</button>
  </Modal>)
}