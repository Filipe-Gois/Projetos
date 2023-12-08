import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "../Components/Header/Header"
import HomePage from "../Pages/HomePage/HomePage"
import Footer from '../Components/Footer/Footer';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route element={<HomePage />} path='/' exact />
                <Route element={<HomePage />} path='*' />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Rotas;