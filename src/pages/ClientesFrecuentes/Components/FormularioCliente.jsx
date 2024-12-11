import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button } from '../../../components/Boton';
import Swal from "sweetalert2";
import { ModalPlantilla } from "../../../components/Modal/ModalPlantilla";
import { CustomTable } from "../../../components/TablaIconos";

const FormularioCliente = forwardRef(({ onAdd, editarClientesFrecuentes, formularioForm, onCancel }, ref) => {
  const [dentroFormularioForm, setDentroFormularioForm] = useState(formularioForm);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [tituloModal, setTitutloModal] = useState(null);

  const columns = [
    { header: 'Nombre', accessor: 'nombre' },
    { header: 'Domicilio destinatario', accessor: 'domicilioDestinatario' },
    { header: 'Poblacion', accessor: 'poblacion' },
  ];
  const [clientes, setClientes] = useState([
    {
      nombre: 'Luis David Perez Cruz',
      domicilioDestinatario: 'Ixtlan de Juarez',
      poblacion: 'Yahuiche',
      entidad: 'Oaxaca',
      curp: 'HJKL020304LKJA2',
      rfn: '125dfsdgf',
      municipio: 'Ixtlan de Juarez',
      domicilio: 'Independencia SN',
      codigoIdentificacion: '12',
    },
    {
      nombre: 'Maria Lopez Garcia',
      domicilioDestinatario: 'San Pedro Mixtepec',
      poblacion: 'Mixtepec',
      entidad: 'Oaxaca',
      curp: 'MLG010203HZSGN1',
      rfn: '786asdhqw',
      municipio: 'San Pedro Mixtepec',
      domicilio: 'Centro SN',
      codigoIdentificacion: '34',
    },
  ]);

  const initialForm = {
    nombre: '',
    domicilioDestinatario: '',
    poblacion: '',
    entidad: '',
    curp: '',
    rfn: '',
    municipio: '',
    domicilio: '',
    codigoIdentificacion: ''
  }

  const [formData, setFormData] = useState(initialForm);

  React.useEffect(() => {
    if (editarClientesFrecuentes) {
      setFormData(editarClientesFrecuentes);
    }
  }, [editarClientesFrecuentes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) =>{
    let error = '';
    if(!value) error = 'Este campo es obligatorio.';
    switch(name){
      case 'nombre':
        break
      case 'domicilioDestinatario':
        break;
      case 'poblacion':
        break;
      case 'poblacion':
        break;
      case 'entidad':
        break;
      case 'curp':
        break;
      case 'rfn':
        break
      case 'municipio':
        break;
      case 'domicilio':
        break;
      case 'codigoIdentificacion':
          break
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]:error || undefined,
    }));
    return error;
  }

  const validateAllFields = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna si no hay errores
  };

  useImperativeHandle(ref, () => ({
    getValues: () => {
    const isValid = validateAllFields();
    if (!isValid) {
        throw new Error("Hay errores en la sección información del cliente.");
    }
    return formData;
    },
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.domicilioDestinatario || !formData.poblacion || !formData.entidad || !formData.curp || !formData.rfn || !formData.municipio || !formData.domicilio || !formData.codigoIdentificacion) {
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
      domicilio: '',
      codigoIdentificacion: ''
    });
  };

  const seleccionarCliente = () => {
    setTitutloModal('Selecciona un cliente');
    setModalContent(<CustomTable
      data={clientes}
      columns={columns}
      onRowClick={onSelectCliente}
      showActions={false}
    />);
    setShowModal(true);
  }
  const onSelectCliente = (cliente) => {
    setFormData({
      ...formData,
      nombre: cliente.nombre,
      domicilioDestinatario: cliente.domicilioDestinatario,
      poblacion: cliente.poblacion,
      entidad: cliente.entidad,
      curp: cliente.curp,
      rfn: cliente.rfn,
      municipio: cliente.municipio,
      domicilio: cliente.domicilio,
      codigoIdentificacion: cliente.codigoIdentificacion,
    });
    setShowModal(false); // Cierra el modal
  };

  const handleCancel = () => {
    setFormData(initialForm); // Limpia el formulario
    if (onCancel) {
      onCancel(); // Notifica al componente padre
    }
  };

  return (
    <div className="mx-auto mt-5 mb-4 tarjeta-border p-3">
      <h5 className="text-center mb-3 size-font-title">Agregar nuevo cliente</h5>

      {/* Agregar datos de cliente registrado */}
      {dentroFormularioForm && (
        <div className="row mb-4">
          <div className="col-12 text-end mt-2">
            <span className="me-2 form-label">Agregar datos de un cliente frecuente</span>
            <Button label="Seleccionar cliente" onClick={seleccionarCliente} className="btn-success" />
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Columna 1 */}
          <div className="col-md-6 mt-2">
            <label htmlFor="nombre" className="form-label me-2" style={{ width: "150px" }}>
              Nombre: <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={26}
              className="form-control"
              name="nombre"
              value={formData.nombre}
              placeholder="Ingrese el nombre completo"
              onChange={handleChange}
            />
            {errors.nombre && <span className="text-danger">{errors.nombre}</span>}
          </div>
          <div className="col-md-6 mt-2">
            <label
              htmlFor="domicilioDestinatario"
              className="form-label me-2"
              style={{ width: "200px" }}
            >
              Dom. destinatario: <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={45}
              className="form-control"
              name="domicilioDestinatario"
              value={formData.domicilioDestinatario}
              placeholder="Ingrese el domicilio destinatario"
              onChange={handleChange}
            />
            {errors.domicilioDestinatario && <span className="text-danger">{errors.domicilioDestinatario}</span>}
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="poblacion" className="form-label me-2" style={{ width: "150px" }}>
              Población: <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={50}
              className="form-control"
              name="poblacion"
              value={formData.poblacion}
              placeholder="Ingrese la población"
              onChange={handleChange}
            />
            {errors.poblacion && <span className="text-danger">{errors.poblacion}</span>}
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="entidad" className="form-label me-2" style={{ width: "150px" }}>
              Entidad:<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={50}
              className="form-control"
              name="entidad"
              value={formData.entidad}
              placeholder="Ingrese la entidad"
              onChange={handleChange}
            />
            {errors.entidad && <span className="text-danger">{errors.entidad}</span>}
          </div>
          <div className="col-md-4 mt-2">
          <label htmlFor="domicilio" className="form-label me-2" style={{ width: "150px" }}>
              Domicilio: <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={80}
              className="form-control"
              name="domicilio"
              value={formData.domicilio}
              placeholder="Ingrese el domicilio"
              onChange={handleChange}
            />
            {errors.domicilio && <span className="text-danger">{errors.domicilio}</span>}
          </div>

          {/* Columna 2 */}
          <div className="col-md-5 mt-2">
            <label htmlFor="curp" className="form-label me-2" style={{ width: "150px" }}>
              CURP: <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={20}
              className="form-control"
              name="curp"
              value={formData.curp}
              placeholder="Ingrese la CURP"
              onChange={handleChange}
            />
            {errors.curp && <span className="text-danger">{errors.curp}</span>}
          </div>
          <div className="col-md-3 mt-2">
            <label htmlFor="rfn" className="form-label me-2" style={{ width: "150px" }}>
              RFN: <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={45}
              className="form-control"
              name="rfn"
              value={formData.rfn}
              placeholder="Ingrese el RFN"
              onChange={handleChange}
            />
            {errors.rfn && <span className="text-danger">{errors.rfn}</span>}
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="municipio" className="form-label me-2" style={{ width: "150px" }}>
              Municipio:<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={50}
              className="form-control"
              name="municipio"
              value={formData.municipio}
              placeholder="Ingrese el municipio"
              onChange={handleChange}
            />
            {errors.municipio && <span className="text-danger">{errors.municipio}</span>}
          </div>
          <div className="col-md-6 mt-2">
          <label htmlFor="codigoIdentificacion" className="form-label me-2" >
              Codigo de identificacion:<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              maxLength={20}
              className="form-control"
              name="codigoIdentificacion"
              value={formData.codigoIdentificacion}
              placeholder="Ingrese el codgio de identificacion"
              onChange={(e) => {
                const value = e.target.value;
                // Permitir solo números
                if (/^\d*$/.test(value)) {
                  handleChange({ target: { name: "codigoIdentificacion", value } });
                }
              }}
            />
            {errors.codigoIdentificacion && <span className="text-danger">{errors.codigoIdentificacion}</span>}
          </div>
        </div>

        <div className="text-center mt-4">
          {dentroFormularioForm && (
            <span className="me-3">Agregar como cliente nuevo</span>
          )}

          <button variant="success" type="submit" size="sm" className='ms-2 me-2'>
            {editarClientesFrecuentes ? 'Actualizar' : 'Agregar'}
          </button>

          {editarClientesFrecuentes && (
            <button
              style={{ backgroundColor: 'red' }}
              size="sm"
              onClick={handleCancel}
              className='me-2 ms-2'
            >
              Cancelar
            </button>
          )}
        </div>

      </form>
      <ModalPlantilla
        show={showModal}
        onClose={() => setShowModal(false)}
        content={modalContent}
        title={tituloModal}
        size='lg'
      />
    </div>
  );
});

export default FormularioCliente;
