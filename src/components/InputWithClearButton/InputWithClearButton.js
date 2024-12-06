import React, { useState } from 'react';
import './InputWithClearButton.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const InputWithClearButton = ({ onInputChange, value, filter }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e) => {
        const value = e.target.value;
        
        // Validación según el filtro
        if (filter === 'filtropInicio') {
            // Permitir solo 4 dígitos numéricos
            if (/^\d{0,4}$/.test(value)) {
                setInputValue(value);
                onInputChange(value);
            }
        } else if (filter === 'filtroComunidad') {
            // Permitir solo letras y un máximo de 30 caracteres
            if (/^[a-zA-Z\s]{0,30}$/.test(value)) {
                setInputValue(value);
                onInputChange(value);
            }
        } else {
            setInputValue(value);
            onInputChange(value);
        }
    };

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
                placeholder={`Buscar por ${filter === 'filtropInicio' ? 'Periodo inicio' : 'Comunidad'}`} 
                aria-label="Buscar" 
                value={inputValue} 
                onChange={handleChange} 
            />
            {inputValue && (
                <span className="input-group-text" onClick={clearInput} style={{ cursor: 'pointer' }}>
                    <i className="bi bi-x-circle-fill" style={{backgroundColor:'green'}}></i> {/* Ícono de "x" para borrar */}
                </span>
            )}
        </div>
    );
};

export default InputWithClearButton;
