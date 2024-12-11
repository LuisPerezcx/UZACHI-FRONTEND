import React, { useState } from "react";
import Swal from "sweetalert2"; 

export const  GestionComunidades = ({onAdd, editarComunidades, onCancel }) => {

  const initialFormState = {
    nombreComunidad: '',
    municipio: '',
    entidad: '',
    codigoPostal:'',
    rfc:'',
    rfn:'',
    domicilioFiscal:''
  };

  const [formData,setFormData] = useState (initialFormState);

  React.useEffect(() => {
    if (editarComunidades) {
      setFormData(editarComunidades);
    }
  }, [editarComunidades]);

  const cambios = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const agregarComunidades = (e) => {
    e.preventDefault();

    if (!formData.nombreComunidad || !formData.municipio || !formData.entidad || !formData.codigoPostal || !formData.rfc || !formData.rfn || !formData.domicilioFiscal) {
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
      title: editarComunidades ? 'Comunidad actualizada' : 'Comunidad agregada',
      text: editarComunidades
        ? `La comunidad "${formData.nombreComunidad}" ha sido actualizada correctamente.`
        : `La comunidad "${formData.nombreComunidad}" ha sido agregada correctamente.`,
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
      nombreComunidad: '',
      municipio: '',
      entidad: '',
      codigoPostal:'',
      rfc:'',
      rfn:'',
      domicilioFiscal:''
    });
  };

  const handleCancel = () => {
    setFormData(initialFormState); // Limpia el formulario
    if (onCancel) {
      onCancel(); // Notifica al componente padre
    }
  };


  return (
    <div className="container mt-5">
      <div className="mx-auto" style={{ maxWidth: "95%", borderRadius: "12px" }}>
        <div className="tarjeta-border p-4">
          <h4 className="size-font-title text-center mb-4">Agregar comunidad</h4>
          <form onSubmit={agregarComunidades}>
            {/* Nombre de la comunidad */}
            <div className="row mb-3 justify-content-center">
              <div className="col-md-5 ">
                <label htmlFor="nombreComunidad" className="form-label me-2 " >
                  Nombre de la comunidad: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={30}
                  className="form-control"
                  name="nombreComunidad"
                  value = {formData.nombreComunidad}
                  onChange={cambios}
                />
              </div>

              <div className="col-sm-6 col-md-4">
                <label htmlFor="codigoPostal" className="form-label me-2 " >
                  Codiogo postal: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={5}
                  className="form-control"
                  name="codigoPostal"
                  value = {formData.codigoPostal}
                  onChange={(e) => {
                    const value = e.target.value;
                
                    // Permitir solo números
                    if (/^\d*$/.test(value)) {
                      cambios({ target: { name: "codigoPostal", value } });
                    }
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-3">
                <label htmlFor="rfc" className="form-label me-2 " >
                  RFC: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={13}
                  className="form-control"
                  name="rfc"
                  value = {formData.rfc}
                  onChange={cambios}
                />
              </div>
            </div> 

            {/* Municipio y Entidad en la misma línea */}
            <div className="row mb-3 justify-content-center">
              <div className="col-sm-8 col-md-5 ">
                <label htmlFor="municipio" className="form-label mb-0">
                  Municipio: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={30}
                  className="form-control"
                  name="municipio"
                  value = {formData.municipio}
                  onChange={cambios}
                />
              </div>
              <div className="col-sm-4 col-md-4 ">
                <label htmlFor="entidad" className="form-label mb-0">
                  Entidad: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={6}
                  className="form-control"
                  name="entidad"
                  value = {formData.entidad}
                  onChange={cambios}
                />
              </div>
              <div className="col-sm-3 col-md-3">
                <label htmlFor="rfn" className="form-label mb-0">
                  RFN: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={30}
                  className="form-control"
                  name="rfn"
                  value = {formData.rfn}
                  onChange={cambios}
                />
              </div>
              <div className="col-sm-9 col-md-12 col-lg-6 ">
                <label htmlFor="domicilioFiscal" className="form-label ">
                  Domicilio fiscal: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={80}
                  className="form-control"
                  name="domicilioFiscal"
                  value = {formData.domicilioFiscal}
                  onChange={cambios}
                />
              </div>
            </div>

            {/* Botón Agregar centrado */}
            <div className="text-center">
              <button variant="success" type="submit" size="sm">
                {editarComunidades ? 'Actualizar' : 'Agregar'}
              </button>

              {editarComunidades && (
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
          </form>
        </div>
      </div>
    </div>
  );
};
