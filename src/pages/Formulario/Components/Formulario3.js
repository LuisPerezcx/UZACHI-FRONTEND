import React, { useState } from 'react';
import '../../../styles/Formulario3.css';
import {CalculadoraEspecial}  from '../../../components/Calculadora/CalculadoraEspecial';
import {CalculadoraEstandar} from '../../../components/Calculadora/CalculadoraEstandar';
export const Formulario3 = () => {
  // Estados para manejar datos en ambas secciones
  const [numeroCantidad, setNumeroCantidad] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [volumenPeso, setVolumenPeso] = useState('');
  const [cantidadLetra, setCantidadLetra] = useState('');
  const [tipo, setTipo] = useState('Especial');

  const [saldoAnterior, setSaldoAnterior] = useState('');
  const [cantidadAmparada, setCantidadAmpara] = useState('');
  const [saldoSiguiente, setSaldoSiguiente] = useState('');

  // Estado para controlar la calculadora activa
  const [calculadoraActiva, setCalculadoraActiva] = useState(null);

  return (
    <>
      <div className='row'>
        {/* Sección Información sobre la materia */}
        <div className='col-lg-7 mt-5'>
          <div className='tarjeta-border p-5'>
            <div className="materia-section">
              <h2>Información sobre la materia.</h2>
              <div className='row'>
                <div className='col'>
                  <div className='row'>
                    <div className="formulario3-field">
                      <label>Número y/o cantidad:</label>
                      <input
                        type="text"
                        value={numeroCantidad}
                        onChange={(e) => setNumeroCantidad(e.target.value)}
                      />
                    </div>
                    <div className="formulario3-field">
                      <label>Unidad de medida:</label>
                      <input
                        type="text"
                        value={unidadMedida}
                        onChange={(e) => setUnidadMedida(e.target.value)}
                      />
                    </div>
                    <div className="formulario3-field">
                      <label>Volumen y/o peso amparado:</label>
                      <input
                        type="text"
                        value={volumenPeso}
                        onChange={(e) => setVolumenPeso(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='row' style={{ height: '100%' }}>
                    <div className="col formulario3-field">
                      <label>Agregar descripción:</label>
                      <textarea placeholder="Escribe aquí..." style={{ height: '100%' }} rows="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formulario3-field">
                <label>Cantidad que ampara este documento con letra:</label>
                <input
                  type="text"
                  value={cantidadLetra}
                  onChange={(e) => setCantidadLetra(e.target.value)}
                />
              </div>

              <div className="formulario3-actions">
                <button onClick={() => setCalculadoraActiva(tipo)}>Abrir Calculadora</button>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="custom-select"
                >
                  <option value="tipo" className="custom-option">
                    Seleccione el tipo
                  </option>
                  <option value="Especial" className="custom-option">
                    Especial
                  </option>
                  <option value="Volumen A & B" className="custom-option">
                    Volumen "A" & "B"
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Información sobre saldos */}
        <div className='col-lg-5 mt-5'>
          <div className="tarjeta-border card-formulario3 p-5">
            <h2>Información sobre saldos</h2>
            <div className="formulario3-field">
              <label>Saldo disponible según el documento anterior:</label>
              <input
                type="text"
                value={saldoAnterior}
                onChange={(e) => setSaldoAnterior(e.target.value)}
              />
            </div>
            <div className="formulario3-field">
              <label>Cantidad que ampara este documento:</label>
              <input
                type="text"
                value={cantidadAmparada}
                onChange={(e) => setCantidadAmpara(e.target.value)}
              />
            </div>
            <div className="formulario3-field">
              <label>Saldo que pasa al siguiente documento:</label>
              <input
                type="text"
                value={saldoSiguiente}
                onChange={(e) => setSaldoSiguiente(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    
      {/* Render de calculadora basado en el tipo */}
      {calculadoraActiva === 'Especial' && <CalculadoraEspecial />}
      {calculadoraActiva === 'Volumen A & B' && <CalculadoraEstandar />}
    </>
  );
};
