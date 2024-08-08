import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { useLanguage } from '../context/LanguageContext';

// Array de imágenes
const images = Array.from({ length: 22 }, (v, i) => ({
  src: `/assets/img/${i + 1}.webp`,
  alt: `Dibujo ${i + 1}`,
  description: `Descripción del dibujo ${i + 1}`
}));

const breakpointColumnsObj = {
  default: 4,
  1380: 3,
    767: 2,
    520: 1
};

function Dibujos() {
  const { translations } = useLanguage();
  const [flippedImages, setFlippedImages] = useState(Array(22).fill(false));

  const handleFlip = (index) => {
    const newFlippedImages = [...flippedImages];
    newFlippedImages[index] = !newFlippedImages[index];
    setFlippedImages(newFlippedImages);
  };

  return (
    <div>
      <div className='dibujos-title'>
        <h1>{translations?.dibujos?.title}</h1>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid dibujos-container"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`masonry-item ${flippedImages[index] ? 'flipped' : ''}`} 
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={image.src} alt={image.alt} className="masonry-img" />
              </div>
              <div className="flip-card-back ">
                <h1>{image.description}</h1>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
      <ScrollToTopButton />
    </div>
  );
}

export default Dibujos;
