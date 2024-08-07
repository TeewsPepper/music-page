// components/ImageModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, imageSrc }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onRequestClose();
    }, 500); // Debe coincidir con la duración de la animación
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className={`modal-content ${isClosing ? 'slide-out' : ''}`}
      overlayClassName="overlay"
    >
      <div className="modal">
        <button onClick={handleClose} className="modal-close">X</button>
        {imageSrc && <img src={imageSrc} alt="Selected" className="modal-img" />}
      </div>
    </Modal>
  );
};

export default ImageModal;
