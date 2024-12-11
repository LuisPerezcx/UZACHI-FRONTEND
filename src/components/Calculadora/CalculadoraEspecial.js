import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

export const CalculadoraEspecial = () => {
    const [resultado, setResultado] = useState('');
    const [error, setError] = useState('');


    const [inputs, setInputs] = useState({
        altura1: '',
        altura2: '',
        altura3: '',
        ancho: '',
        longitud: '',
        coeficiente: '',
    });

    const handleNumericInput = (value) => {
        // Permite solo números y un punto decimal, evita múltiples puntos
        let sanitizedValue = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\./g, '$1');
    
        // Limitar a un formato de hasta 5 enteros y 2 decimales
        const decimalMatch = sanitizedValue.match(/^(\d{1,5})(\.\d{0,2})?/);
        if (decimalMatch) {
            sanitizedValue = decimalMatch[0]; // Retener solo la parte válida
        } else {
            // En caso de no coincidir, limitar a los primeros 5 caracteres como fallback
            sanitizedValue = sanitizedValue.slice(0, 5);
        }
    
        return sanitizedValue;
    };
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: handleNumericInput(value),
        }));
    };

    const calcular = () => {
        const { altura1, altura2, altura3, ancho, longitud, coeficiente } = inputs;

        // Validar que los campos no estén vacíos
        if (!altura1 || !altura2 || !altura3 || !ancho || !longitud || !coeficiente) {
            Swal.fire({
                title: 'Error, campos bacios',
                text: 'Todos los campos deben de estar llenos',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                  const confirmButton = Swal.getConfirmButton();
                  confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
                }
              });  
            //setError('Todos los campos deben estar llenos y ser números válidos.');
            return;
        }

        if ([altura1, altura2, altura3, ancho, longitud, coeficiente].some(value => parseFloat(value) === 0)) {
            Swal.fire({
                title: 'Error, campos invalidos',
                text: 'Los campos no pueden contener numeros con valor "0"',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                  const confirmButton = Swal.getConfirmButton();
                  confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
                }
              }); 
            //setError('Los valores no pueden ser solo ceros.');
            return;
        }

        const numAltura1 = parseFloat(altura1);
        const numAltura2 = parseFloat(altura2);
        const numAltura3 = parseFloat(altura3);
        const numAncho = parseFloat(ancho);
        const numLongitud = parseFloat(longitud);
        const numCoeficiente = parseFloat(coeficiente);

        // Realizar cálculo
        const promedioAltura = (numAltura1 + numAltura2 + numAltura3) / 3;
        const areaBase = promedioAltura * numAncho;
        const volumen = areaBase * numLongitud * numCoeficiente;

        // Actualizar resultado y limpiar error
        setResultado(volumen.toFixed(2)); // Limitar a 2 decimales
        setError('');
    };


    
    return (
        <div className="container border rounded p-4" style={{ maxWidth: '400px' }}>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    placeholder="Resultado"
                    value={resultado}
                    readOnly
                    rows="1"
                    style={{ textAlign: 'right' }}
                />
            </div>

            <div className="row mb-3">
                <div className="col">
                    <label>Altura 1:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="M"
                        name="altura1"
                        value={inputs.altura1}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                    <label>Altura 2:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="M"
                        name="altura2"
                        value={inputs.altura2}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                    <label>Altura 3:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="M"
                        name="altura3"
                        value={inputs.altura3}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <label>Ancho:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="M"
                        name="ancho"
                        value={inputs.ancho}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                    <label>Longitud:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="M"
                        name="longitud"
                        value={inputs.longitud}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                    <label>Coeficiente:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Coeficiente"
                        name="coeficiente"
                        value={inputs.coeficiente}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-success" onClick={calcular}>
                    Calcular
                </button>
            </div>
            {error && <div className="text-danger text-center mt-3">{error}</div>}  
        </div>
    );
}
