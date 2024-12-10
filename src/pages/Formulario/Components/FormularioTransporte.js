import React, {useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Button } from '../../../components/Boton';
import Swal from "sweetalert2"; 


export const FormularioTransporte = ({ onAdd, editingTransport, formularioForm, onCancel }) => {
  const [formularioFormatoField, setFormularioFormatoField] = useState(formularioForm);

  const seleccionarCarro = () => {
    console.log('Seleccionar carro clickeado');
  };

  const initialFormState = {
    medio: '',
    marca: '',
    modelo: '',
    propietario: '',
    capacidad: '',
    placas: '',
    otro: '',
    tipo: '',
  };

  const [formData, setFormData] = useState(initialFormState);

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
          confirmButton.style.backgroundColor = 'var(--color-verde)';
        }
      });
      return;
    }

    onAdd(formData); 

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

  const handleCancel = () => {
    setFormData(initialFormState); // Limpia el formulario
    if (onCancel) {
      onCancel(); // Notifica al componente padre
    }
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
              <Form.Label>Medio de transporte <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                maxLength={25}
                name="medio"
                value={formData.medio}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Marca <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                maxLength={14}
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Modelo <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                maxLength={14}
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
                maxLength={80}
                name="propietario"
                value={formData.propietario}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Capacidad/Toneladas <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                maxLength={5} // Ajusta este valor según sea necesario para el rango permitido (por ejemplo, hasta 5 caracteres incluyendo el punto)
                name="capacidad"
                value={formData.capacidad}
                onChange={(e) => {
                  const value = e.target.value;

                  // Permitir solo números enteros o decimales
                  if (/^\d*\.?\d*$/.test(value)) {
                    handleChange({ target: { name: "capacidad", value } });
                  }
                }}
                size="sm"
              />

            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Label>Placas o matrícula <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                maxLength={9}
                name="placas"
                value={formData.placas}
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
                <option value="Trocero">Trocero</option>
              </Form.Select>
            </Col>
          </Row>

       


          <div className="text-center">

          {formularioForm && (
              <span className="me-3">Agregar como transporte nuevo</span>
          )}
            <button variant="success" type="submit" size="sm">
              {editingTransport ? 'Actualizar' : 'Agregar'}
            </button> 
            
            {editingTransport && (
            <button
              style={{backgroundColor: 'red'}}
              size="sm"
              onClick={handleCancel}
              className='ms-5'
            >
              Cancelar edicion
            </button>
          )}
          </div>
          
          
        </Form>
    </div>
  );
};

