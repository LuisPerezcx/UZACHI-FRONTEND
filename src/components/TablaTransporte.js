import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import basura from '../assets/basura.png';
import lapiz from '../assets/lapiz.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function TablaTransporte() {

  // State para almacenar los datos de los transportes
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para mostrar el cargando
  const [searchQuery, setSearchQuery] = useState(''); // Estado para la búsqueda

  // Datos simulados (mock data)
  const mockData = [
    { propietario: 'David Pérez', tipo: 'Tortón', capacidad: '3 Toneladas' },
    { propietario: 'Efren Jiménez', tipo: 'Trocero', capacidad: '4 Toneladas' },
    { propietario: 'Efren Jiménez', tipo: 'Trocero', capacidad: '4 Toneladas' },
    { propietario: 'Luis Hernández', tipo: 'Tortón', capacidad: '2 Toneladas' }
  ];

  useEffect(() => {
    // Simulamos que los datos se cargan desde el backend
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 500); // 1 segundo para simular un retraso en la carga
  }, []);

  // Filtrar los transportes según la búsqueda
  const filteredTransportes = data.filter((data) =>
    data.propietario.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.tipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.capacidad.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-start mb-3">
        <input
          type="text"
          className="form-control buscar-input"
          placeholder="Buscar"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)} // Actualizar la búsqueda
        />
      </div>
      <div className="d-flex justify-content-center">
        <Table className="table" striped bordered hover style={{ width: '80%' }}>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Propietario</th>
              <th>Tipo</th>
              <th>Capacidad</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransportes.map((data, index) => (
              <tr key={index}>
                <td>
                <img
                    src={basura}
                    alt="Eliminar"
                    onClick={() => console.log('Eliminar item', data)}
                  />
                </td>
                <td>
                  <img
                    src={lapiz}
                    alt="Editar"
                    onClick={() => console.log('Editar item', data)}
                  />
                </td>
                <td>{data.propietario}</td>
                <td>{data.tipo}</td>
                <td>{data.capacidad}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TablaTransporte;
