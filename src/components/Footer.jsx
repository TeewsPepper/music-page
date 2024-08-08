import React from "react"
import { useLanguage } from "../context/LanguageContext"

const Footer = () => {
  const { translations } = useLanguage();
  return (
    <>
        <p className="footer">{translations.common.copyright}</p>
    </>
  )
}

export default Footer