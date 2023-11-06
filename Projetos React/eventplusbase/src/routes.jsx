import React from 'react';
// import dos componentes de rota
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import das páginas
import EventosPage from './pages/EventosPage/EventosPage'
import HomePage from './pages/HomePage/HomePage'
import TipoEventos from './pages/TipoEventos/TipoEventos'
import LoginPage from './pages/LoginPage/LoginPage'
import TestePage from './pages/TestePage/TestePage';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'


const Rotas = () => {
    return (
        //criar a estrutura das rotas
        <BrowserRouter>
            <Header />
            <Routes>

                <Route element={<EventosPage />} path='/eventos' />

                <Route element={<HomePage />} path='/' exact />

                <Route element={<TipoEventos />} path='/tipo-eventos' />
                <Route element={<LoginPage />} path='/login' />
                <Route element={<TestePage />} path='/teste' />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Rotas;