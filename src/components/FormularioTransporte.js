import React, { useEffect, useState } from 'react';
import { SelectCombo } from './SelectCombo';
import { Button } from './Boton';
import { Col, Form, Row } from 'react-bootstrap';

export const FormularioTransporte = ({ onAdd, editingTransport }) => {
  const [formData, setFormData] = useState({
    medio: '',
    marca: '',
    modelo: '',
    propietario: '',
    capacidad: '',
    placas: '',
    otro: '',
    tipo: '',
  });

  // Efecto para cargar los datos del transporte en edición
  React.useEffect(() => {
    if (editingTransport) {
      setFormData(editingTransport);
    }
  }, [editingTransport]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.propietario || !formData.tipo || !formData.capacidad) {
      alert('Por favor llena todos los campos requeridos.');
      return;
    }

    onAdd(formData); // Llamar a la función `onAdd` con los datos del formulario

    // Reiniciar el formulario
    setFormData({
      medio: '',
      marca: '',
      modelo: '',
      propietario: '',
      capacidad: '',
      placas: '',
      otro: '',
      tipo: '',
    });
  };

  return (
    <div className="container mt-5">
      <div className="form-wrapper">
        <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white small">
          <h4 className="text-center mb-4 form-title">
            {editingTransport ? 'Actualizar transporte' : 'Agregar transporte'}
          </h4>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Label>Medio de transporte</Form.Label>
              <Form.Control
                type="text"
                name="medio"
                value={formData.medio}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                size="sm"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={8}>
              <Form.Label>Propietario</Form.Label>
              <Form.Control
                type="text"
                name="propietario"
                value={formData.propietario}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Capacidad</Form.Label>
              <Form.Control
                type="number"
                name="capacidad"
                value={formData.capacidad}
                onChange={handleChange}
                size="sm"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Label>Placas o matrícula</Form.Label>
              <Form.Control
                type="text"
                name="placas"
                value={formData.placas}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Otro</Form.Label>
              <Form.Control
                type="text"
                name="otro"
                value={formData.otro}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                size="sm"
              >
                <option value="">Selecciona un tipo</option>
                <option value="Torton">Tortón</option>
                <option value="Trocer">Trocer</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="text-center">
            <button variant="success" type="submit" size="sm">
              {editingTransport ? 'Actualizar' : 'Agregar'}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

