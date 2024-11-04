import React from 'react';
import Table from 'react-bootstrap/Table';
import basura from '../assets/basura.png';
import lapiz from '../assets/lapiz.png';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

function TablaTransporte() {
  return (

    
    <div className="container">
      <div className="d-flex justify-content-start mb-3">
        <input
          type="text"
          className="form-control buscar-input" 
          placeholder="Buscar"
        />
      </div>
      <div className="d-flex justify-content-center">
        <Table className="table" striped bordered hover style={{ width: '80%' }} >
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
            <tr>
              <td>
                <img 
                  src={basura}
                  alt="Eliminar" 
                  onClick={() => console.log('Eliminar item')} 
                />
              </td>
              <td>
                <img 
                  src={lapiz}
                  alt="Editar" 
                  onClick={() => console.log('Editar item')} 
                />
              </td>
              <td>David Pérez</td>
              <td>Tortón</td>
              <td>3 Toneladas</td>
            </tr>
            <tr>
              <td>
                <img 
                  src={basura}
                  alt="Eliminar" 
                  onClick={() => console.log('Eliminar item')} 
                />
              </td>
              <td>
                <img 
                  src={lapiz}
                  alt="Editar" 
                  onClick={() => console.log('Editar item')} 
                />
              </td>
              <td>Efren Jiménez</td>
              <td>Trocero</td>
              <td>4 Toneladas</td>
            </tr>
            <tr>
              <td>
                <img 
                  src={basura}
                  alt="Eliminar" 
                  onClick={() => console.log('Eliminar item')} 
                />
              </td>
              <td>
                <img 
                  src={lapiz}
                  alt="Editar" 
                  onClick={() => console.log('Editar item')} 
                />
              </td>
              <td>Luis Hernández</td>
              <td>Tortón</td>
              <td>2 Toneladas</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/*<Pagination className="justify-content-center mt-3">
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Next />
      </Pagination>*/}
    </div>
  );
}

export default TablaTransporte;
