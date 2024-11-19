import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';

export const InformacionSaldos = () => {
  return (
    <Container className="mt-5">
      <div className="p-4 border rounded shadow-sm bg-white">
        <h4 className="text-center mb-4">Información sobre saldos</h4>
        <Form>
          <Row className="mb-3 align-items-center">
            <Col xs={12} md={6}>
              <Form.Group controlId="saldoAnterior">
                <Form.Label>Saldo disponible según el documento anterior:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="345623 m³"
                  readOnly
                  className="text-muted"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3 align-items-center">
            <Col xs={12} md={6}>
              <Form.Group controlId="cantidadActual">
                <Form.Label>Cantidad que ampara este documento:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="345 m³"
                  readOnly
                  className="text-muted"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3 align-items-center">
            <Col xs={12} md={6}>
              <Form.Group controlId="saldoSiguiente">
                <Form.Label>Saldo que pasa al siguiente documento:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="345278 m³"
                  readOnly
                  className="text-muted"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};
