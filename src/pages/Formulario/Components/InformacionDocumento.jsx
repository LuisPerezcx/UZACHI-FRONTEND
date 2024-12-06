    import React, { useState } from 'react'
import { SelectCombo } from '../../../components/SelectCombo'

export const InformacionDocumento = () => {

    const [fechaExpedicion, setFechaExpedicion] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [horaExpedicion, setHoraExpedicion] = useState('');
    const [horaVencimiento, sethoraVencimiento] = useState('');
    const [error, setError] = useState(""); 

    const opcionesTipoDocumento = [
        { value: 'seleccion', label: 'Selecciona un tipo de documento' },
        { value: 'remision', label: 'Remision' },
        { value: 'reembarque', label: 'Reembarque' }
      ];

    const opcionesTipoProducto = [
        { value: 'seleccion', label: 'Selecciona el tipo de producto' },
        { value: 'aserrada', label: 'Aserrada' },
        { value: 'rollo', label: 'Rollo' }
    ];

    const opcionesTipoGenero = [
        { value: 'seleccion', label: 'Selecciona el tipo de genero' },
        { value: 'pino', label: 'Pino' },
        { value: 'encino', label: 'Encino' }
    ];

    const fechaSeleccionada = (event) => {
        console.log("Fecha seleccionada:", event.target.value);
      };

    const horaSeleccionada = (event) => {
        console.log("Hora seleccionada: ", event.target.value);
    };
 // Función para manejar el cambio de fecha de expedición
 const handleFechaExpedicion = (event) => {
    setFechaExpedicion(event.target.value);
    validarFechaYHora(event.target.value, horaExpedicion, fechaVencimiento, horaVencimiento);
  };

  // Función para manejar el cambio de hora de expedición
  const handleHoraExpedicion = (event) => {
    setHoraExpedicion(event.target.value);
    validarFechaYHora(fechaExpedicion, event.target.value, fechaVencimiento, horaVencimiento);
  };

  // Función para manejar el cambio de fecha de vencimiento
  const handleFechaVencimiento = (event) => {
    setFechaVencimiento(event.target.value);
    validarFechaYHora(fechaExpedicion, horaExpedicion, event.target.value, horaVencimiento);
  };

  // Función para manejar el cambio de hora de vencimiento
  const handleHoraVencimiento = (event) => {
    sethoraVencimiento(event.target.value);
    validarFechaYHora(fechaExpedicion, horaExpedicion, fechaVencimiento, event.target.value);
  };

  // Función de validación de fecha y hora
  const validarFechaYHora = (fechaExpedicion, horaExpedicion, fechaVencimiento, horaVencimiento) => {
    const fechaExp = new Date(`${fechaExpedicion}T${horaExpedicion}`);
    const fechaVenc = new Date(`${fechaVencimiento}T${horaVencimiento}`);

    let errorMensaje = '';

    // Validar si la fecha de vencimiento es antes de la fecha de expedición
    if (fechaVenc < fechaExp) {
      errorMensaje = 'La fecha de vencimiento no puede ser antes que la fecha de expedición.';
    }

    // Validar si la diferencia entre la fecha de vencimiento y la hora de expedición excede las 24 horas
    if (fechaVenc - fechaExp > 24 * 60 * 60 * 1000) {
      errorMensaje = 'La fecha y hora de vencimiento no puede ser más de 24 horas después de la expedición.';
    }

    setError(errorMensaje);
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
                <label className='form-label'>Fecha de epxedicion:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <input type="date" class="form-control" id="calendarInput" onChange={handleFechaExpedicion}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora expedicion:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-1 mt-3'>
                <input type="time" class="form-control" id="timeInput"  onChange={handleHoraExpedicion}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Fecha vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-3 mt-3'>
                <input type="date" class="form-control" id="calendarInput" onChange={handleFechaVencimiento}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-1 mt-3'>
                <input type="time" class="form-control" id="timeInput" onChange={handleHoraVencimiento}/>
            </div>
        </div>
    </div>
  )
}