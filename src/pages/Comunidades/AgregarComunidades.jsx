import React, { useState } from 'react'
import { GestionComunidades } from '../../components/Comunidades/GestionComunidades'
import { Footer } from '../../components/Footer'
import NavAdmin from '../../components/NavAdmin'
import { CustomTable } from '../../components/TablaIconos'
import Swal from "sweetalert2"; 
import { BreadCrumb } from '../../components/BreadCrumb'


export const AgregarComunidades = () => {
      // Datos simulados
  const [listaComunidades, setListaComunidades] = useState([]);
  const [editarComunidades, setEditarComunidades] = useState(null)

  // Configuración de columnas
  const columns = [
    { header: 'Comunidad', accessor: 'nombreComunidad' }, 
    { header: 'Municipio', accessor: 'municipio' },
    { header: 'Entidad', accessor: 'entidad' },
  ];

  const eliminarComunidades = (item) => {
    const nuevaComunidad = listaComunidades.filter((data) => data != item);
    setListaComunidades(nuevaComunidad)

    Swal.fire({
      title: 'Eliminado',
      text: `Comunidad eliminada de manera exitosa`,
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


  const editarComunidad = (item) => {
    setEditarComunidades(item)
  };

  const guardarDatosComunidades = (nuevaComunidad) => {
    if (editarComunidades) {
      // Actualizar transporte existente
      const updatedData = listaComunidades.map((data) =>
        data === editarComunidades ? nuevaComunidad : data
      );
      setListaComunidades(updatedData);
      setEditarComunidades(null); // Salir del modo de edición
    } else {
      setListaComunidades([...listaComunidades, { ...nuevaComunidad, id: Date.now() }]);
    }
  }

  const links = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/AgregarComunidades', label: 'Comunidades' }
  ];

  return ( 
    <>
        <NavAdmin></NavAdmin>
        <BreadCrumb links={links} />
        <div className="container my-5">
            <h2 className="size-font-title text-center mb-4">Comunidades</h2>
        </div>
        <CustomTable
            data={listaComunidades}
            columns={columns}
            onEdit={editarComunidad}
            onDelete={eliminarComunidades}
            searchPlaceholder='Buscar comunidad'
            edicion={editarComunidades}
        />
        <GestionComunidades
          onAdd={guardarDatosComunidades}
          editarComunidades={editarComunidades}
        />
        <Footer/>
    </>
  )
}
