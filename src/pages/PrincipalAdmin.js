import React, { useState } from 'react';
import NavAdmin from '../components/NavAdmin';
import { BreadCrumb } from '../components/BreadCrumb';
import { Link } from 'react-router-dom'; // Importa Link
import { Modal } from 'react-bootstrap';
import { Footer } from '../components/Footer'

// Importacion de los iconos para la pagia
import iconFormulario from '../assets/icon-formuario.png';
import iconUsuarioAdd from '../assets/icon-add-user.png';
import iconInforme from '../assets/icon-informe.png';
import iconFolios from '../assets/icon-folios.png';
import iconInformeSemarnat from '../assets/icon-informe-semarnat.png'
import iconInformeInterno from '../assets/icon-informe-interno.png'
import { TarjetaAdmin } from '../components/TarjetaAdmin';
import { ModalC } from '../components/ModalC';

export const PrincipalAdmin = () => {
  // Estado para manejar el modal
  const [show, setShow] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const links = [
    { url: '/', label: 'Inicio' },
    { url: '/', label: 'Administrador' }
  ];

  const modalContent = [
    {
      icon: iconInformeSemarnat,
      title: 'Administración de los informes para SEMARNAT',
      buttonLabel: 'Administrar',
      route: '/ReportesSemarnat',
      onClick: () => console.log('Administrar informes SEMARNAT')
    },
    {
      icon: iconInformeInterno,
      title: 'Administración de los informes internos de UZACHI',
      buttonLabel: 'Administrar',
      route: '/ReportesInternos',
      onClick: () => console.log('Administrar informes internos')
    }
  ];

  return (
    <div>
      <NavAdmin />
      <BreadCrumb links={links} />
      <h1 className='size-font-title text-center mb-4'>ADMINISTRADOR</h1>
      <div className='container align-items-center justify-content-center text-center'>
        <div className='row'>
            <TarjetaAdmin
                imgSrc={iconFormulario}
                title="Formulario"
                description="Registro de Remisión y Reembarque: Formulario"
                buttons={[
                { label: 'Acceder', link: '/Formulario'}
                ]}
            />

            <TarjetaAdmin
                imgSrc={iconUsuarioAdd}
                title="Usuario"
                description="Agrega y administra los usuarios que pueden acceder"
                buttons={[
                { label: 'Administrar', onClick: () => console.log('Usuario clicado') }
                ]}
            />

            <TarjetaAdmin
                imgSrc={iconInforme}
                title="Informes"
                description="Administra los informes internos e informes SEMARNAT"
                buttons={[
                    { label: 'Administrar', onClick: () => { handleShow(); console.log('Informes clicado'); }}
                ]}
            />

            <TarjetaAdmin
                imgSrc={iconFolios}
                title="Folios"
                description="Administra y asigna los folios asignado para cada comunidad"
                buttons={[
                { label: 'Asignar folios', link: '/FoliosAsignados'}
                ]}
            />
        </div>
      </div>
      <ModalC show={show} onClose={handleClose} content={modalContent} />
      
      <Footer></Footer>
    </div>
  );
};
