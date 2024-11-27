import React from 'react';

export const Button = ({ label, onClick, className = '', disabled = false }) => {
    return (
        <button
            // Evento que se ejecuta al hacer clic en el botón
            onClick={onClick}
            className={`btn ${className} ${disabled ? 'btn-disabled' : ''}`}

            // Si la prop 'disabled' es true, el botón estará deshabilitado.
            disabled={disabled}
        >
            {label}
        </button>
    );
};

/*
 Props:
- label: Texto que se mostrará en el botón.
- onClick: Función que se ejecutará cuando el botón sea clicado.
- className: Clases adicionales para personalizar el estilo del botón.
- disabled: Booleano que indica si el botón debe estar deshabilitado. 
*/