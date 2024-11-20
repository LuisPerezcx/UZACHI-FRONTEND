import React, { useState } from 'react';

export const CalculadoraEstandar = () => {
    const [ladoA, setLadoA] = useState([]);
    const [ladoB, setLadoB] = useState([]);
    const [volumenA, setVolumenA] = useState('');
    const [volumenB, setVolumenB] = useState('');
    const [selectedClass, setSelectedClass] = useState('Clase');
  
    const agregarVolumenA = () => {
      if (volumenA) {
        setLadoA([...ladoA, volumenA]);
        setVolumenA('');
      }
    };
  
    const agregarVolumenB = () => {
      if (volumenB) {
        setLadoB([...ladoB, volumenB]);
        setVolumenB('');
      }
    };
  
    const calcularPromedio = () => {
      alert("Calculando promedio...");
    };
  return (
    <div className="container p-4 border rounded">
      <div className="row">
        {/* Lado A */}
        <div className="col-md-6 text-center">
          <h6>Lado A del vehículo</h6>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Agrega el volumen A"
              value={volumenA}
              onChange={(e) => setVolumenA(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <button onClick={agregarVolumenA} className="btn btn-success me-2">Agregar</button>
            <div className="dropdown d-inline">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedClass}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="dropdown-item" onClick={() => setSelectedClass("Primera")}>Primera</div>
                <div className="dropdown-item" onClick={() => setSelectedClass("Secundaria")}>Secundaria</div>
                <div className="dropdown-item" onClick={() => setSelectedClass("Terciaria")}>Terciaria</div>
                <div className="dropdown-item" onClick={() => setSelectedClass("Bolo")}>Bolo</div>
                <div className="dropdown-item" onClick={() => setSelectedClass("Seco")}>Seco</div>
              </div>
            </div>
          </div>
          <div className="mt-3 border p-2 rounded">
            {ladoA.map((vol, index) => (
              <div key={index}>{vol}</div>
            ))}
          </div>
        </div>

        {/* Lado B */}
        <div className="col-md-6 text-center">
          <h6>Lado B del vehículo</h6>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Agrega el volumen B"
              value={volumenB}
              onChange={(e) => setVolumenB(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <button onClick={agregarVolumenB} className="btn btn-success">Agregar</button>
          </div>
          <div className="mt-3 border p-2 rounded">
            {ladoB.map((vol, index) => (
              <div key={index}>{vol}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <button onClick={calcularPromedio} className="btn btn-success">Calcular promedio</button>
      </div>
    </div>
  )
}
