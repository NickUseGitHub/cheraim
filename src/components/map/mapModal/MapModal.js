import React from 'react';
import Modal from 'react-modal';

export default function MapModal (props) {
  const { 
    showModal,
    selectedIcon,
    setShowModal,
    selectedPosition,
    onClickSave,
    onIconClick,
    name,
    description,
    onValueChange
  } = props;

  return (<Modal
    className={{
      base: 'map-modal'
    }}
    isOpen={showModal}
    style={{ overlay: { zIndex: 102 }}}
    contentLabel="Example Modal"
  >
    <div><span className="title">Name:</span><input type="text" value={name} onChange={onValueChange('Name')} /></div>
    <div><span className="title">Desciption:</span><input type="text" value={description} onChange={onValueChange('Description')} /></div>
    <div className="select-icon-marker">
      <div><span className="title">Select Icon</span></div>
      <button className={ selectedIcon === 0 ? 'active' : '' } onClick={onIconClick(0)}><img src="http://maps.google.com/mapfiles/marker.png" /></button>
      <button className={ selectedIcon === 1 ? 'active' : '' } onClick={onIconClick(1)}><img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" /></button>
      <button className={ selectedIcon === 2 ? 'active' : '' } onClick={onIconClick(2)}><img src="http://maps.google.com/mapfiles/marker_orange.png" /></button>
    </div>
    <button className="btn btn-success" onClick={onClickSave}>Save</button>
    <button className="btn" onClick={() => setShowModal(false)}>Cancel</button>
  </Modal>)
}