import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export const FormularioTransporte = () => {
  return (
    <div className="container mt-5">
      <div className="form-wrapper">
        <Form className="p-4 border rounded shadow-sm bg-white small">
          <h4 className="text-center mb-4 form-title">
            Agregar transporte
          </h4>

          <Row className="mb-3">
            <Col md={4} className="d-flex align-items-center">
              <Form.Label className="form-label">Medio de transporte</Form.Label>
              <Form.Control type="text" size="sm" />
            </Col>
            <Col md={4} className="d-flex align-items-center">
              <Form.Label className="form-label">Marca</Form.Label>
              <Form.Control type="text" size="sm" />
            </Col>
            <Col md={4} className="d-flex align-items-center">
              <Form.Label className="form-label">Modelo</Form.Label>
              <Form.Control type="text" size="sm" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={8} className="d-flex align-items-center">
              <Form.Label className="form-label">Propietario</Form.Label>
              <Form.Control type="text" size="sm" />
            </Col>
            <Col md={4} className="d-flex align-items-center">
              <Form.Label className="form-label">Capacidad</Form.Label>
              <Form.Control type="text" size="sm" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4} className="d-flex align-items-center">
              <Form.Label className="form-label">Placas o matrícula</Form.Label>
              <Form.Control type="text" size="sm" />
            </Col>
            <Col md={4} className="d-flex align-items-center">
              <Form.Label className="form-label">Otro</Form.Label>
              <Form.Control type="text" size="sm" />
            </Col>
            <Col md={4} className="d-flex align-items-center">
              <Form.Label className="form-label">Tipo</Form.Label>
              <Form.Select size="sm">
                <option value="">Selecciona un tipo</option>
                <option value="Torton">Tortón</option>
                <option value="Trocer">Trocer</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="text-center">
            <Button variant="success" className="btn btn-success" type="submit" size="sm">
              Agregar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
