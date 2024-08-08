import React from "react";
import { useState, useEffect } from "react";
import { useLanguage } from '../context/LanguageContext';

const Portada = () => {
  const { language, switchLanguage, translations } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Cada 1 minuto
    return () => clearInterval(interval);
  }, []);

  const monthIndex = currentDate.getMonth();
  const monthNames = translations.common.months;
  const monthKeys = Object.keys(monthNames);
  const month = monthNames[monthKeys[monthIndex]] || monthKeys[monthIndex];
  const year = currentDate.getFullYear();
  
  return (
    <>
      <div className="portada-container" data-testid="portada-content">
        
        <h1>AlvarengaGrooves</h1>
        <div className="contenedor-parrafo">
          <p>WebTour /</p>
          <p data-testid="date">
            {month} {year}
          </p>
        </div>
        <div className="portada-imagen">
          <img className="franja-imagen" src="/assets/img/elojo.webp" alt="portada del disco el ojo" />
        </div>
      </div>
      <div className="btn-translations">
          <button onClick={() => switchLanguage('en')}>EN</button>
          <button onClick={() => switchLanguage('es')}>ES</button>
        </div>
    </>
  );
};

export default Portada;
