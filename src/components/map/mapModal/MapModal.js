import React from 'react';
import Modal from 'react-modal';

export default function MapModal (props) {
  const { showModal, setShowModal } = props;

  return (<Modal
    isOpen={showModal}
    style={{ overlay: { zIndex: 102 }}}
    contentLabel="Example Modal"
  >
    <button onClick={() => setShowModal(false)}>Close Modal</button>
  </Modal>)
}