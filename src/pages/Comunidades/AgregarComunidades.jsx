import React from 'react'
import { GestionComunidades } from '../../components/Comunidades/GestionComunidades'
import { Footer } from '../../components/Footer'
import NavAdmin from '../../components/NavAdmin'
import { CustomTable } from '../../components/CustomTable'

export const AgregarComunidades = () => {
      // Datos simulados
  const communityData = [
    { comunidad: 'Capulápam de Méndez', municipio: 'Capulápam de Méndez', entidad: 'Oaxaca' },
    { comunidad: 'Santiago Xiacuí', municipio: 'Santiago Xiacuí', entidad: 'Oaxaca' },
  ];

  // Configuración de columnas
  const columns = [
    { header: 'Comunidad', accessor: 'comunidad' },
    { header: 'Municipio', accessor: 'municipio' },
    { header: 'Entidad', accessor: 'entidad' },
  ];

  // Funciones para manejar la edición y eliminación
  const handleEdit = (item) => {
    console.log('Editar', item);
  };

  const handleDelete = (item) => {
    console.log('Eliminar', item);
  };
  return (
    <>
        <NavAdmin></NavAdmin>
        <div className="container my-5">
            <h2 className="text-center mb-4">Comunidades</h2>
        </div>
        <CustomTable
            data={communityData}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
            searchPlaceholder='Buscar comunidad'
        />
        <GestionComunidades></GestionComunidades>
        <Footer></Footer>
    </>
  )
}
