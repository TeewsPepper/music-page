/* import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {  ClockLoader } from "react-spinners";

const Layout = lazy(() => import("./components/layout/Layout"));
const Musica = lazy(() => import("./views/Musica"));
const Dibujos = lazy(() => import("./views/Dibujos"));
const Portada = lazy(() => import("./views/Portada"));


const FirstApp = () => {
  return (
    <>
      
        <Router>
          <Suspense fallback={<div className="spinner-container">
            <ClockLoader color={"#ffffff"} loading={true} size={50}/>
          </div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Portada />} />
                <Route path="musica" element={<Musica />} />
                
                <Route path="dibujos" element={<Dibujos />} />
               
              </Route>
            </Routes>
          </Suspense>
        </Router>
      
    </>
  );
};

export default FirstApp; */
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ClockLoader } from "react-spinners";

const Layout = lazy(() => import("./components/layout/Layout"));
const Musica = lazy(() => import("./views/Musica"));
const Dibujos = lazy(() => import("./views/Dibujos"));
const Portada = lazy(() => import("./views/Portada"));

const FirstApp = () => {
  return (
    <LanguageProvider>
      <Router>
        <Suspense
          fallback={
            <div className="spinner-container">
              <ClockLoader color={"#ffffff"} loading={true} size={50} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Portada />} />
              <Route path="musica" element={<Musica />} />
              <Route path="dibujos" element={<Dibujos />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
};

export default FirstApp;

