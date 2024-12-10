import React, { useState, useEffect } from 'react';
import '../../../styles/Formulario3.css';
import { CalculadoraEspecial } from '../../../components/Calculadora/CalculadoraEspecial';
import { CalculadoraEstandar } from '../../../components/Calculadora/CalculadoraEstandar';
import { ModalPlantilla } from '../../../components/Modal/ModalPlantilla';
import { SelectCombo } from '../../../components/SelectCombo';

export const InformacionSubproductosYSaldos = () => {
  const [numeroCantidad, setNumeroCantidad] = useState('');
  const [volumenPeso, setVolumenPeso] = useState('');
  const [cantidadLetra, setCantidadLetra] = useState('');

  const [saldoAnterior, setSaldoAnterior] = useState('');
  const [cantidadAmparada, setCantidadAmpara] = useState('');
  const [saldoSiguiente, setSaldoSiguiente] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Calculadora');
  const [calculatorType, setCalculatorType] = useState(null);

  const [errors, setErrors] = useState({});

  const opcionesUnidadMedida = [
    { value: 'seleccion', label: 'Selecciona la unidad de medida' },
    { value: 'm3', label: 'm³' },
    { value: 'kg', label: 'Kilogramos' },
    { value: 'Pies_tabla', label: 'Pies tabla' },
  ];

  const handleSeleccionTipo = (tipo) => {
    setTipoSeleccionado(tipo);
    if (tipo === 'Especial') {
      setCalculatorType('Calculadora especial');
      setModalContent(<CalculadoraEspecial />);
    } else {
      setCalculatorType('Calculadora estándar');
      setModalContent(<CalculadoraEstandar onCalculate={handleCalculation} />);
    }
    setShowModal(true);
  };
  
  const handleCalculation = (resultado) => {
    setCantidadAmpara(resultado.toString());
  };

  const calcularSaldoSiguiente = () => {
    const resultado = Number(saldoAnterior) - Number(cantidadAmparada);
    setSaldoSiguiente(resultado >= 0 ? resultado : '');
  };

  useEffect(() => {
    calcularSaldoSiguiente();
  }, [saldoAnterior, cantidadAmparada]);

  const validateNumberField = (field, value) => {
    if (!/^\d*\.?\d*$/.test(value)) {
      setErrors((prev) => ({ ...prev, [field]: 'Por favor, ingresa un número válido.' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, [field]: null }));
    return true;
  };

  const handleSaldoAnteriorChange = (e) => {
    const value = e.target.value;
    if (validateNumberField('saldoAnterior', value)) {
      setSaldoAnterior(value);
    }
  };

  const handleCantidadAmparaChange = (e) => {
    const value = e.target.value;
    if (validateNumberField('cantidadAmparada', value)) {
      if (Number(value) > Number(saldoAnterior)) {
        setErrors((prev) => ({
          ...prev,
          cantidadAmparada: 'La cantidad amparada no puede exceder el saldo disponible.',
        }));
      } else {
        setErrors((prev) => ({ ...prev, cantidadAmparada: null }));
        setCantidadAmpara(value);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(e.key)) {
      e.preventDefault();
      setErrors((prev) => ({ ...prev, cantidadLetra: 'Solo se permiten letras.' }));
    } else {
      setErrors((prev) => ({ ...prev, cantidadLetra: null }));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-7 mt-5">
          <div className="tarjeta-border p-5">
            <h2>Información sobre la materia</h2>
            <div className="row">
              <div className="col">
                <div className="formulario3-field">
                  <label>Número y/o cantidad: <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    value={numeroCantidad}
                    maxLength={10}
                    onInput={(e) => {
                      if (validateNumberField('numeroCantidad', e.target.value)) {
                        setNumeroCantidad(e.target.value);
                      }
                    }}
                  />
                  {errors.numeroCantidad && <p style={{ color: 'red' }}>{errors.numeroCantidad}</p>}
                </div>
                <div className="formulario3-field">
                  <label>Unidad de medida: <span className="text-danger">*</span></label>
                  <SelectCombo para="unidadMedida" name="unidadMedida" id="unidadMedida" options={opcionesUnidadMedida} />
                </div>
                <div className="formulario3-field">
                  <label>Volumen y/o peso amparado: <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    value={cantidadAmparada}
                    onInput={(e) => {
                      if (validateNumberField('volumenPeso', e.target.value)) {
                        setVolumenPeso(e.target.value);
                      }
                    }}
                  />
                  {errors.volumenPeso && <p style={{ color: 'red' }}>{errors.volumenPeso}</p>}
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
                onChange={(e) => setCantidadLetra(e.target.value)}
                maxLength={200}
              />
              {errors.cantidadLetra && <p style={{ color: 'red' }}>{errors.cantidadLetra}</p>}
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

        <div className="col-lg-5 mt-5">
          <div className="tarjeta-border card-formulario3 p-5">
            <h2>Información sobre saldos</h2>
            <div className="formulario3-field">
              <label>Saldo disponible según el documento anterior: <span className="text-danger">*</span></label>
              <input
                type="text"
                value={saldoAnterior}
                onInput={handleSaldoAnteriorChange}
                readOnly
              />
              {errors.saldoAnterior && <p style={{ color: 'red' }}>{errors.saldoAnterior}</p>}
            </div>
            <div className="formulario3-field">
              <label>Cantidad que ampara este documento: <span className="text-danger">*</span></label>
              <input
                type="text"
                value={cantidadAmparada}
                onInput={handleCantidadAmparaChange}
                readOnly
              />
              {errors.cantidadAmparada && <p style={{ color: 'red' }}>{errors.cantidadAmparada}</p>}
            </div>
            <div className="formulario3-field">
              <label>Saldo que pasa al siguiente documento: <span className="text-danger">*</span></label>
              <input
                type="text"
                value={saldoSiguiente}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      <ModalPlantilla
        show={showModal}
        onClose={() => setShowModal(false)}
        content={modalContent}
        title={calculatorType}
      />
    </>
  );
};
