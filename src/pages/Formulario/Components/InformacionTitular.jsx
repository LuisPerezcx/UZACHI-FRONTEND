import React, { useState, forwardRef, useImperativeHandle } from 'react';

export const InformacionTitular = forwardRef((props, ref) => {
    const [formValues, setFormValues] = useState({
        nombre: '',
        domicilio: '',
        curp: '',
        siem: '',
        fecha: '',
        oficio: '',
        cantidad: '',
        folios: '',
        unidad: '',
        vencimiento: '',
    });
    const [errors, setErrors] = useState({}); // Manejo de mensajes de error específicos por campo


    const handleChange = (e) => {
        const {name, value} = e.target;
        //actualizar valores del formulario
        if(name==='curp') value?.toString().trim().toUpperCase();
        setFormValues({
            ...formValues,
            [name]: value,
        });
        //validar el campo dinámicamente
        validateField(name, value);
    }


    const validateField = (name, value) => {
        let error = '';
        if(!value || value === '') error = 'Este campo es obligatorio.';

        switch (name) {
            case "nombre":
            case "domicilio":
            case "siem":
            case "unidad":
                // Validar que no contengan números
                if (/\d/.test(value)) error = 'Este campo solo permite letras.'
                break;
            case "oficio":
            case "cantidad":
            case "folios":
                // Validar solo números positivos
                if (!/^\d*$/.test(value)) error = 'Este campo solo permite números positivos.';
                break;
            case "curp": 
                const curpRegex = /^[A-Z]{4}\d{6}[HM][A-Z]{2}[A-Z]{3}[A-Z\d]{2}$/;
    
                if (!curpRegex.test(value.toUpperCase())) {
                    error = 'Formato de CURP incorrecto. Revisa los caracteres ingresados.';
                }
                break;
            
            default:
                break;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error || undefined,
        }));

        return error;
    }

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

    useImperativeHandle(ref, () => ({
        getValues: () => {
        const isValid = validateAllFields();
        if (!isValid) {
            throw new Error("Hay errores en la sección información del titular.");
        }
        return formValues;
        },
    }));

    return (
        <div className="tarjeta-border mt-5 p-5">
            <h5 className="card-title size-font-title" style={{ color: 'var(--color-gris)', fontWeight: 'bold' }}>
                Información del titular
            </h5>
            <br />
            <form>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            value={formValues.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            size="sm"
                            className="form-control"
                            maxLength={100}
                        />
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="domicilio" className="form-label">
                            Domicilio: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="domicilio"
                            id="domicilio"
                            value={formValues.domicilio}
                            onChange={handleChange}
                            placeholder="Domicilio"
                            size="sm"
                            className="form-control"
                            maxLength={200}
                        />
                        {errors.domicilio && <span className='text-danger'>{errors.domicilio}</span>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="curp" className="form-label">
                            CURP:
                        </label>
                        <input
                            type="text"
                            name="curp"
                            id="curp"
                            value={formValues.curp}
                            onChange={handleChange}
                            placeholder="CURP"
                            size="sm"
                            className="form-control"
                            maxLength={18}
                        />
                        {errors.curp && <span className='text-danger'>{errors.curp}</span>}
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="siem" className="form-label">
                            Registro SIEM:
                        </label>
                        <input
                            type="text"
                            name="siem"
                            id="siem"
                            value={formValues.siem}
                            onChange={handleChange}
                            placeholder="Registro SIEM"
                            size="sm"
                            className="form-control"
                            maxLength={15}
                        />
                        {errors.siem && <span className='text-danger'>{errors.siem}</span>}
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="fecha" className="form-label">
                            Fecha: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="date"
                            name="fecha"
                            id="fecha"
                            value={formValues.fecha}
                            onChange={handleChange}
                            size="sm"
                            className="form-control"
                        />
                        {errors.fecha && <span className='text-danger'>{errors.fecha}</span>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="oficio" className="form-label">
                            Número de oficio de autorización: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="oficio"
                            id="oficio"
                            value={formValues.oficio}
                            onChange={handleChange}
                            placeholder="Número de oficio"
                            size="sm"
                            className="form-control"
                        />
                        {errors.oficio && <span className='text-danger'>{errors.oficio}</span>}
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="cantidad" className="form-label">
                            Cantidad que ampara: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="cantidad"
                            id="cantidad"
                            value={formValues.cantidad}
                            onChange={handleChange}
                            placeholder="Cantidad"
                            size="sm"
                            className="form-control"
                        />
                        {errors.cantidad && <span className='text-danger'>{errors.cantidad}</span>}
                    </div>
                    <div className="col-md-3 mt-3">
                        <label htmlFor="folios" className="form-label">
                            Folios autorizados: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="folios"
                            id="folios"
                            value={formValues.folios}
                            onChange={handleChange}
                            placeholder="Folios autorizados"
                            size="sm"
                            className="form-control"
                        />
                        {errors.folios && <span className='text-danger'>{errors.folios}</span>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="unidad" className="form-label">
                            Unidad de medida: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="unidad"
                            id="unidad"
                            value={formValues.unidad}
                            onChange={handleChange}
                            placeholder="Unidad de medida"
                            size="sm"
                            className="form-control"
                        />
                        {errors.unidad && <span className='text-danger'>{errors.unidad}</span>}
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="vencimiento" className="form-label">
                            Fecha vencimiento: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="date"
                            name="vencimiento"
                            id="vencimiento"
                            value={formValues.vencimiento}
                            onChange={handleChange}
                            size="sm"
                            className="form-control"
                        />
                        {errors.vencimiento && <span className='text-danger'>{errors.vencimiento}</span>}
                    </div>
                </div>
            </form>
        </div>
    );
});
