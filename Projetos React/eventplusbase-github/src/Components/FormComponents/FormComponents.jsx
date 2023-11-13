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