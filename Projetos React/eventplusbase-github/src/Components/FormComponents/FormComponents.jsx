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