import React from 'react';
import { FormularioTransporte } from './FormularioTransporte';
import NavAdmin from './NavAdmin';
import { Footer } from './Footer';
import { CustomTable } from './CustomTable';

export const GestionTransporte = () => {

  // Datos simulados
  const transportData = [
    { propietario: 'David Pérez', tipo: 'Tortón', capacidad: '3 Toneladas' },
    { propietario: 'Efren Jiménez', tipo: 'Trocero', capacidad: '4 Toneladas' },
    { propietario: 'Luis Hernández', tipo: 'Tortón', capacidad: '2 Toneladas' }
  ];

  // Configuración de columnas
  const columns = [
    { header: 'Propietario', accessor: 'propietario' },
    { header: 'Tipo', accessor: 'tipo' },
    { header: 'Capacidad', accessor: 'capacidad' }
  ];

  // Funciones para manejar la edición y eliminación
  const handleEdit = (item) => {
    console.log('Editar', item);
  };

  const handleDelete = (item) => {
    console.log('Eliminar', item);
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
       
      <div className="d-flex justify-content-center">
        <div style={{ width: '70%' }}>
        <FormularioTransporte titulo="Formulario de Transporte" formularioForm={false} />


        </div>
      </div>


  
       <Footer></Footer>
    </div>
  );
};
