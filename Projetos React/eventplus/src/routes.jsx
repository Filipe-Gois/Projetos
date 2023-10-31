import React from "react";
// import dos componentes de rota

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import das páginas
import EventosPage from "./components/EventosPage/EventosPage";
import HomePage from "./components/HomePage/HomePage";
import TipoEventos from "./components/TipoEventos/TipoEventos";
import Titulo from "./components/Titulo/Titulo";

const Rotas = () => {
  return (
    //criar a estrutura de rotas
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<EventosPage />} path="/eventos"/>
        <Route element={<TipoEventos/>}path="/tipoeventos"/>
        <Route element={<Titulo/>} path="/titulo"/>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
