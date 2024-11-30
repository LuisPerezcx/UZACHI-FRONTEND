import React, { useState } from "react";

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

    // if (!formData.propietario || !formData.tipo || !formData.capacidad) {
    //   alert('Por favor llena todos los campos requeridos.');
    //   return;
    // }

    onAdd(formData); // Llamar a la función `onAdd` con los datos del formulario

    // Reiniciar el formulario
    setFormData({
      nombreComunidad: '',
      municipio: '',
      entidad: ''
    });
  };




  return (
    <div className="container mt-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "95%", borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Agregar comunidad</h4>
          <form onSubmit={agregarComunidades}>
            {/* Nombre de la comunidad */}
            <div className="row mb-3 justify-content-center">
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="nombreComunidad" className="form-label me-2 " >
                  Nombre de la comunidad: 
                </label>
                <input
                  type="text"
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
                  Municipio:
                </label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="municipio"
                    value = {formData.municipio}
                    onChange={cambios}
                  />
                </div>
              </div>
              <div className="col-auto d-flex align-items-center gap-2 ms-2">
                <label htmlFor="entidad" className="form-label mb-0">
                  Entidad:
                </label>
                <div>
                  <input
                    type="text"
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
