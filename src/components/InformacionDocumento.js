import React from 'react'
import { SelectCombo } from './SelectCombo'

export const InformacionDocumento = () => {

    const opcionesTipoDocumento = [
        { value: 'seleccion', label: 'Selecciona un tipo de documento' },
        { value: 'remision', label: 'Remision' },
        { value: 'reembarque', label: 'Reembarque' }
      ];

  return (
    <div className='tarjeta-border'> 
        <div className='row mx-5'>
            <div className='col'>
                <label className='size-font-campo'>Tipo de documento:</label>
            </div>
            <div className='col'>
            <SelectCombo 
                // label="Tipo de documento:" 
                para="ciudad" 
                name="ciudad" 
                id="ciudad" 
                options={opcionesTipoDocumento} 
            />
            </div>
            <div className='col'>
                <label className='size-font-campo'>Tipo de producto:</label>
            </div>
            <div className='col'>
                <SelectCombo 
                    // label="Tipo de producto:" 
                    para="ciudad" 
                    name="ciudad" 
                    id="ciudad" 
                    options={opcionesTipoDocumento} 
                />
            </div>
        </div>
        <div className='row mx-5'>
            <div className='col'>
                <label className='size-font-campo'>Tipo de producto:</label>
            </div>
            <div className='col'>
                <SelectCombo 
                    // label="Tipo de producto:" 
                    para="ciudad" 
                    name="ciudad" 
                    id="ciudad" 
                    options={opcionesTipoDocumento} 
                />
            </div>
            <div className='col'>
                <label className='size-font-campo'>Tipo de producto:</label>
            </div>
            <div className='col'>
                <input></input>
            </div>
        </div>
    </div>
  )
}
