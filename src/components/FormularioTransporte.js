import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

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
            <Button variant="success" type="submit" size="sm">
              {editingTransport ? 'Actualizar' : 'Agregar'}
            </Button>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-md-6 col-lg-3 col-xxl-2 mt-3">
          <label className="size-font-campo mb-1">Medio de transporte:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-3 mt-3">
          <input
            type="text"
            className="form-control"
            name="medioTransporte"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-1 mt-3">
          <label className="size-font-campo">Marca:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-2 mt-3">
          <input
            type="text"
            className="form-control"
            name="marca"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-1 mt-3">
          <label className="size-font-campo">Modelo:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-3 mt-3">
          <input
            type="text"
            className="form-control"
            name="modelo"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 col-lg-6 col-xxl-2">
          <label className="size-font-campo">Propietario:</label>
        </div>
        <div className="col-md-6 col-lg-6 col-xxl-5">
          <input
            type="text"
            className="form-control"
            name="propietario"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-6 col-lg-3 col-xxl-2">
          <label className="size-font-campo">Capacidad:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-3">
          <input
            type="text"
            className="form-control"
            name="capacidad"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 col-lg-3 col-xxl-2">
          <label className="size-font-campo">Placas o matrícula:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-3">
          <input
            type="text"
            className="form-control"
            name="placas"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-2">
          <label className="size-font-campo">Tipo de transporte:</label>
        </div>
        <div className="col-md-6 col-lg-3 col-xxl-5">
          <SelectCombo
            name="tipoTransporte"
            id="tipoTransporte"
            options={opcionesTipoTransporte}
          />
        </div>
      </div>

      {/* Condicional para mostrar el campo de Conductor si 'formularioFormatoField' es true */}
      {formularioFormatoField && (
        <div className="row mt-3">
          <div className="col-md-6 col-lg-3 col-xxl-2">
            <label className="size-font-campo">Conductor:</label>
          </div>
          <div className="col-md-6 col-lg-3 col-xxl-5">
            <input
              type="text"
              className="form-control"
              name="conductor"
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      {/* Condicional para mostrar el botón Agregar si 'formularioFormatoField' es false */}
      {!formularioFormatoField && (
        <div className="text-center mt-4">
          <Button
            label="Agregar"
            onClick={() => { console.log('Botón clickeado'); }}
            className="btn-success"
          />
        </div>
      )}

    </div>
  );
};
