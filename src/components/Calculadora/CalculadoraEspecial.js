import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CalculadoraEspecial = () => {
    //Estado para almacenar y mostrar los resultados
    const [resultado, setResultado] = useState('');
    //Funcion para realizar el calculo 
    const calcular = () => {
        setResultado('Resultado del cálculo');
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
                    <input type="text" className="form-control" placeholder="Altura 1" />
                </div>
                <div className="col">
                    <label>Altura 2:</label>
                    <input type="text" className="form-control" placeholder="Altura 2" />
                </div>
                <div className="col">
                    <label>Altura 3:</label>
                    <input type="text" className="form-control" placeholder="Altura 3" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <label>Ancho:</label>
                    <input type="text" className="form-control" placeholder="Ancho" />
                </div>
                <div className="col">
                    <label>Longitud:</label>
                    <input type="text" className="form-control" placeholder="Longitud" />
                </div>
                <div className="col">
                    <label>Coeficiente:</label>
                    <input type="text" className="form-control" placeholder="Coeficiente" />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-success" onClick={calcular}>
                    Calcular
                </button>
            </div>
        </div>
    )
}
