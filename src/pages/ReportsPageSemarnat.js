import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import NavAdmin from '../components/NavAdmin';

import { Modal, Container, Row, Col, Table, Button, InputGroup, FormControl, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import PaginationTable from '../components/PaginationTable';

export const ReportesPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Datos ficticios
  const reportsData = [
    { id: 1, name: "MOVIMIENTO DE MADERA ENE-JUN 2024", community: "Santiago Xiacuí", period: "2019 - 2020" },
    { id: 2, name: "MOVIMIENTO DE MADERA JUL-DIC 2024", community: "San Juan Bautista", period: "2020 - 2021" },
    { id: 3, name: "REPORTE DE ACTIVIDADES 2023", community: "Santa María Yolotepec", period: "2022 - 2023" },
    { id: 4, name: "INFORME AMBIENTAL", community: "San Pedro Juchatengo", period: "2021 - 2022" },
    { id: 5, name: "INVENTARIO DE BOSQUE 2022", community: "San José del Progreso", period: "2018 - 2019" },
    { id: 6, name: "MOVIMIENTO DE MADERA ENE-JUN 2023", community: "Santo Domingo Albarradas", period: "2020 - 2021" },
    { id: 7, name: "ANÁLISIS DE SUELO", community: "San Agustín Etla", period: "2023 - 2024" },
    { id: 8, name: "REPORTE DE RESIDUOS", community: "San Bartolo Coyotepec", period: "2017 - 2018" },
    { id: 9, name: "EVALUACIÓN DE IMPACTO", community: "Santa Catarina Juquila", period: "2016 - 2017" },
    { id: 10, name: "REPORTE DE AGUA", community: "San Pablo Etla", period: "2021 - 2022" },
    { id: 1, name: "MOVIMIENTO DE MADERA ENE-JUN 2024", community: "Santiago Xiacuí", period: "2019 - 2020" },
    { id: 2, name: "MOVIMIENTO DE MADERA JUL-DIC 2024", community: "San Juan Bautista", period: "2020 - 2021" },
    { id: 3, name: "REPORTE DE ACTIVIDADES 2023", community: "Santa María Yolotepec", period: "2022 - 2023" },
    { id: 4, name: "INFORME AMBIENTAL", community: "San Pedro Juchatengo", period: "2021 - 2022" },
    { id: 5, name: "INVENTARIO DE BOSQUE 2022", community: "San José del Progreso", period: "2018 - 2019" },
    { id: 6, name: "MOVIMIENTO DE MADERA ENE-JUN 2023", community: "Santo Domingo Albarradas", period: "2020 - 2021" },
    { id: 7, name: "ANÁLISIS DE SUELO", community: "San Agustín Etla", period: "2023 - 2024" },
    { id: 8, name: "REPORTE DE RESIDUOS", community: "San Bartolo Coyotepec", period: "2017 - 2018" },
    { id: 9, name: "EVALUACIÓN DE IMPACTO", community: "Santa Catarina Juquila", period: "2016 - 2017" },
    { id: 10, name: "REPORTE DE AGUA", community: "San Pablo Etla", period: "2021 - 2022" },
    { id: 1, name: "MOVIMIENTO DE MADERA ENE-JUN 2024", community: "Santiago Xiacuí", period: "2019 - 2020" },
    { id: 2, name: "MOVIMIENTO DE MADERA JUL-DIC 2024", community: "San Juan Bautista", period: "2020 - 2021" },
    { id: 3, name: "REPORTE DE ACTIVIDADES 2023", community: "Santa María Yolotepec", period: "2022 - 2023" },
    { id: 4, name: "INFORME AMBIENTAL", community: "San Pedro Juchatengo", period: "2021 - 2022" },
    { id: 5, name: "INVENTARIO DE BOSQUE 2022", community: "San José del Progreso", period: "2018 - 2019" },
    { id: 6, name: "MOVIMIENTO DE MADERA ENE-JUN 2023", community: "Santo Domingo Albarradas", period: "2020 - 2021" },
    { id: 7, name: "ANÁLISIS DE SUELO", community: "San Agustín Etla", period: "2023 - 2024" },
    { id: 8, name: "REPORTE DE RESIDUOS", community: "San Bartolo Coyotepec", period: "2017 - 2018" },
    { id: 9, name: "EVALUACIÓN DE IMPACTO", community: "Santa Catarina Juquila", period: "2016 - 2017" },
    { id: 10, name: "REPORTE DE AGUA", community: "San Pablo Etla", period: "2021 - 2022" },
  ];


  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Nombre documento', accessor: 'name' },
    { header: 'Comunidad', accessor: 'community' },
    { header: 'Periodo', accessor: 'period' },
  ];

  return (
    <Container fluid className="reports-page">
      <NavAdmin/>

      {/* Reportes SEMARNAT */}
      <Row className="text-center my-4">
        <Col>
          <h3>REPORTES SEMARNAT</h3>
        </Col>
      </Row>

      <br/>

      {/* Barra de búsqueda y filtro */}
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <InputGroup>
            <FormControl placeholder="Buscar informes" />
            <DropdownButton variant="outline-secondary" title={<i className="bi bi-funnel"></i>} align="end">
              <Dropdown.Item>Folio</Dropdown.Item>
              <Dropdown.Item>Fecha</Dropdown.Item>
              <Dropdown.Item>Nombre</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Col>
        <Col md={2} className=" d-flex justify-content-center">
          <Button style={{ backgroundColor: '#14C3A2', color: '#fff' }} onClick={handleShow}>Generar reporte</Button>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className='container'>
            {/* Fila de Fecha de Inicio */}
            <div className='row mb-3'>
              <div className='col-4 text-start'>
                <label htmlFor="fechaInicio" className='form-label'>Fecha de inicio:</label>
              </div>
              <div className='col-8'>
                <input type="date" id="fechaInicio" className='form-control' placeholder='Selecciona la fecha de inicio' />
              </div>
            </div>

            {/* Fila de Fecha Final */}
            <div className='row mb-3'>
              <div className='col-4 text-start'>
                <label htmlFor="fechaFinal" className='form-label'>Fecha final:</label>
              </div>
              <div className='col-8'>
                <input type="date" id="fechaFinal" className='form-control' placeholder='Selecciona la fecha final' />
              </div>
            </div>

            {/* Botón Generar */}
            <div className='row mt-3'>
              <div className='col text-center'>
                <button className='style-button' onClick={() => console.log("Generar reporte")}>Generar</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Tabla de informes */}
     {/* Tabla de informes */}
     <Row className="justify-content-center">
        <Col md={10}>
          <PaginationTable columns={columns} data={reportsData} itemsPerPage={5} />
        </Col>
      </Row>

      <Footer/>
    </Container>
  );
};
