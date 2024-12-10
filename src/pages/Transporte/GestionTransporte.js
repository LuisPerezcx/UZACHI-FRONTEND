import React, { useState } from 'react';
import { FormularioTransporte } from '../Formulario/Components/FormularioTransporte';
import NavAdmin from '../../components/NavAdmin';
import { Footer } from '../../components/Footer';
import { CustomTable } from '../../components/TablaIconos';
import { BreadCrumb } from '../../components/BreadCrumb';
import { AlertComponent } from '../../components/AlertComponent';


export const GestionTransporte = () => {
  const [datosTransporte, setDatosTransporte] = useState([
    {
      medio: 'Transporte terrestre',
      marca: 'Toyota',
      modelo: 'Hilux 2022',
      propietario: 'Luis David Pérez Cruz',
      capacidad: '1',
      placas: 'ABC-1234',
      tipo: 'Torton'
    },
    {
      medio: 'Transporte terrestre',
      marca: 'Kenworth',
      modelo: 'T800',
      propietario: 'Transporte Forestal López',
      capacidad: '20',
      placas: 'XF-3456-TL',
      tipo: 'Trocero'
    }
    
  ]);
  const [editingTransport, setEditingTransport] = useState(null); // Transporte en edición

  const columns = [
    { header: 'Propietario', accessor: 'propietario' },
    { header: 'Tipo', accessor: 'tipo' },
    { header: 'Capacidad', accessor: 'capacidad' },
    { header: 'Placas', accessor: 'placas' },
    { header: 'Marca', accessor: 'marca' },
    { header: 'Modelo', accessor: 'modelo' },
  ];

  const handleEdit = (item) => {
    setEditingTransport(item); // Establecer el transporte en edición
  };

  const handleDelete = (item) => {
    
    AlertComponent.confirm({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar el transporte seleccionado?`,
      onConfirm: () => {
        const updatedData = datosTransporte.filter((data) => data !== item);
        setDatosTransporte(updatedData);
  
        AlertComponent.success({
          title: 'Eliminado',
          text: `Transporte eliminado de manera exitosa`,
        });
      },
    });
  };

  const guardarTransporte = (newTransport) => {
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

  const links = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/GestionTransporte', label: 'Gestion de transportes' }
  ];

  const cancelarEdicion = () => {
    setEditingTransport(null); // Salir del modo de edición
  };
  

  return (
    <div>
      <NavAdmin />
      <BreadCrumb links={links} />
      <div className="container my-5">
        <h2 className="size-font-title text-center mb-4">Gestion de transportes</h2>
      </div>
      <CustomTable
        data={datosTransporte}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Buscar transporte..."
        edicion={editingTransport}
      />
      <div className="px-5 container">
        <FormularioTransporte
          onAdd={guardarTransporte}
          editingTransport={editingTransport}
          formularioForm={false}
          onCancel={cancelarEdicion}
        />
      </div>
      <Footer />
    </div>
  );
};