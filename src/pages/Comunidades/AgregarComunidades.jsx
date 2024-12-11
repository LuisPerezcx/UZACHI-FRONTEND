import React, { useState } from 'react'
import { GestionComunidades } from '../../components/Comunidades/GestionComunidades'
import { Footer } from '../../components/Footer'
import NavAdmin from '../../components/NavAdmin'
import { CustomTable } from '../../components/TablaIconos'
import Swal from "sweetalert2"; 
import { BreadCrumb } from '../../components/BreadCrumb'
import { AlertComponent } from '../../components/AlertComponent'


export const AgregarComunidades = () => {
      // Datos simulados
  const [listaComunidades, setListaComunidades] = useState([
    {
      nombreComunidad: 'San Juan del Bosque',
      municipio: 'Villa Alta',
      entidad: 'Oaxaca',
      codigoPostal: '68250',
      rfc: 'SJB123456T12',
      rfn: '1234567890',
      domicilioFiscal: 'Calle Principal S/N, San Juan del Bosque, Oaxaca'
  },
  
  {
      nombreComunidad: 'San Pedro Yosotato',
      municipio: 'Villa Alta',
      entidad: 'Oaxaca',
      codigoPostal: '68255',
      rfc: 'SPY987654T34',
      rfn: '0987654321',
      domicilioFiscal: 'Avenida 5 de Mayo No. 10, San Pedro Yosotato, Oaxaca'
  },
  
  {
      nombreComunidad: 'San Miguel de Quetzaltepec',
      municipio: 'Villa Alta',
      entidad: 'Oaxaca',
      codigoPostal: '68260',
      rfc: 'SMQ876543T56',
      rfn: '1122334455',
      domicilioFiscal: 'Calle Reforma No. 20, San Miguel de Quetzaltepec, Oaxaca'
  }
  
  ]);
  const [editarComunidades, setEditarComunidades] = useState(null)

  // Configuración de columnas
  const columns = [
    { header: 'Comunidad', accessor: 'nombreComunidad' }, 
    { header: 'Municipio', accessor: 'municipio' },
    { header: 'Entidad', accessor: 'entidad' },
  ];

  const eliminarComunidades = (item) => {
    AlertComponent.confirm({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar la comunidad seleccionada?`,
      onConfirm: () => {
        const nuevaComunidad = listaComunidades.filter((data) => data !== item);
        setListaComunidades(nuevaComunidad);
  
        AlertComponent.success({
          title: 'Eliminado',
          text: `Comunidad eliminada de manera exitosa`,
        });
      },
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
    { url: '/AgregarComunidades', label: 'Gesition de comunidades' }
  ];

  const cancelarEdicion = () => {
    setEditarComunidades(null); // Salir del modo de edición
  };

  return ( 
    <>
        <NavAdmin></NavAdmin>
        <BreadCrumb links={links} />
        <div className="container my-5">
            <h2 className="size-font-title text-center mb-4">Gestion de comunidades</h2>
        </div>
        <CustomTable
            data={listaComunidades}
            columns={columns}
            onEdit={editarComunidad}
            onDelete={eliminarComunidades}
            searchPlaceholder='Buscar comunidad...'
            edicion={editarComunidades}
        />
        
          <GestionComunidades
            onAdd={guardarDatosComunidades}
            editarComunidades={editarComunidades}
            onCancel={cancelarEdicion}
          />
        
        <div className='mt-5'>
          <Footer/>
        </div>
    </>
  )
}
