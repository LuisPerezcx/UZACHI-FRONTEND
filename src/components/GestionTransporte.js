import React, { useState } from 'react';
import { FormularioTransporte } from './FormularioTransporte';
import NavAdmin from './NavAdmin';
import Footer from './Footer';
import { CustomTable } from './CustomTable';

export const GestionTransporte = () => {
  const [transportData, setTransportData] = useState([]);
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
    const updatedData = transportData.filter((data) => data !== item);
    setTransportData(updatedData);
    console.log('Elemento eliminado:', item);
  };

  const handleSave = (newTransport) => {
    if (editingTransport) {
      // Actualizar transporte existente
      const updatedData = transportData.map((data) =>
        data === editingTransport ? newTransport : data
      );
      setTransportData(updatedData);
      setEditingTransport(null); // Salir del modo de edición
    } else {
      // Agregar nuevo transporte
      setTransportData([...transportData, newTransport]);
    }
  };

  return (
    <div>
      <NavAdmin />
      <div className="container my-5">
        <h2 className="text-center mb-4">Gestión de Transporte</h2>
      </div>
      <CustomTable
        data={transportData}
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
