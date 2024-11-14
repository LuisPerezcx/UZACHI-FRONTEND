import React from 'react'
import { SelectCombo } from './SelectCombo'

export const InformacionDocumento = () => {

    const opcionesTipoDocumento = [
        { value: 'seleccion', label: 'Selecciona un tipo de documento' },
        { value: 'remision', label: 'Remision' },
        { value: 'reembarque', label: 'Reembarque' }
      ];

    const opcionesTipoProducto = [
        { value: 'seleccion', label: 'Selecciona un tipo de documento' },
        { value: 'aserrada', label: 'Aserrada' },
        { value: 'rollo', label: 'Rollo' }
    ];

    const opcionesTipoGenero = [
        { value: 'seleccion', label: 'Selecciona un tipo de documento' },
        { value: 'pino', label: 'Pino' },
        { value: 'encino', label: 'Encino' }
    ];

    const fechaSeleccionada = (event) => {
        console.log("Fecha seleccionada:", event.target.value);
      };

    const horaSeleccionada = (event) => {
        console.log("Hora seleccionada: ", event.target.value);
    };

  return (
    <div className='tarjeta-border px-5'> 
        <div className='row'>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <label className='size-font-campo'>Tipo de documento:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
            <SelectCombo 
                para="ciudad" 
                name="ciudad" 
                id="ciudad" 
                options={opcionesTipoDocumento} 
            />
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <label className='size-font-campo'>Tipo de producto:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <SelectCombo 
                    para="ciudad" 
                    name="ciudad" 
                    id="ciudad" 
                    options={opcionesTipoProducto} 
                />
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <label className='size-font-campo'>Tipo de genero:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <SelectCombo 
                    para="ciudad" 
                    name="ciudad" 
                    id="ciudad" 
                    options={opcionesTipoGenero} 
                />
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-md-6 col-lg-3  col-xxl-2'>
                <p className='size-font-campo'>Fecha de exedicion:</p>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-1'>
                <input type="date" class="form-control" id="calendarInput" onChange={fechaSeleccionada}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2'>
                <p className='size-font-campo'>Hora expedicion:</p>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-1'>
                <input type="time" class="form-control" id="timeInput"  onChange={horaSeleccionada}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2'>
                <p className='size-font-campo'>Fecha vencimiento:</p>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-1'>
                <input type="date" class="form-control" id="calendarInput" onChange={fechaSeleccionada}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2'>
                <p className='size-font-campo'>Hora vencimiento:</p>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-1'>
                <input type="time" class="form-control" id="timeInput" onChange={horaSeleccionada}/>
            </div>
        </div>
    </div>
  )
}