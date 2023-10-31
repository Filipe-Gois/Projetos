import React from 'react';
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header';
const TestePage = () => {
    return (
        <form>
            <Header />
            <h1>Página de testes</h1>
            <h2>Calculator</h2>
            <Input />
            <Input />

            <Button />
        </form>
    );
};

export default TestePage;