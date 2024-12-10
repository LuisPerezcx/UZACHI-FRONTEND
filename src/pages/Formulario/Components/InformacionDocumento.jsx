import React, { forwardRef, useState , useImperativeHandle} from 'react'
import { SelectCombo } from '../../../components/SelectCombo'


//todo:
export const InformacionDocumento = forwardRef((props, ref) => {
    const [fechaExpedicion, setFechaExpedicion] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [horaExpedicion, setHoraExpedicion] = useState('');
    const [horaVencimiento, setHoraVencimiento] = useState('');
    const [errors, setErrors] = useState({}); // Para manejar los errores por campo
  
    const opcionesTipoDocumento = [
      { value: 'seleccion', label: 'Selecciona un tipo de documento' },
      { value: 'remision', label: 'Remisión' },
      { value: 'reembarque', label: 'Reembarque' },
    ];
  
    const opcionesTipoProducto = [
      { value: 'seleccion', label: 'Selecciona el tipo de producto' },
      { value: 'aserrada', label: 'Aserrada' },
      { value: 'rollo', label: 'Rollo' },
    ];
  
    const opcionesTipoGenero = [
      { value: 'seleccion', label: 'Selecciona el tipo de género' },
      { value: 'pino', label: 'Pino' },
      { value: 'encino', label: 'Encino' },
    ];
  
    // Función de validación
    const validate = () => {
        const newErrors = {};

        if (!fechaExpedicion) newErrors.fechaExpedicion = 'La fecha de expedición es obligatoria.';
        if (!fechaVencimiento) newErrors.fechaVencimiento = 'La fecha de vencimiento es obligatoria.';
        if (!horaExpedicion) newErrors.horaExpedicion = 'La hora de expedición es obligatoria.';
        if (!horaVencimiento) newErrors.horaVencimiento = 'La hora de vencimiento es obligatoria.';
    
        setErrors(newErrors);
    
        // Devuelve true si no hay errores
        return Object.keys(newErrors).length === 0;
    };
  
    // Exponiendo la función de validación al padre
    useImperativeHandle(ref, () => ({
      validate,
      getValues: () => ({
        fechaExpedicion,
        fechaVencimiento,
        horaExpedicion,
        horaVencimiento,
      }),
    }));

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
                onChange={(e) => setFechaExpedicion(e.target.value)}
                />
                {errors.fechaExpedicion && <span className='text-danger'>{errors.fechaExpedicion}</span>}
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora expedición:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-1 mt-3'>
                <input type="time" 
                class="form-control" 
                id="timeInput"  
                value={horaExpedicion}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Fecha vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-3 mt-3'>
                <input type="date" 
                class="form-control" 
                id="calendarInput"
                value={fechaVencimiento}/>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-1 mt-3'>
                <input type="time" 
                class="form-control" 
                id="timeInput" 
                value={horaVencimiento}/>
            </div>
        </div>
    </div>
  );
});