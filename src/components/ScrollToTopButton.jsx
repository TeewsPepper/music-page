import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const ScrollToTopButton = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTopButton) {
    return null;
  }

  return (
    <button
      aria-label={translations.common.scrollToTop} // Usa la traducción aquí
      onClick={scrollToTop}
      className="scroll-btn"
    >
      {translations.common.scrollToTop} {/* Usa la traducción aquí */}
    </button>
  );
};

export default ScrollToTopButton;

