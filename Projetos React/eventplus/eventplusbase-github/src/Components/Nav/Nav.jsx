import React, { useContext } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

import logoMobile from '../../assets/images/logo-white.svg';
import logoDesktop from '../../assets/images/logo-pink.svg';
import { UserContext } from '../../Context/AuthContext';

const Nav = ({ setExibeNavbar, exibeNavbar }) => {


    const { userData } = useContext(UserContext)

    return (
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
            <span
                className='navbar__close'
                onClick={() => { setExibeNavbar(false) }}
            >
                x
            </span>

            <Link to="/">
                <img
                    onClick={() => setExibeNavbar(false)}
                    className='eventlogo__logo-image'
                    src={window.innerWidth >= 992 ? logoDesktop : logoMobile}
                    alt="Event Plus Logo"
                />
            </Link>

            <div className='navbar__items-box'>
                <Link to="/" className='navbar__item' onClick={() => setExibeNavbar(false)}>Home</Link>

                {userData.role === "Administrador" ? ( //if
                    <>
                        <Link to="/tipo-eventos" className='navbar__item' onClick={() => setExibeNavbar(false)}>Tipo Eventos</Link>
                        <Link to="/eventos" className='navbar__item' onClick={() => setExibeNavbar(false)}>Eventos</Link>
                    </>
                ) : (//if
                    userData.role == "Comum" ? (
                        <Link to="/eventos-aluno" className='navbar__item' onClick={() => setExibeNavbar(false)}>Meus Eventos</Link>
                    )
                        : null)}




                {/* <Link to="/login" className='navbar__item' onClick={() => setExibeNavbar(false)}>Login</Link> */}
            </div>
        </nav>
    );
};

export default Nav;