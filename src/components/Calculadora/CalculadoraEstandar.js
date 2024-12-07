import React, { useState } from 'react';

export const CalculadoraEstandar = () => {
    const [ladoA, setLadoA] = useState([]);
    const [ladoB, setLadoB] = useState([]);
    const [volumenA, setVolumenA] = useState('');
    const [volumenB, setVolumenB] = useState('');
  
    const agregarVolumenA = () => {
      if (!isNaN(volumenA) && volumenA.trim() !== '') {
        setLadoA([...ladoA, parseFloat(volumenA)]);
        setVolumenA('');
      } else {
        alert('Por favor, ingresa un número válido en el lado A.');
      }
    };
  
    const agregarVolumenB = () => {
      if (!isNaN(volumenB) && volumenB.trim() !== '') {
        setLadoB([...ladoB, parseFloat(volumenB)]);
        setVolumenB('');
      } else {
        alert('Por favor, ingresa un número válido en el lado B.');
      }
    };
  
    const calcularPromedio = () => {
      if (ladoA.length !== ladoB.length) {
        alert('Ambos lados deben tener la misma cantidad de datos.');
        return;
      }
  
      const sumaA = ladoA.reduce((acc, val) => acc + val, 0);
      const sumaB = ladoB.reduce((acc, val) => acc + val, 0);
      const resultado = (sumaA + sumaB) / 2;

      alert(`El promedio calculado es: ${resultado}`);
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
