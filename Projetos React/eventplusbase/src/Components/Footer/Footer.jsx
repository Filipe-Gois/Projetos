import React from 'react';
import './Footer.css'

const Footer = ({textRights = "Escola Senai de informática 2023"}) => {
    return (
        <footer className='footer-page'>
            <p className='footer-page__rights'>&copy; {textRights}</p>
        </footer>
    );

};

export default Footer;