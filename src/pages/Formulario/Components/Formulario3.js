import React, { useState, useEffect } from 'react';
import '../../../styles/Formulario3.css';
import { CalculadoraEspecial } from '../../../components/Calculadora/CalculadoraEspecial';
import { CalculadoraEstandar } from '../../../components/Calculadora/CalculadoraEstandar';
import { ModalPlantilla } from '../../../components/Modal/ModalPlantilla';
import { SelectCombo } from '../../../components/SelectCombo'
 // Importa el modal

export const Formulario3 = () => {
  const [numeroCantidad, setNumeroCantidad] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [volumenPeso, setVolumenPeso] = useState('');
  const [cantidadLetra, setCantidadLetra] = useState('');

  const [saldoAnterior, setSaldoAnterior] = useState();
  const [cantidadAmparada, setCantidadAmpara] = useState();
  const [saldoSiguiente, setSaldoSiguiente] = useState();

  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal
  const [modalContent, setModalContent] = useState(null); // Controla el contenido del modal
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Calculadora');
  const [calculatorType, setCalculatorType] = useState(null);
  const [error, setError] = useState(""); 

  
  const opcionesUnidadMedida = [
    { value: 'seleccion', label: 'Selecciona la unidad de medida' },
    { value: 'm3', label: 'm³' },
    { value: 'kg', label: 'Kilogramos' },
    { value: 'Pies tabla', label: 'Pies tabla' }
  ];

  const handleSeleccionTipo = (tipo) => {
    setTipoSeleccionado(tipo);
    if (tipo === "Especial") {
      setCalculatorType("Calculadora especial");
      setModalContent(<CalculadoraEspecial />);
    } else if (tipo === "Volumen A & B") {
      setCalculatorType("Calculadora estandar")
      setModalContent(<CalculadoraEstandar />);
    }
    setShowModal(true); // Muestra el modal con el contenido dinámico
  };

  // Función para calcular el saldo siguiente
  const calcularSaldoSiguiente = () => {
    const resultado = saldoAnterior - cantidadAmparada; // Restamos saldo anterior - cantidad amparada
    setSaldoSiguiente(resultado); // Actualizamos el saldo siguiente con el resultado
  };

  // Usamos useEffect para recalcular el saldo siguiente cuando se actualice saldoAnterior o cantidadAmpara
  useEffect(() => {
    calcularSaldoSiguiente();
  }, [saldoAnterior, cantidadAmparada]);

  const handleSaldoAnteriorChange = (e) => {
    const value = e.target.value;
    // Permitir solo valores numéricos
    if (!isNaN(value) && value !== "") {
      setSaldoAnterior(Number(value)); // Actualizar saldo anterior
    }
  };
    // Función para manejar el cambio en la cantidad amparada
    const handleCantidadAmparaChange = (e) => {
      const value = Number(e.target.value); // Convertir a número
      if (value > saldoAnterior) {
        setError("La cantidad amparada no puede ser mayor al saldo disponible.");
      } else {
        setError(""); // Limpiar el error si la cantidad es válida
        setCantidadAmpara(value); // Actualizar cantidad amparada
      }
    };

    const handleKeyPress = (e) => {
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(e.key)) {
        e.preventDefault();
        setError('Solo se permiten letras.');
      } else {
        setError(''); // Limpiar el mensaje de error si la tecla es válida.
      }
    };

  return (
    <>
      <div className="row">
        {/* Sección Información sobre la materia */}
        <div className="col-lg-7 mt-5">
          <div className="tarjeta-border p-5">
            <div className="materia-section">
              <h2>Información sobre la materia</h2>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="formulario3-field">
                      <label>Número y/o cantidad: <span className="text-danger">*</span></label>
                      <input
                        type="number"
                        value={numeroCantidad}
                        onKeyPress={(e) => {
                          if (!/^\d$/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => setNumeroCantidad(e.target.value)}
                      />
                    </div>
                    <div className="formulario3-field">
                      <label>Unidad de medida: <span className="text-danger">*</span></label>
                      <SelectCombo 
                          para="unidadMedida" 
                          name="unidadMedida" 
                          id="unidadMedida" 
                          options={opcionesUnidadMedida} 
                      />
                    </div>
                    <div className="formulario3-field">
                      <label>Volumen y/o peso amparado: <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        value={volumenPeso}
                        onKeyPress={(e) => {
                          if (!/^\d$/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => setVolumenPeso(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row" style={{ height: '100%' }}>
                    <div className="col formulario3-field">
                      <label>Agregar descripción: <span className="text-danger">*</span></label>
                      <textarea placeholder="Escribe aquí..." style={{ height: '100%' }} rows="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formulario3-field">
                <label>Cantidad que ampara este documento con letra: <span className="text-danger">*</span></label>
                <input
                  type="text"
                  value={cantidadLetra}
                  onKeyPress={handleKeyPress}
                  placeholder="Ingresa solo letras"
                  onChange={(e) => setCantidadLetra(e.target.value)}
                />
              </div>
              <div className="formulario3-actions">
                <div className="dropdown d-inline">
                  <button
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {tipoSeleccionado}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li className="dropdown-item" onClick={() => handleSeleccionTipo("Especial")}>Especial</li>
                    <li className="dropdown-item" onClick={() => handleSeleccionTipo("Volumen A & B")}>Volumen A & B</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Información sobre saldos */}
        <div className="col-lg-5 mt-5">
          <div className="tarjeta-border card-formulario3 p-5">
            <h2>Información sobre saldos</h2>
            <div className="formulario3-field">
              <label>Saldo disponible según el documento anterior: <span className="text-danger">*</span></label>
              <input
                type="number"
                value={saldoAnterior}
                onKeyPress={(e) => {
                  if (!/^\d$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                onChange={handleSaldoAnteriorChange}
              />
            </div>
            <div className="formulario3-field">
              <label>Cantidad que ampara este documento: <span className="text-danger">*</span></label>
              <input
                type="number"
                value={cantidadAmparada}
                onKeyPress={(e) => {
                    if (!/^\d$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                onChange={handleCantidadAmparaChange}
              />
               {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
            </div>
            <div className="formulario3-field">
              <label>Saldo que pasa al siguiente documento: <span className="text-danger">*</span></label>
              <input
                type="number"
                value={saldoSiguiente}
                onKeyPress={(e) => {
                  if (!/^\d$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal dinámico */}
      <ModalPlantilla
        show={showModal}
        onClose={() => setShowModal(false)} // Oculta el modal al cerrar
        content={modalContent} // Pasa el contenido dinámico
        title={calculatorType}
      />
    </>
  );
};
