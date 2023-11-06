import React from 'react';
import './Button.css'

const Button = ({ id, type, textoBotao })  => {
    return (
        <>
            <button id={id} type={type}>{textoBotao}</button>
        </>
    );
};

export default Button;