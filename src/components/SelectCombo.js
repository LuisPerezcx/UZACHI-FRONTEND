import React from 'react';

export const SelectCombo = ({ label, para, name, id, options, onChange = null }) => {
  return (
    <div className='d-flex align-items-center ' style={{ width: '100%'}}>
      <select className='form-select' id={id} name={name} onChange={onChange}>
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <option
            // onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} 
            // onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            key={index} value={option.value}>{option.label}</option>
          ))
        ) : (
          <option value="">No hay opciones disponibles</option>
        )}
      </select>
    </div>
  );
};
