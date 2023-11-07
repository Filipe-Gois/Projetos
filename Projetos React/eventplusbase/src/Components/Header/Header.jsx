import React, { useState } from 'react';
import './Header.css'
import Container from '../Container/Container';
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';
import Nav from '../../Components/Nav/Nav'
import menuBar from '../../assets/images/images/menubar.png'

const Header = () => {

    const [exibeNavbar, setExibeNavbar] = useState(false)

    return (
        <header className='headerpage'>
            <Container>
                <div className="header-flex">
                    <img
                        className='headerpage__menubar'
                        src={menuBar} alt="Exibe ou esconde o menu no smartphone"
                        onClick={() => { setExibeNavbar(true) }}
                    />
                    <Nav setExibeNavbar={setExibeNavbar} exibeNavbar={exibeNavbar} />

                    <PerfilUsuario />
                </div>
            </Container>
        </header>
    );
};

export default Header;

