import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import logoMobile from '../../assets/images/images/logo-white.svg'
import logoDesktop from '../../assets/images/images/logo-pink.svg'


const Nav = () => {
    return (
        <nav className='navbar'>
            <span className='navbar__close'>x</span>
            <Link to="/">
                <img src={window.innerWidth >= 992 ? logoDesktop : logoMobile} className='eventlogo__logo-image' alt="Event plus logo" />
            </Link>

            <Link to="/">Home</Link>
            <Link to="/tipo-eventos">Tipo Eventos</Link>
            <Link to="/login">Login</Link>
            <Link to="/eventos">Eventos</Link>
        </nav>
    );
};

export default Nav;