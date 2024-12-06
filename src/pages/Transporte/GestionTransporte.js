import React, { useState } from 'react';
import { FormularioTransporte } from '../Formulario/Components/FormularioTransporte';
import NavAdmin from '../../components/NavAdmin';
import { Footer } from '../../components/Footer';
import { CustomTable } from '../../components/TablaIconos';
import Swal from "sweetalert2"; 
import { BreadCrumb } from '../../components/BreadCrumb';
import { AlertComponent } from '../../components/AlertComponent';


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

  const links = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/GestionTransporte', label: 'Transportes' }
  ];

  return (
    <div>
      <NavAdmin />
      <BreadCrumb links={links} />
      <div className="container my-5">
        <h2 className="size-font-title text-center mb-4">Transportes</h2>
      </div>
      <CustomTable
        data={datosTransporte}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Buscar transporte..."
        edicion={editingTransport}
      />
      <div className='px-5'>
        <FormularioTransporte
          onAdd={handleSave}
          editingTransport={editingTransport}
          formularioForm={false}
        />
      </div>
      <Footer />
    </div>
  );
};