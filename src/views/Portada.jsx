import React from "react";
import { useState, useEffect } from "react";

const Portada = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Cada 1 minuto
    return () => clearInterval(interval);
  }, []);

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  return (
    <>
      <div className="portada-container" data-testid="portada-content">
        
          <h1>AlvarengaGrooves</h1>
          <div className="contenedor-parrafo">

            <p>WebTour-</p>
            <p data-testid="date">
              {month} {year} {/* - {hours}:{minutes}:{seconds} */}
            </p>
          </div>

          
        

        
        <div className="portada-imagen">
          <img className="franja-imagen" src="/assets/img/elojo.webp" alt="portada del disco el ojo" />
        </div>
      </div>
    </>
  );
};

export default Portada;
