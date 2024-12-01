import React, { useState } from "react";
import { CustomTable } from "../../../components/TablaIconos";
import FormularioCliente from "./FormularioCliente";
import Swal from "sweetalert2"; 


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

    Swal.fire({
      title: 'Eliminado',
      text: `Cliente eliminado de manera exitosa`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
      }
    });
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
      edicion={editarClientesFrecuentes}
      />
 
      <FormularioCliente
        onAdd={guardarDatos}
        editarClientesFrecuentes={editarClientesFrecuentes}
      />
    </div>
  );
};

export default ListadoClientes;
 