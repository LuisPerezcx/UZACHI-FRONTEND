import React, { useState } from 'react';
import '../styles/Formulario3.css';

function Formulario3() {
  // Estados para manejar datos en ambas secciones
  const [numeroCantidad, setNumeroCantidad] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [volumenPeso, setVolumenPeso] = useState('');
  const [cantidadLetra, setCantidadLetra] = useState('');
  const [tipo, setTipo] = useState('Especial');

  const [saldoAnterior, setSaldoAnterior]= useState(''); 
  const [cantidadAmparada, setCantidadAmpara]= useState('');
  const [saldoSiguiente, setSaldoSiguiente]= useState('');

  // Función para calcular saldo
  const calcularSaldo = () => {
    return saldoAnterior + cantidadAmparada;
  };

  const calcular = () => {
    alert('Realizando cálculo...');
  };

  return (
    <div className="formulario3-container">
      {/* Contenedor*/}
      <div className="formulario3-sections">
        {/* Sección Información sobre la materia */}
        <div className="formulario3-section materia-section">
          <h2>Información sobre la materia.</h2>
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
          <div className="formulario3-field">
            <label>Cantidad que ampara este documento con letra:</label>
            <input
              type="text"
              value={cantidadLetra}
              onChange={(e) => setCantidadLetra(e.target.value)}
            />
          </div>
          <div className="formulario3-field">
            <label>Agregar descripción:</label>
            <textarea placeholder="Escribe aquí..." rows="3"></textarea>
          </div>

          <div className="formulario3-actions">
            <button onClick={calcular}>Calculadora</button>
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

        {/* Sección Información sobre saldos */}
        <div className="formulario3-section saldos-section">
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
  );
}

export default Formulario3;
