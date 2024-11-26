import React, { useState } from 'react';
import { FormularioTransporte } from './FormularioTransporte';
import NavAdmin from './NavAdmin';
import { Footer } from './Footer';
import { CustomTable } from './CustomTable';

export const GestionTransporte = () => {
  const [datosTransporte, setDatosTransporte] = useState([]);
  const [editingTransport, setEditingTransport] = useState(null); // Transporte en edición

  const columns = [
    { header: 'Propietario', accessor: 'propietario' },
    { header: 'Tipo', accessor: 'tipo' },
    { header: 'Capacidad', accessor: 'capacidad' },
    { header: 'Placas', accessor: 'placas' },
  ];

  const handleEdit = (item) => {
    setEditingTransport(item); // Establecer el transporte en edición
  };

  const handleDelete = (item) => {
    const updatedData = datosTransporte.filter((data) => data !== item);
    setDatosTransporte(updatedData);
    console.log('Elemento eliminado:', item);
  };

  const handleSave = (newTransport) => {
    if (editingTransport) {
      // Actualizar transporte existente
      const updatedData = datosTransporte.map((data) =>
        data === editingTransport ? newTransport : data
      );
      setDatosTransporte(updatedData);
      setEditingTransport(null); // Salir del modo de edición
    } else {
      // Agregar nuevo transporte
      setDatosTransporte([...datosTransporte, newTransport]);
    }
  };

  return (
    <div>
      <NavAdmin />
      <div className="container my-5">
        <h2 className="text-center mb-4">Gestión de Transporte</h2>
      </div>
      <CustomTable
        data={datosTransporte}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Buscar transporte..."
      />
      <FormularioTransporte
        onAdd={handleSave}
        editingTransport={editingTransport}
      />
      <Footer />
    </div>
  );
};