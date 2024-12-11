import React, { forwardRef, useState , useImperativeHandle} from 'react'
import { SelectCombo } from '../../../components/SelectCombo'



export const InformacionDocumento = ({datos, actualizarDatos}) => {

    const [fechaExpedicion, setFechaExpedicion] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [horaExpedicion, setHoraExpedicion] = useState('');
    const [horaVencimiento, setHoraVencimiento] = useState('');


    const opcionesTipoDocumento = [
        { value: 'seleccion', label: 'Selecciona un tipo de documento' },
        { value: 'remision', label: 'Remisión' },
        { value: 'reembarque', label: 'Reembarque' }
      ];

    const opcionesTipoProducto = [
        { value: 'seleccion', label: 'Selecciona el tipo de producto' },
        { value: 'aserrada', label: 'Aserrada' },
        { value: 'rollo', label: 'Rollo' }
    ];

    const opcionesTipoGenero = [
        { value: 'seleccion', label: 'Selecciona el tipo de género' },
        { value: 'pino', label: 'Pino' },
        { value: 'encino', label: 'Encino' }
    ];

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        actualizarDatos({
          fechaExpedicion,
          horaExpedicion,
          fechaVencimiento,
          horaVencimiento,
          tipoDocumento: selectedValue
        });
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
                <label className='form-label'>Tipo de género:</label>
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
                <label className='form-label'>Fecha de expedición:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <input type="date" 
                class="form-control" 
                id="calendarInput"
                value={fechaExpedicion}
                onChange={(e) => {
                setFechaExpedicion(e.target.value);
                handleChange();
                }}
                />
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora expedición:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-1 mt-3'>
                <input type="time" 
                class="form-control" 
                id="timeInput"  
                value={horaExpedicion}
                onChange={(e) => {
                setHoraExpedicion(e.target.value);
                handleChange();
                }}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Fecha vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-3 mt-3'>
                <input type="date" 
                class="form-control" 
                id="calendarInput"
                value={fechaVencimiento}
                onChange={(e) => {
                  setFechaVencimiento(e.target.value);
                  handleChange();
                }}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-1 mt-3'>
                <input type="time" 
                class="form-control" 
                id="timeInput" 
                value={horaVencimiento}
                onChange={(e) => {
                  setHoraVencimiento(e.target.value);
                  handleChange();
                }}/>
            </div>
        </div>
    </div>
  )
}