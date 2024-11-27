    import React from 'react'
import { SelectCombo } from '../../../components/SelectCombo'

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
        <h5 className="card-title size-font-title" style={{color:'var(--color-gris)',fontWeight:'bold'}}>Información del documento</h5> <br/>
        <div className='row'>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <label className='form-label'>Tipo de documento:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-4 mt-3'>
            <SelectCombo 
                para="ciudad" 
                name="ciudad" 
                id="ciudad" 
                options={opcionesTipoDocumento} 
            />
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <label className='form-label'>Tipo de producto:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-4 mt-3'>
                <SelectCombo 
                    para="ciudad" 
                    name="ciudad" 
                    id="ciudad" 
                    options={opcionesTipoProducto} 
                />
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <label className='form-label'>Tipo de genero:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-4 mt-3'>
                <SelectCombo 
                    para="ciudad" 
                    name="ciudad" 
                    id="ciudad" 
                    options={opcionesTipoGenero} 
                />
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Fecha de exedicion:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <input type="date" class="form-control" id="calendarInput" onChange={fechaSeleccionada}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora expedicion:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-1 mt-3'>
                <input type="time" class="form-control" id="timeInput"  onChange={horaSeleccionada}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Fecha vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-3 mt-3'>
                <input type="date" class="form-control" id="calendarInput" onChange={fechaSeleccionada}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-1 mt-3'>
                <input type="time" class="form-control" id="timeInput" onChange={horaSeleccionada}/>
            </div>
        </div>
    </div>
  )
}