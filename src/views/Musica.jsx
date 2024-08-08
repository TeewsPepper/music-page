/* 
import React from 'react';
import audioFiles from '../data/musicData';
import ScrollToTopButton from '../components/ScrollToTopButton';
import CustomAudioPlayer from '../components/CustomAudioPlayer';

const Musica = () => {
  const columns = [];
  for (let i = 0; i < audioFiles.length; i += 3) {
    columns.push(audioFiles.slice(i, i + 3));
  }

  return (
    <>
      <div>
        <p id="musica-title">"El Ojo"</p>
      </div>

      <div data-testid="musica-container">
        {columns.map((column, columnIndex) => (
          <div className='musica-content'  key={columnIndex} >
            {column.map((audio) => (
              <div    key={audio.id}>
                <CustomAudioPlayer
                  src={audio.src}
                  title={audio.title}
                  image={audio.image}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Musica; */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import audioFiles from '../data/musicData';
import ScrollToTopButton from '../components/ScrollToTopButton';
import CustomAudioPlayer from '../components/CustomAudioPlayer';

const Musica = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  const columns = [];
  for (let i = 0; i < audioFiles.length; i += 3) {
    columns.push(audioFiles.slice(i, i + 3));
  }

  return (
    <>
      <div>
        <p id="musica-title">{translations.music.title}</p> {/* Usa la traducción aquí */}
      </div>

      <div data-testid="musica-container">
        {columns.map((column, columnIndex) => (
          <div className='musica-content' key={columnIndex}>
            {column.map((audio) => (
              <div key={audio.id}>
                <CustomAudioPlayer
                  src={audio.src}
                  title={translations.music.audioTitles[audio.title] || audio.title} 
                  image={audio.image}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Musica;

