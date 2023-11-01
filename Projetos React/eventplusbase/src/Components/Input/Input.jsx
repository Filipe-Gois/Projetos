import React, { useState } from 'react';
import './Input.css'

const Input = (props) => {

    const [meuValor, setMeuValor] = useState('Filipe');

    return (
        <>
            <input type={props.tipo}
                id={props.id}
                name={props.nome}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(e) => {
                    //setMeuValor(e.target.value)//valor atual da constante

                    props.fnAltera(e.target.value)
                }} />
                <span>{props.value}</span>
        </>
    );
};

export default Input;