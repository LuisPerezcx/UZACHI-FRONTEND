import React from 'react';
import { Container, Row, Col, Table, Button, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

function ReportsPage() {
  return (
    <Container fluid className="reports-page">
      {/* Header */}
      <Row className="bg-dark text-white py-3 mx-3 mt-3 rounded">
        <Col md={2}>
          <h2 className="logo">UZACHI</h2>
        </Col>
        <Col md={10} className="d-flex justify-content-end align-items-center">
          <Button variant="link" className="text-white">Informes</Button>
          <Button variant="link" className="text-white">Historial</Button>
          <Button variant="link" className="text-white">Contacto</Button>
          <img src="usuario 1.png" alt="Usuario" className="user-profile ms-3" />
          </Col>
      </Row>

      <Row className="mx-3">
        <Col md={2} className="text-blue">
          <span>Inicio</span> | <span>Informes</span>
        </Col>
      </Row>

      <br/>

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
        <Button style={{ backgroundColor: '#14C3A2', color: '#fff' }}>Generar reporte</Button>
        </Col>  
      </Row>

      {/* Tabla de informes */}
      <Row className="justify-content-center">
        <Col md={10}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre documento</th>
                <th>Comunidad</th>
                <th>Periodo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MOVIMIENTO DE MADERA ENE-JUN 2024</td>
                <td>Santiago Xiacuí</td>
                <td>2019 - 2020</td>
                <td>
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-dark">
                      <i className="bi bi-three-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Descargar</Dropdown.Item>
                      <Dropdown.Item>Imprimir</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>


              <tr>
                <td>1</td>
                <td>MOVIMIENTO DE MADERA ENE-JUN 2024</td>
                <td>Santiago Xiacuí</td>
                <td>2019 - 2020</td>
                <td>
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-dark">
                      <i className="bi bi-three-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Descargar</Dropdown.Item>
                      <Dropdown.Item>Imprimir</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              
              
              
              <tr>
                <td>1</td>
                <td>MOVIMIENTO DE MADERA ENE-JUN 2024</td>
                <td>Santiago Xiacuí</td>
                <td>2019 - 2020</td>
                <td>
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-dark">
                      <i className="bi bi-three-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Descargar</Dropdown.Item>
                      <Dropdown.Item>Imprimir</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>


      {/* Footer */}
      <Row className="bg-light text-center py-4 mt-4">
      <Col md={4} className="d-flex align-items-center">
        <p>Unión de Comunidades Productoras Forestales Zapotecos-Chinantecos de la Sierra Juárez</p>
        <img src="logo_UZACHI.png" alt="Logo" className="footer-logo me-2" />
      </Col>


        <Col md={4}>
          <p><strong>Contacto</strong></p>
          <p>Teléfono: 951 539 2008</p>
          <p>Correo: uzachi89@gmail.com</p>
          <p>Dirección: Av. Hidalgo, 68760 Capulálpam de Méndez, Oax.</p>
        </Col>

        <Col md={4} className="text-center">
          <p><strong>Redes Sociales</strong></p>

          <div className="d-flex justify-content-center gap-3">
            
            <Button variant="link" href="" target="_blank" className="text-center social-icon">
              <img src="facebook 9.png" alt="Facebook" className="social-image" />
              <p className="text-black">Facebook</p>
            </Button>

            <Button variant="link" href="" target="_blank" className="text-center social-icon">
              <img src="instagram 1.png" alt="Instagram" className="social-image" />
              <p className="text-black">Instagram</p>
            </Button>

            <Button variant="link" href="" target="_blank" className="text-center social-icon">
              <img src="whatsapp 24.png" alt="WhatsApp" className="social-image" />
              <p className="text-black">WhatsApp</p>
            </Button>
          </div>
        </Col>


      </Row>

       <Row className="barra_inferior text-white text-center py-3 mt-4">
        <Col>
          <p className="mb-0">@ 2024 Copyright: UZACHI</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ReportsPage;
