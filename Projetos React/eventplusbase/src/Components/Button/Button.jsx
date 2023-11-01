import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <>
            <button id={props.id} type={props.type}>{props.textoBotao}</button>
        </>
    );
};

export default Button;