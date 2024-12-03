import React, {useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Button } from '../../../components/Boton';
import Swal from "sweetalert2"; 


export const FormularioTransporte = ({ onAdd, editingTransport, formularioForm }) => {
  const [formularioFormatoField, setFormularioFormatoField] = useState(formularioForm);

  const seleccionarCarro = () => {
    console.log('Seleccionar carro clickeado');
  };

  const handleInputChange = (event) => {
    console.log("${event.target.name}: ${event.target.value}");
  };

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
      Swal.fire({
        title: 'Datos incompletos',
        text: `Por favor, llena todos los campos requeridos.`,
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          const confirmButton = Swal.getConfirmButton();
          confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
        }
      });
      return;
    }

    onAdd(formData); // Llamar a la función `onAdd` con los datos del formulario

    Swal.fire({
      title: editingTransport ? 'Transporte actualizado' : 'Transporte agregado',
      text: editingTransport
        ? `El transporte con placas "${formData.placas}" ha sido actualizado correctamente.`
        : `El transporte con placas "${formData.placas}" ha sido agregado correctamente.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 3000, // Cerrar automáticamente después de 3 segundos
      timerProgressBar: true,
      didOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
      }
    });

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
    <div className="mx-auto tarjeta-border mt-5 mx-5 mb-5 p-5">
      {/* Título del formulario */}
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h5 className="card-title size-font-title">
            Agregar transporte
          </h5>
        </div>
      </div>

      {/* Agregar datos de carro registrado */}
      {formularioFormatoField && (
        <div className="row">
          <div className="col-12 text-end mt-2">
          <span className="me-2 form-label">Agregar datos de un carro registrado</span>
            <Button label="Seleccionar carro" onClick={seleccionarCarro} className="btn-success" />
          </div>
        </div>
      )}

      
        <Form onSubmit={handleSubmit} >
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
              <Form.Label>Propietario <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="propietario"
                value={formData.propietario}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Capacidad <span className="text-danger">*</span></Form.Label>
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
              <Form.Label>Tipo <span className="text-danger">*</span></Form.Label>
              <Form.Select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                size="sm"
              >
                <option value="">Selecciona un tipo</option>
                <option value="Torton">Torton</option>
                <option value="Trocer">Trocero</option>
              </Form.Select>
            </Col>
          </Row>

          {/* Campo conductor (condicional) */}
        {formularioFormatoField && (
          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <label className="form-label">Conductor:</label>
              <input
                type="text"
                className="form-control"
                name="conductor"
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

          <div className="text-center">
            <button variant="success" type="submit" size="sm">
              {editingTransport ? 'Actualizar' : 'Agregar'}
            </button> 
          </div>
        </Form>
    </div>
  );
};

