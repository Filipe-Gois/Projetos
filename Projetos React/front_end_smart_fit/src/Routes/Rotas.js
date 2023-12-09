import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from '../Components/Header/Header';
import HomePage from '../Pages/HomePage/HomePage';

const Rotas = () => {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<HomePage />} path='/' exact />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;