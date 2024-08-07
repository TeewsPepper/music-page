import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from "react-modal";
import ScrollToTopButton from '../components/ScrollToTopButton';

// Array de imágenes
const images = Array.from({ length: 22 }, (v, i) => ({
  src: `/assets/img/${i + 1}.webp`,
  alt: `Dibujo ${i + 1}`
}));

const breakpointColumnsObj = {
  default: 4,
  1380: 3,
  768: 3,
  420: 1
};

Modal.setAppElement("#root");

function Dibujos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const handleRequestClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalIsOpen(false);
      setSelectedImage(null);
      setIsClosing(false);
    }, 500); // Debe coincidir con la duración de la animación
  };

  return (
    <div>
      <div className='dibujos-title'>
        <h1>Viajes en papel</h1>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="masonry-item" onClick={() => openModal(image.src)}>
            <img src={image.src} alt={image.alt} className="masonry-img" style={{ borderRadius: '10px' }} />
          </div>
        ))}
      </Masonry>
      <ScrollToTopButton />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleRequestClose}
        contentLabel="Image Modal"
        className={`modal-content ${isClosing ? 'slide-out' : ''}`}
        overlayClassName="overlay"
      >
        <div>
          <button onClick={handleRequestClose} className="modal-close">X</button>
        </div>
        <img src={selectedImage} alt="Selected" className="modal-img" style={{ borderRadius: '10px' }} />
      </Modal>
    </div>
  );
}

export default Dibujos;
