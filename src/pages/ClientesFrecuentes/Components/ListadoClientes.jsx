import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CustomTable } from "../../../components/TablaIconos";
import FormularioCliente from "./FormularioCliente";

const ListadoClientes = () => {
  // Estados estaticos por ahora 
  const [clientes, setClientes] = useState([]);
  const [editarClientesFrecuentes,setEditarClientesFrecuentes] = useState(null);


  const columns = [
    { header: 'Nombre', accessor: 'nombre' },
    { header: 'Domicilio destinatario', accessor: 'domicilioDestinatario' },
    { header: 'Poblacion', accessor: 'poblacion' },
    { header: 'Entidad', accessor: 'entidad' },
  ];

  // eliminar cliente
  const eliminarCliente = (item) => {
    const nuevosClientes = clientes.filter((data) => data !== item);
    setClientes(nuevosClientes);
  };

  // editar cliente (ejemplo básico)
  const editarCliente = (item) => {
    setEditarClientesFrecuentes(item);
  };

  const guardarDatos = (nuevoCliente) => {
    if (editarClientesFrecuentes) {
      // Actualizar transporte existente
      const updatedData = clientes.map((data) =>
        data === editarClientesFrecuentes ? nuevoCliente : data
      );
      setClientes(updatedData);
      setEditarClientesFrecuentes(null); // Salir del modo de edición
    } else {
      // Agregar nuevo transporte
      setClientes([...clientes, { ...nuevoCliente, id: Date.now() }]);
    }
  };

  return (
    <div> 
      <CustomTable
      data={clientes}
      columns={columns}
      onEdit={editarCliente}
      onDelete={eliminarCliente}
      searchPlaceholder="Buscar nombre..."
      />

      <FormularioCliente
        onAdd={guardarDatos}
        editarClientesFrecuentes={editarClientesFrecuentes}
      />
    </div>
  );
};

export default ListadoClientes;
