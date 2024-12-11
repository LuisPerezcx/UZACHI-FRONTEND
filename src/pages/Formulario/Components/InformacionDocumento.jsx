import React, { forwardRef, useState , useImperativeHandle} from 'react'
import { SelectCombo } from '../../../components/SelectCombo'

export const InformacionDocumento = forwardRef((props, ref) => {
    const [formValues, setFormValues] = useState({
        tipoDocumento: '',
        tipoProducto: '',
        tipoGenero: '',
        fechaExpedicion: '',
        horaExpedicion: '',
        fechaVencimiento: '',
        horaVencimiento: '',
      });
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
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualizar los valores del formulario
        setFormValues({
          ...formValues,
          [name]: value,
        });
        // Validar el campo dinámicamente
        validateField(name, value);
    };
  
      
    const validateField = (name, value) => {
        let error = '';        
        if(!value || value==='') error = 'Este campo es obligatorio.';
        
        // Agregar reglas de validación según el campo
        switch(name){
            case 'tipoDocumento':
                if(value === opcionesTipoDocumento[0].value) error = 'Selecciona un tipo de documento';
                break;
            case 'tipoProducto':
                if(value === opcionesTipoProducto[0].value) error = 'Selecciona un tipo de Producto';
                break;
            case 'tipoGenero':
                if(value === opcionesTipoGenero[0].value) error = 'Selecciona un tipo de género';
                break;
            case 'fechaExpedicion':
                if(new Date(value) > new Date()) error = 'La fecha de expedición no puede ser futura.';
                break;
            //todo: hora vencimiento y hora expedicion
            default : 
                //console.log(name);
                break;
        }
        // Actualizar los errores
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error || undefined, // Quitar el error si no existe
        }));
        return error;
    };

    const validateAllFields = () => {
        const newErrors = {};
        Object.entries(formValues).forEach(([name, value]) => {
          const error = validateField(name, value);
          if (error) {
            newErrors[name] = error;
          }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Retorna si no hay errores
      };

    // Exponiendo la función de validación al padre
    useImperativeHandle(ref, () => ({
        getValues: () => {
        const isValid = validateAllFields();
        if (!isValid) {
            throw new Error("Hay errores en la sección información del documento.");
        }
        return formValues;
        },
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
                name="tipoDocumento" 
                id="tipoDocumento" 
                options={opcionesTipoDocumento} 
                value={formValues.tipoDocumento}
                onChange={handleChange}
            />
            {errors.tipoDocumento && <span className="text-danger">{errors.tipoDocumento}</span>}
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <label className='form-label'>Tipo de producto:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-4 mt-3'>
                <SelectCombo 
                    para="ciudad" 
                    name="tipoProducto" 
                    id="tipoProducto" 
                    options={opcionesTipoProducto} 
                    value={formValues.tipoProducto}
                    onChange={handleChange}
                />
                {errors.tipoProducto && <span className="text-danger">{errors.tipoProducto}</span>}
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-2 mt-3'>
                <label className='form-label'>Tipo de género:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-4 mt-3'>
                <SelectCombo 
                    para="ciudad" 
                    name="tipoGenero" 
                    id="tipoGenero" 
                    options={opcionesTipoGenero} 
                    value={formValues.tipoGenero}
                    onChange={handleChange}
                />
                {errors.tipoGenero && <span className='text-danger'>{errors.tipoGenero}</span>}
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Fecha de expedición:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <input type="date" 
                className="form-control" 
                id="calendarInputExp"
                name="fechaExpedicion"
                value={formValues.fechaExpedicion}
                onChange={handleChange}
                />
                {errors.fechaExpedicion && <span className='text-danger'>{errors.fechaExpedicion}</span>}
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora expedición:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-1 mt-3'>
                <input type="time" 
                className="form-control" 
                id="timeInputExp"
                name='horaExpedicion'
                value={formValues.horaExpedicion}
                onChange={handleChange}/>
                {errors.horaExpedicion && <span className='text-danger'>{errors.horaExpedicion}</span>}
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Fecha vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-3 mt-3'>
                <input type="date" 
                className="form-control" 
                id="calendarInputVencimiento"
                name='fechaVencimiento'
                value={formValues.fechaVencimiento}
                onChange={handleChange}
                />
                {errors.fechaVencimiento && <span className='text-danger'>{errors.fechaVencimiento}</span>}
            </div>
            <div className='col-md-6 col-lg-3  col-xxl-2 mt-3'>
                <label className='form-label'>Hora vencimiento:</label>
            </div>
            <div className='col-md-6 col-lg-3 col-xxl-1 mt-3'>
                <input type="time" 
                className="form-control" 
                id="timeInput" 
                name='horaVencimiento'
                value={formValues.horaVencimiento}
                onChange={handleChange}
                />
                {errors.horaVencimiento && <span className='text-danger'>{errors.horaVencimiento}</span>}
            </div>
        </div>
    </div>
  );
});