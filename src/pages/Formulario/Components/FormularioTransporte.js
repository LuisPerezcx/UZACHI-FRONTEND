import React, { useState } from 'react';
import { SelectCombo } from '../../../components/SelectCombo';
import { Button } from '../../../components/Boton';

export const FormularioTransporte = ({ titulo, formularioForm }) => {
  const [formularioFormatoField, setFormularioFormatoField] = useState(formularioForm);

  const opcionesTipoTransporte = [
    { value: '', label: 'Selecciona un tipo de transporte' },
    { value: 'torton', label: 'Tortón' },
    { value: 'trocer', label: 'Trocer' },
  ];

  const handleInputChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);
  };

  const seleccionarCarro = () => {
    console.log('Seleccionar carro clickeado');
  };

  return (
    <div className="tarjeta-border px-5 mt-5 mb-5">
      {/* Título del formulario */}
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h5 className="card-title size-font-title" style={{color:'var(--color-gris)',fontWeight:'bold'}}>
            {titulo}
          </h5>
        </div>
      </div>

      {/* Agregar datos de carro registrado */}
      {formularioFormatoField && (
        <div className="row">
          <div className="col-12 text-end mt-2">
          <span className="me-2">Agregar datos de un carro registrado</span>
            <Button label="Seleccionar carro" onClick={seleccionarCarro} className="btn-success" />
          </div>
        </div>
      )}

      {/* Formulario */}
      <form>
        {/* Primera fila: 3 columnas */}
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Medio de transporte:</label>
            <input
              type="text"
              className="form-control"
              name="medioTransporte"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Marca:</label>
            <input
              type="text"
              className="form-control"
              name="marca"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Modelo:</label>
            <input
              type="text"
              className="form-control"
              name="modelo"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Segunda fila: 4 columnas */}
        <div className="row g-3 mt-3">
          <div className="col-md-3">
            <label className="form-label">Propietario:</label>
            <input
              type="text"
              className="form-control"
              name="propietario"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Capacidad:</label>
            <input
              type="text"
              className="form-control"
              name="capacidad"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Placas o matrícula:</label>
            <input
              type="text"
              className="form-control"
              name="placas"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Tipo de transporte:</label>
            <SelectCombo
              name="tipoTransporte"
              id="tipoTransporte"
              options={opcionesTipoTransporte}
            />
          </div>
        </div>

        {/* Campo conductor (condicional) */}
        {formularioFormatoField && (
          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <label className="form-label">Conductor:</label>
              <input
                type="text"
                className="form-control"
                name="conductor"
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {/* Botón Agregar (condicional) */}
        {!formularioFormatoField && (
          <div className="row mt-4">
            <div className="col-12 text-center">
              <Button
                label="Agregar"
                onClick={() => console.log('Botón agregar clickeado')}
                className="btn-success"
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
