import React, { useState } from "react";
import Swal from "sweetalert2"; 

const FormularioCliente = ({ onAdd, editarClientesFrecuentes }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    domicilioDestinatario: '',
    poblacion: '',
    entidad: '',
    curp: '',
    rfn: '',
    municipio: '',
    domicilio: ''
  });

  React.useEffect(() => {
    if (editarClientesFrecuentes) {
      setFormData(editarClientesFrecuentes);
    }
  }, [editarClientesFrecuentes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.domicilioDestinatario || !formData.poblacion || !formData.entidad) {
      Swal.fire({
        title: 'Datos incompletos',
        text: 'Por favor, llena todos los campos requeridos.',
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

    // Mostrar notificación de éxito
    Swal.fire({
      title: editarClientesFrecuentes ? 'Cliente actualizado' : 'Cliente agregado',
      text: editarClientesFrecuentes
        ? `El cliente "${formData.nombre}" ha sido actualizado correctamente.`
        : `El cliente "${formData.nombre}" ha sido agregado correctamente.`,
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
      nombre: '',
      domicilioDestinatario: '',
      poblacion: '',
      entidad: '',
      curp: '',
      rfn: '',
      municipio: '',
      domicilio: ''
    });
  };

  return (
    <div className="mx-5 mt-4 mb-4 tarjeta-border">
      <div className="p-3">
        <h5 className="text-center mb-3 size-font-title">Agregar nuevo cliente</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Columna 1 */}
            <div className="col-md-6">
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="nombre" className="form-label me-2" style={{ width: "150px" }}>
                  Nombre: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={formData.nombre}
                  placeholder="Ingrese el nombre"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label
                  htmlFor="domicilioDestinatario"
                  className="form-label me-2"
                  style={{ width: "200px" }}
                >
                  Dom. destinatario: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="domicilioDestinatario"
                  value={formData.domicilioDestinatario}
                  placeholder="Ingrese el domicilio"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="poblacion" className="form-label me-2" style={{ width: "150px" }}>
                  Población: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="poblacion"
                  value={formData.poblacion}
                  placeholder="Ingrese la población"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="entidad" className="form-label me-2" style={{ width: "150px" }}>
                  Entidad: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="entidad"
                  value={formData.entidad}
                  placeholder="Ingrese la entidad"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Columna 2 */}
            <div className="col-md-6">
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="curp" className="form-label me-2" style={{ width: "150px" }}>
                  CURP:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="curp"
                  value={formData.curp}
                  placeholder="Ingrese la CURP"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="rfn" className="form-label me-2" style={{ width: "150px" }}>
                  RFN:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="rfn"
                  value={formData.rfn}
                  placeholder="Ingrese el RFN"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="municipio" className="form-label me-2" style={{ width: "150px" }}>
                  Municipio:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="municipio"
                  value={formData.municipio}
                  placeholder="Ingrese el municipio"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="domicilio" className="form-label me-2" style={{ width: "150px" }}>
                  Domicilio:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="domicilio"
                  value={formData.domicilio}
                  placeholder="Ingrese el domicilio"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button variant="success" type="submit" size="sm">
              {editarClientesFrecuentes ? 'Actualizar' : 'Agregar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioCliente;
