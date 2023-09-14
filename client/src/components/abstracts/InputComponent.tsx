// @ts-check

import React, { ChangeEvent } from 'react';

type InputProps = {
  placeholderText: string;
  activityValue: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  required?: boolean;
  autofocus?: boolean;
};

const InputComponent: React.FC<InputProps> = ({
  label,
  handleInputChange,
  activityValue,
  placeholderText,
  name,
  required,
  autofocus,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        placeholder={placeholderText}
        value={activityValue}
        onChange={handleInputChange}
        required={required}
        autoFocus={autofocus}
      />
    </div>
  );
};

export default InputComponent;





/*import React from 'react'

type InputProps = {
    placeholderText: string,
    activityValue: string, 
    handleInputChange: any, 
    name: string,
    label: string
    required?: string,
    autofocus?: string
}

const InputComponent: React.FC<InputProps> = ({ label, handleInputChange, activityValue, placeholderText, name, required, autofocus }) => {
  return (
    <div className="mb-3">
          <label className="form-label">
            {label}
          </label>
          <input
            type="text"
            className="form-control"
            name={name}
            placeholder={placeholderText}
            value={activityValue}
            onChange={handleInputChange}
          />
        </div>
  )
}

export default InputComponent*/
