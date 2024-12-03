import React, { useState } from "react";
import Swal from "sweetalert2"; 

export const GestionComunidades = ({onAdd, editarComunidades}) => {

  const [formData,setFormData] = useState ({
      nombreComunidad: '',
      municipio: '',
      entidad: ''
  });

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

    if (!formData.nombreComunidad || !formData.municipio || !formData.entidad) {
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
      entidad: ''
    });
  };




  return (
    <div className="container mt-5">
      <div className="mx-auto" style={{ maxWidth: "95%", borderRadius: "12px" }}>
        <div className="tarjeta-border">
          <h4 className="size-font-title text-center mb-4">Agregar comunidad</h4>
          <form onSubmit={agregarComunidades}>
            {/* Nombre de la comunidad */}
            <div className="row mb-3 justify-content-center">
              <div className="col-md-6 d-flex align-items-center">
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
            </div> 

            {/* Municipio y Entidad en la misma línea */}
            <div className="row mb-3 justify-content-center">
              <div className="col-auto d-flex aling-items-center gap2">
                <label htmlFor="municipio" className="form-label mb-0">
                  Municipio: <span className="text-danger">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    maxLength={30}
                    className="form-control"
                    name="municipio"
                    value = {formData.municipio}
                    onChange={cambios}
                  />
                </div>
              </div>
              <div className="col-auto d-flex align-items-center gap-2 ms-2">
                <label htmlFor="entidad" className="form-label mb-0">
                  Entidad: <span className="text-danger">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    maxLength={6}
                    className="form-control"
                    name="entidad"
                    value = {formData.entidad}
                    onChange={cambios}
                  />
                </div>
              </div>
            </div>

            {/* Botón Agregar centrado */}
            <div className="text-center">
              <button variant="success" type="submit" size="sm">
                {editarComunidades ? 'Actualizar' : 'Agregar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
