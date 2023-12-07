import React from 'react';
import './FormComponents.css'

export const Input = ({
    type,
    id,
    required,
    additionalClass = '',
    name,
    placeholder,
    manipulationFunction,
    value
}) => {

    return (
        <input
            type={type}
            id={id}
            value={value}
            required={required}
            className={`input-component ${additionalClass}`}
            placeholder={placeholder}
            name={name}
            onChange={manipulationFunction}
            autoComplete='off'
        />
    )
}

export const Button = ({
    textButton, id, name, type, additionalClass = "", className, manipulationFunction
}) => {
    return (
        <button
            type={type}
            name={name}
            id={id}
            additionalClass={additionalClass}
            className={`button-component ${additionalClass}`}
            onClick={manipulationFunction}
        >
            {textButton}
        </button>
    )
}

export const Select = ({
    dados = [],
    id,
    name,
    required,
    additionalClass = "",
    manipulationFunction,
    defaultValue



}) => {
    return (
        <select
            name={name}
            id={id}
            required={required}
            className={`input-component ${additionalClass}`}
            onChange={manipulationFunction}
            value={defaultValue}
        >
            {/* <option value="">Selecione:</option> */} 
            {dados.map(opcao => {
                return <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            })}
        </select>
    )
}

export const SelectTP = ({
    dados = [],
    id,
    name,
    required,
    additionalClass = "",
    manipulationFunction,
    defaultValue



}) => {
    return (
        <select
            name={name}
            id={id}
            required={required}
            className={`input-component ${additionalClass}`}
            onChange={manipulationFunction}
            value={defaultValue}
        >
            <option value="">Selecione:</option>
            {dados.map(opcao => {
                return <option key={opcao.idTipoEvento} value={opcao.idTipoEvento}>{opcao.titulo}</option>
            })}
        </select>
    )
}