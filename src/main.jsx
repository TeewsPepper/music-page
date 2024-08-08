import React from "react";
import ReactDOM from "react-dom/client";
import FirstApp from "./FirstApp";
import { LanguageProvider } from './context/LanguageContext';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <LanguageProvider>
      <FirstApp />
    </LanguageProvider>
    
  </React.StrictMode>
);
