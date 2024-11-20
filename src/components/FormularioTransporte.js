import React, { useState } from 'react';
import { SelectCombo } from './SelectCombo';
import { Button } from './Boton';

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

  console.log(formularioFormatoField); // Esto debería mostrar "true" cuando formularioForm es true

  return (
    <div className="tarjeta-border px-5">
      <div className="row">
        {/* Columna para centrar el título */}
        <div className="col-12 text-center">
          <h2 id="tituloFormulario">{titulo}</h2>
        </div>
      </div>

      {/* Fila para el label y el botón */}
      {formularioFormatoField && (
        <div className="row">
          <div className="col-12 text-end mt-2">
            <label className="texto-pequeno-negrita mb-1">Agregar datos de un carro registrado</label>
            <Button
              label="Seleccionar carro"
              onClick={() => { console.log('Botón seleccionar carro clickeado'); }}
              className="btn-success"
            />
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-md-6 col-lg-3 col-xxl-2 mt-3">
          <label className="size-font-campo mb-1">Medio de transporte:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-3 mt-3">
          <input
            type="text"
            className="form-control"
            name="medioTransporte"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-1 mt-3">
          <label className="size-font-campo">Marca:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-2 mt-3">
          <input
            type="text"
            className="form-control"
            name="marca"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-1 mt-3">
          <label className="size-font-campo">Modelo:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-3 mt-3">
          <input
            type="text"
            className="form-control"
            name="modelo"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 col-lg-6 col-xxl-2">
          <label className="size-font-campo">Propietario:</label>
        </div>
        <div className="col-md-6 col-lg-6 col-xxl-5">
          <input
            type="text"
            className="form-control"
            name="propietario"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-6 col-lg-3 col-xxl-2">
          <label className="size-font-campo">Capacidad:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-3">
          <input
            type="text"
            className="form-control"
            name="capacidad"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 col-lg-3 col-xxl-2">
          <label className="size-font-campo">Placas o matrícula:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-3">
          <input
            type="text"
            className="form-control"
            name="placas"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-2">
          <label className="size-font-campo">Tipo de transporte:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-5">
          <SelectCombo
            name="tipoTransporte"
            id="tipoTransporte"
            options={opcionesTipoTransporte}
          />
        </div>
      </div>

      {/* Condicional para mostrar el campo de Conductor si 'formularioFormatoField' es true */}
      {formularioFormatoField && (
        <div className="row mt-3">
          <div className="col-md-6 col-lg-3 col-xxl-2">
            <label className="size-font-campo">Conductor:</label>
          </div>
          <div className="col-md-6 col-lg-3 col-xxl-5">
            <input
              type="text"
              className="form-control"
              name="conductor"
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      {/* Condicional para mostrar el botón Agregar si 'formularioFormatoField' es false */}
      {!formularioFormatoField && (
        <div className="text-center mt-4">
          <Button
            label="Agregar"
            onClick={() => { console.log('Botón clickeado'); }}
            className="btn-success"
          />
        </div>
      )}

    </div>
  );
};
