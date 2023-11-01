import React, { useState } from 'react';
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

const TestePage = () => {

    const [total, setTotal] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();

    const handleCalcular = (e) => {
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));  //chamar no submit do form
    }


    return (
        <form onSubmit={handleCalcular}>

            <h1>Página de testes</h1>
            <h2>Calculator</h2>
            <Input
                tipo="number"
                id="numero1"
                nome="numero1"
                placeholder="Primeiro número."
                value={n1}
                fnAltera={setN1}
            />
            <Input
                tipo="number"
                id="numero2"
                nome="numero2"
                placeholder="Segundo número."
                value={n2}
                fnAltera={setN2}
            />

            <Button
                textoBotao="Somar"
                type="submit"
                id="botaoSomar" />
            <p>Resultado: <strong>{total}</strong></p>
        </form>
    );
};

export default TestePage;