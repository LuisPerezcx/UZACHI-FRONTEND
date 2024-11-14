import React from 'react';

export const SelectCombo = ({ label, para, name, id, options }) => {
  return (
    <div className='d-flex align-items-center'>
      <label className='size-font-campo me-5' htmlFor={para}>{label}</label>
      <select className='form-select' style={{width: '16rem'}} id={id} name={name}>
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <option
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} 
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            key={index} value={option.value}>{option.label}</option>
          ))
        ) : (
          <option value="">No hay opciones disponibles</option>
        )}
      </select>
    </div>
  );
};
