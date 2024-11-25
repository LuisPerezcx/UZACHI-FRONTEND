import React, { useState } from 'react';
import { FormularioTransporte } from './FormularioTransporte';
import NavAdmin from './NavAdmin';
import Footer from './Footer';
import { CustomTable } from './CustomTable';

export const GestionTransporte = () => {

  // Datos simulados
  const [transportData, setTransportData] = useState([]);

  // Configuración de columnas
  const columns = [
    { header: 'Propietario', accessor: 'propietario' },
    { header: 'Tipo', accessor: 'tipo' },
    { header: 'Capacidad', accessor: 'capacidad' },
    { header: 'placas', accessor: 'placas' }
  ];

  // Funciones para manejar la edición y eliminación
  const handleEdit = (item) => {
    console.log('Editar', item);
  };

  const handleDelete = (item) => {
    console.log('Eliminar', item);
  };
  

  const agregarTransporte = (newTransport) => {
    setTransportData([...transportData, newTransport]);
  };

  return (
    <div>
      <NavAdmin></NavAdmin>

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
       
       <FormularioTransporte onAdd={agregarTransporte} />

  
       <Footer></Footer>
    </div>
  );
};
