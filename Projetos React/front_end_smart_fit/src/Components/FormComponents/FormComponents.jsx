import React from "react";
import "./FormComponents.css";

export const Form = ({
  children,
  action = "",
  onSubmit = null,
  additionalClass = "",
}) => {
  return (
    <form
      className={`form-component ${additionalClass}`}
      onSubmit={onSubmit}
      action={action}
    >
      {children}
    </form>
  );
};

export const Input = ({
  type,
  id,
  value,
  required,
  name,
  placeholder,
  manipulationFunction,
  additionalClass = "",
  checked,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      required={required ? "required" : ""}
      className={`input-component ${additionalClass}`}
      placeholder={placeholder}
      onChange={manipulationFunction}
      autoComplete="off"
      checked={checked}
    />
  );
};

export const Button = ({
  id,
  name,
  type,
  additionalClass,
  manipulationFunction,
  textButton,
}) => {
  return (
    <button
      id={id}
      name={name}
      type={type}
      className={`button-component ${additionalClass}`}
      onClick={manipulationFunction}
    >
      {textButton}
    </button>
  );
};

export const Label = ({ htmlFor, children, additionalClass = "", id }) => {
  return (
    <label
      id={id}
      className={`label-component ${additionalClass}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
