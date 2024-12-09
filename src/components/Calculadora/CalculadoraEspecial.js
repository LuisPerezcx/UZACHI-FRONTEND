import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        return value.replace(/[^0-9.]/g, '').replace(/(\..*?)\./g, '$1');
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
            setError('Todos los campos deben estar llenos y ser números válidos.');
            return;
        }

        // Convertir valores a números
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
                        placeholder="Altura 1"
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
                        placeholder="Altura 2"
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
                        placeholder="Altura 3"
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
                        placeholder="Ancho"
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
                        placeholder="Longitud"
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
