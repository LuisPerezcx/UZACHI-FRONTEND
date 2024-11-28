import React, { useState } from 'react';
import { Footer } from '../../components/Footer';
import NavAdmin from '../../components/NavAdmin';
import { TableSearch } from '../../components/TableSearch';
import { GenerarReporteModal } from './Components/ModalGenerarReporte'; 


import excel from '../../assets/excel.png';   

import { Modal, Container, Row, Col, Table, Button, InputGroup, FormControl, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import PaginationTable from '../../components/PaginationTable';
import { BreadCrumb } from '../../components/BreadCrumb';

export const ReportesPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const links = [
    { url: '/', label: 'Inicio' },
    { url: '/ReportesSemarnat', label: 'Reportes SEMARNAT' }
  ];

  const columns = [
    { label: 'No.', key: 'id' },
    { label: 'Nombre documento', key: 'name' },
    { label: 'Comunidad', key: 'community' },
    { label: 'Periodo', key: 'period' },
  ];

  const filters = [
    { label: 'No.', value: 'id' },
    { label: 'Nombre documento', value: 'name' },
    { label: 'Periodo inicio', value: 'filtropInicio' }
  ];

  const actions = [
    {
      label: 'Editar',
      handler: (item) => console.log('Edit item:', item),
    },
    {
      label: 'Eliminar',
      handler: (item) => console.log('Delete item:', item),
    }
  ];

  const SimulatedData = [
    { id: 1, name: "MOVIMIENTO DE MADERA ENE-JUN 2024", community: "Santiago Xiacuí", period: "2019 - 2020" },
    { id: 2, name: "MOVIMIENTO DE MADERA JUL-DIC 2024", community: "San Juan Bautista", period: "2020 - 2021" },
    { id: 3, name: "REPORTE DE ACTIVIDADES 2023", community: "Santa María Yolotepec", period: "2022 - 2023" },
    { id: 4, name: "INFORME AMBIENTAL", community: "San Pedro Juchatengo", period: "2021 - 2022" },
    { id: 5, name: "INVENTARIO DE BOSQUE 2022", community: "San José del Progreso", period: "2018 - 2019" },
    { id: 6, name: "MOVIMIENTO DE MADERA ENE-JUN 2023", community: "Santo Domingo Albarradas", period: "2020 - 2021" },
    { id: 7, name: "ANÁLISIS DE SUELO", community: "San Agustín Etla", period: "2023 - 2024" },
  ];


  return (
    <div>
      <NavAdmin/>
      <BreadCrumb links={links} />
      <div className='justify-content-center container'>
        <h2 className='text-center mb-5'>REPORTES SEMARNAT</h2>
        <div className='d-flex justify-content-end '>
          <button className='btn btn-success me-3'  onClick={handleShow}>Generar reporte</button>
          <img src={excel} alt='excel' />
        </div>
        <div className="d-flex justify-content-center">
          <TableSearch
            endpoint={null}
            columns={columns}
            filters={filters}
            actions={actions}
            data={SimulatedData}
          />
        </div>
      </div>
      <GenerarReporteModal show={show} handleClose={handleClose} />
      <Footer />
    </div>

  );
};
