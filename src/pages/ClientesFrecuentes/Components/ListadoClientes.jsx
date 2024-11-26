import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ListadoClientes = () => {
  // Estados estaticos por ahora 
  const [clientes, setClientes] = useState([
    { id: 1, nombre: "David ", domicilio: "Calle 123, Universidad", apellido: "Pérez" },
    { id: 2, nombre: "Efren David ", domicilio: "San Francisco ", apellido: "Martinez " },
  ]);

  // eliminar cliente
  const eliminarCliente = (id) => {
    const nuevosClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(nuevosClientes);
  };

  // editar cliente (ejemplo básico)
  const editarCliente = (id) => {
    alert(`Editar cliente con ID: ${id}`);
  };

  return (
    <div className="table-container mt-4 d-flex justify-content-center w-100">
      <table className="table table-striped table-bordered w-100 justify-content-center">
        <thead>
          <tr>
            <th className="w-25">Acciones</th>
            <th className="w-25">Nombre</th>
            <th className="w-25">Apellido</th>
            <th className="w-25">Domicilio</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td className="d-flex justify-content-right">
              <button
                  className="btn btn-danger"
                  onClick={() => eliminarCliente(cliente.id)}
                  title="Eliminar"
                >
                  <FaTrashAlt />
                  
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => editarCliente(cliente.id)}
                  title="Editar"
                >
                  <FaEdit />
                </button>
                
              </td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.domicilio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoClientes;
