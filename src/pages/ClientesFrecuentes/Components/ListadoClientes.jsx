import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CustomTable } from "../../../components/CustomTable";
import FormularioCliente from "./FormularioCliente";

const ListadoClientes = () => {
  // Estados estaticos por ahora 
  const [clientes, setClientes] = useState([]);

  const columns = [
    { header: 'Nombre', accessor: 'nombre' },
    { header: 'Apellido', accessor: 'apellido' },
    { header: 'Domicilio', accessor: 'domicilio' },
    { header: 'Acciones', accessor: 'acciones' },
  ];

  const [editarClientesFrecuentes,setEditarClientesFrecuentes] = useState(null);

  // eliminar cliente
  const eliminarCliente = (id) => {
    const nuevosClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(nuevosClientes);
  };

  // editar cliente (ejemplo básico)
  const editarCliente = (item) => {
    setEditarClientesFrecuentes(item);
  };

  const guardarDatos = (nuevoCliente) => {
    if (editarCliente) {
      // Actualizar transporte existente
      const updatedData = clientes.map((data) =>
        data === editarCliente ? nuevoCliente : data
      );
      setClientes(updatedData);
      setEditarClientesFrecuentes(null); // Salir del modo de edición
    } else {
      // Agregar nuevo transporte
      setClientes([...clientes, nuevoCliente]);
    }
  };

  return (
    <div> 
      <CustomTable
      data={clientes}
      columns={columns}
      onEdit={editarCliente}
      onDelete={eliminarCliente}
      searchPlaceholder="Buscar transporte..."
      />

      <FormularioCliente
        onAdd={guardarDatos}
        editarClientesFrecuentes={editarCliente}
      />
    </div>
    
    // <FormularioCliente></FormularioCliente>
      
    // <div className="table-container mt-4 d-flex justify-content-center w-100">
    //   <table className="table table-striped table-bordered w-100 justify-content-center">
    //     <thead>
    //       <tr>
    //         <th className="w-25">Acciones</th>
    //         <th className="w-25">Nombre</th>
    //         <th className="w-25">Apellido</th>
    //         <th className="w-25">Domicilio</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {clientes.map((cliente) => (
    //         <tr key={cliente.id}>
    //           <td className="d-flex justify-content-right">
    //           <button
    //               className="btn btn-danger"
    //               onClick={() => eliminarCliente(cliente.id)}
    //               title="Eliminar"
    //             >
    //               <FaTrashAlt />
    //             </button>
    //             <button
    //               className="btn btn-primary"
    //               onClick={() => editarCliente(cliente.id)}
    //               title="Editar"
    //             >
    //               <FaEdit />
    //             </button>
                
    //           </td>
    //           <td>{cliente.nombre}</td>
    //           <td>{cliente.apellido}</td>
    //           <td>{cliente.domicilio}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default ListadoClientes;
