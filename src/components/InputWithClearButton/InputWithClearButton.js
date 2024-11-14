import React, { useState } from 'react';
import './InputWithClearButton.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const InputWithClearButton = ({ onInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onInputChange(value);
    }

    const clearInput = () => {
        setInputValue('');
        onInputChange('');
    };

    return (
        <div className="input-group mb-3">
            <span className="input-group-text">
                <i className="bi bi-search"></i>
            </span>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar" 
                aria-label="Buscar" 
                value={inputValue} 
                onChange={handleChange} 
            />
            {inputValue && (
                <span className="input-group-text" onClick={clearInput} style={{ cursor: 'pointer' }}>
                    <i className="bi bi-x-circle-fill" style={{backgroundColor:'color-verde'}}></i> {/* Ícono de "x" para borrar */}
                </span>
            )}
        </div>
    );
};

export default InputWithClearButton;
