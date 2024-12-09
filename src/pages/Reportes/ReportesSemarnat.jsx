// src/pages/ReportesSemarnat.jsx
import React, { useState } from 'react';
import NavAdmin from '../../components/NavAdmin';
import { TableSearch } from './Components/TableSearch';
import { GenerarReporteModal } from './Components/ModalGenerarReporte';
import { BreadCrumb } from '../../components/BreadCrumb';
import { Footer } from '../../components/Footer';

import excel from '../../assets/excel.png';

export const ReportesSemarnat = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const linksLabel = [
    { url: '/', label: 'Inicio' },
    { url: '/ReportesSemarnat', label: 'Reportes SEMARNAT' }
  ];

  const columnsLabel = [
    { label: 'No.', key: 'id' },
    { label: 'Nombre documento', key: 'nombre' },
    { label: 'Comunidad', key: 'comunidad' },
    { label: 'Periodo', key: 'periodo' },
  ];

  const filtersLabel = [
    { label: 'Comunidad', value: 'filtroComunidad' },
    { label: 'Periodo inicio', value: 'filtropInicio' }
  ];

  const actionsLabel = [
    {
      label: 'Descargar',
      handler: (item) => console.log('Editar elemento:', item),
    },
    {
      label: 'Eliminar',
      handler: (item) => console.log('Eliminar elemento:', item),
    }
  ];

  const simulatedDataLabel = [
    { id: 1, nombre: "MOVIMIENTO DE MADERA ENE-JUN 2024", comunidad: "Santiago Xiacuí", periodo: "2019 - 2020" },
    { id: 2, nombre: "MOVIMIENTO DE MADERA JUL-DIC 2024", comunidad: "San Juan Bautista", periodo: "2020 - 2021" },
    { id: 3, nombre: "REPORTE DE ACTIVIDADES 2023", comunidad: "Santa María Yolotepec", periodo: "2022 - 2023" },
    { id: 4, nombre: "INFORME AMBIENTAL", comunidad: "San Pedro Juchatengo", periodo: "2021 - 2022" },
    { id: 5, nombre: "INVENTARIO DE BOSQUE 2022", comunidad: "San José del Progreso", periodo: "2018 - 2019" },
    { id: 6, nombre: "MOVIMIENTO DE MADERA ENE-JUN 2023", comunidad: "Santo Domingo Albarradas", periodo: "2020 - 2021" },
    { id: 7, nombre: "ANÁLISIS DE SUELO", comunidad: "San Agustín Etla", periodo: "2023 - 2024" },
  ];

  return (
    <div>
      <NavAdmin />
      <BreadCrumb links={linksLabel} />
      <div className='justify-content-center container'>
        <h2 className='text-center mb-5'>REPORTES SEMARNAT</h2>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-success me-3 reporte-btn' onClick={handleShow}>Generar reporte</button>
          <img className='excel-icon' src={excel} alt='excel' />
        </div>
        <div className="d-flex justify-content-center">
          <TableSearch
            endpoint={null}
            columns={columnsLabel}
            filters={filtersLabel}
            actions={actionsLabel}
            data={simulatedDataLabel}
          />
        </div>
      </div>
      <GenerarReporteModal show={show} handleClose={handleClose} />
      <Footer />
    </div>
  );
};
