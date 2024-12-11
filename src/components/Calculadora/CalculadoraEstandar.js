import React, { showModal,useState } from 'react';
import Swal from 'sweetalert2';

export const CalculadoraEstandar = ({onCalculate}) => {
    const [ladoA, setLadoA] = useState([]);
    const [ladoB, setLadoB] = useState([]);
    const [volumenA, setVolumenA] = useState('');
    const [volumenB, setVolumenB] = useState('');

    const handleNumericInput = (value) => {
      // Permite solo números, puntos decimales, y evita múltiples puntos
      let sanitizedValue = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\./g, '$1');
  
      // Limitar a un formato de hasta 5 enteros y 2 decimales
      const decimalMatch = sanitizedValue.match(/^(\d{1,5})(\.\d{0,2})?$/);
  
      if (decimalMatch) {
          sanitizedValue = decimalMatch[0]; // Retener solo la parte válida
      } else {
          // Si no coincide, descartar caracteres adicionales
          sanitizedValue = sanitizedValue.slice(0, 5);
      }
  
      return sanitizedValue;
  };

    const agregarVolumenA = () => {
      const parsedVolumenA = parseFloat(volumenA);
      if (!isNaN(volumenA) && volumenA.trim() !== '' && parsedVolumenA !== 0) {
        setLadoA([...ladoA, parseFloat(volumenA)]);
        setVolumenA('');
      } else {
        Swal.fire({
          title: 'Error, campos invalidos',
          text: 'El valor del lado "A" no puede ser 0 o nulo',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)';
          }
        }); 
      }
    };
  
    const agregarVolumenB = () => {
      const parsedVolumenB = parseFloat(volumenB);
      if (!isNaN(volumenB) && volumenB.trim() !== '' && parsedVolumenB !== 0) {
        setLadoB([...ladoB, parseFloat(volumenB)]);
        setVolumenB('');
      } else {
        Swal.fire({
          title: 'Error, campos invalidos',
          text: 'El valor del lado "B" no puede ser 0 o nulo',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)';
          }
        }); 
      }
    };
  
    const calcularPromedio = () => {
      if (ladoA.length < 5 || ladoB.length < 5) {
        Swal.fire({
          title: 'Error, campos insuficientes',
          text: 'Ambos lados deben tener al menos 5 elementos para realizar el cálculo.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });   
          return;
      }
  
      if (ladoA.length !== ladoB.length) {
        Swal.fire({
          title: 'Error, campos insuficientes',
          text: 'Ambos lados deben tener la misma cantidad de datos.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });   
        return;
      }
  
      const sumaA = ladoA.reduce((acc, val) => acc + val, 0);
      const sumaB = ladoB.reduce((acc, val) => acc + val, 0);
      const resultado = (sumaA + sumaB) / 2;

      Swal.fire({
        title: 'CALCULO REALIZADO',
        text: 'El calculo se realizo de forma correcta',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          const confirmButton = Swal.getConfirmButton();
          confirmButton.style.backgroundColor = 'var(--color-verde)';
        }
      }).then(() => {
        // Reinicia los datos de Lado A
        setLadoA([]); 
        // Reinicia los datos de Lado B
        setLadoB([]);
      });
    onCalculate(resultado);
};

  const eliminarElemento = (lado, index) => {
    if (lado === 'A') {
        setLadoA(ladoA.filter((_, i) => i !== index));
    } else {
        setLadoB(ladoB.filter((_, i) => i !== index));
    }
};
  
  return (
    <div className="container p-4 border rounded">
      <div className="row">
        {/* Lado A */}
        <div className="col-md-6 text-center">
        <h6>Lado A del vehículo <hr/>({ladoA.length} elementos)</h6>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Ingresa Volumen A"
              value={volumenA}
              onChange={(e) => setVolumenA(handleNumericInput(e.target.value))}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <button onClick={agregarVolumenA} className="btn btn-success me-2">Agregar</button>
          </div>
          <div className="mt-3 border p-2 rounded">
            {ladoA.length > 3 ? (
              <div className="overflow-auto" style={{ maxHeight: '120px' }}>
                {ladoA.map((vol, index) => (
                  <div key={index} className="d-flex justify-content-between mb-2">{vol}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarElemento('A', index)}
                      style={{ fontSize: '0.75rem' }}
                    > Eliminar </button>
                  </div>
                ))}
              </div>
            ) : (
              ladoA.map((vol, index) => (
                <div key={index} className="d-flex justify-content-between mb-2">{vol}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarElemento('A', index)}
                    style={{ fontSize: '0.75rem' }}
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Lado B */}
        <div className="col-md-6 text-center">
        <h6>Lado B del vehículo <hr/>({ladoB.length} elementos)</h6>          
        <div className="mb-2">
            <input
              type="text"
              placeholder="Agrega el volumen B"
              value={volumenB}
              onChange={(e) => setVolumenB(handleNumericInput(e.target.value))}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <button onClick={agregarVolumenB} className="btn btn-success">Agregar</button>
          </div>
          <div className="mt-3 border p-2 rounded">
            {ladoB.length > 3 ? (
              <div className="overflow-auto" style={{ maxHeight: '120px' }}>
                {ladoB.map((vol, index) => (
                  <div key={index} className="d-flex justify-content-between mb-2">{vol}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarElemento('B', index)}
                      style={{ fontSize: '0.75rem' }}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ladoB.map((vol, index) => (
                <div key={index} className="d-flex justify-content-between mb-2">{vol}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarElemento('B', index)}
                    style={{ fontSize: '0.75rem' }}
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <button onClick={calcularPromedio} className="btn btn-success">
          Calcular promedio
        </button>
        {<div className="text-danger mt-2"></div>}
      </div>
    </div>
  )
}
