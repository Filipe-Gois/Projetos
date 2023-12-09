import React from 'react';
import "./Header.css"
import Logo from "../../Assets/images/logo.svg"
import Container from '../Container/Container';

const Header = () => {
    return (
        <header className="header-flex">
            <Container>
                <div className="header-logo">
                    <img src={Logo} alt="Logo da empresa Smart-Fit" />
                </div>

                <div className="header-content">
                    <h1>Reabertura smart fit</h1>
                    <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, verifique aqui se sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
                </div>
            </Container>
        </header>
    );
};

export default Header;