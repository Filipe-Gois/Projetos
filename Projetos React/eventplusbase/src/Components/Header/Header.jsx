import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';
import Nav from '../../Components/Nav/Nav'
import menuBar from '../../assets/images/images/menubar.png'

const Header = () => {
    return (
        <header className='headerpage'>
            <Container>
                <div className="header-flex">
                    <img src={menuBar} alt="Exibe ou esconde o menu no smartphone" />
                    <Nav />

                    <PerfilUsuario />
                </div>
            </Container>
        </header>
    );
};

export default Header;

