
import React, { createContext, useState, useContext } from 'react';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';

const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  es: esTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Idioma por defecto

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);


