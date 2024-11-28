import React, { useState } from 'react'
import { GestionComunidades } from '../../components/Comunidades/GestionComunidades'
import { Footer } from '../../components/Footer'
import NavAdmin from '../../components/NavAdmin'
import { CustomTable } from '../../components/TablaIconos'

export const AgregarComunidades = () => {
      // Datos simulados
  const [listaComunidades, setListaComunidades] = useState([]);
  const [editarComunidades, setEditarComunidades] = useState(null)

  // Configuración de columnas
  const columns = [
    { header: 'Comunidad', accessor: 'comunidad' },
    { header: 'Municipio', accessor: 'municipio' },
    { header: 'Entidad', accessor: 'entidad' },
  ];

  const eliminarComunidades = (item) => {
    const nuevaComunidad = listaComunidades.filter((data) => data != item);
    setListaComunidades(nuevaComunidad)
  };


  const editarComunidad = (item) => {
    setEditarComunidades(item)
  };

  const guardarDatosComunidades = (nuevaComunidad) => {
    if (editarComunidad) {
      // Actualizar transporte existente
      const updatedData = listaComunidades.map((data) =>
        data === editarComunidades ? nuevaComunidad : data
      );
      setListaComunidades(updatedData);
      setEditarComunidades(null); // Salir del modo de edición
    } else {
      // Agregar nuevo transporte
      setListaComunidades([...listaComunidades, { ...nuevaComunidad, id: Date.now() }]);
    }
  }

  return ( 
    <>
        <NavAdmin></NavAdmin>
        <div className="container my-5">
            <h2 className="text-center mb-4">Comunidades</h2>
        </div>
        <CustomTable
            data={listaComunidades}
            columns={columns}
            onEdit={editarComunidad}
            onDelete={eliminarComunidades}
            searchPlaceholder='Buscar comunidad'
        />
        <GestionComunidades
          onAdd={guardarDatosComunidades}
          editarComunidades={editarComunidades}
        />
        <Footer/>
    </>
  )
}
