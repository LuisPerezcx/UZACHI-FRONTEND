import React, { useState } from "react";
import Swal from "sweetalert2";

const FormularioUsuarios = ({ usuario }) => {
  const [formData, setFormData] = useState({
    nombreUsuario: "",
    contrasena: "",
    tipoUsuario: "Selecione una opcion",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        nombreUsuario: name === "nombreUsuario" ? value : prevFormData.nombreUsuario,
        contrasena: name === "contrasena" ? value : prevFormData.contrasena,
        tipoUsuario: name === "tipoUsuario" ? value : prevFormData.tipoUsuario,
      };
    });
  };

  const validate = () => {
    const validationErrors = {};
    if (!formData.nombreUsuario.trim()) {
      validationErrors.nombreUsuario = true;
    }
    if (!formData.contrasena.trim()) {
      validationErrors.contrasena = true;
    } else if (formData.contrasena.length < 6) {
      validationErrors.contrasena = true;
    }
    if (formData.tipoUsuario.trim()) {
      validationErrors.tipoUsuario = true;
    }
    return validationErrors;
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Swal.fire({
        title: "Error en el formulario",
        text: "Por favor, corrige los campos indicados.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const newUser = { id: Date.now(), ...formData };
    usuario(newUser);

    Swal.fire({
      title: "Usuario agregado",
      text: `El usuario "${formData.nombreUsuario}" ha sido agregado exitosamente.`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    setFormData({
      nombreUsuario: "",
      contrasena: "",
      tipoUsuario: "Selecione una opcion",
    });
    setErrors({});
  };

  return (
    <>
      <form className="gx-2 align-items-center" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 d-flex align-items-center p-0">
            <label htmlFor="nombreUsuario" className="form-label2 me-2 mb-0">
              Nombre usuario: <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="nombreUsuario"
              name="nombreUsuario"
              className="form-control"
              value={formData.nombreUsuario}
              onChange={handleChange}
            />
            {errors.nombreUsuario && (
              <div className="text-danger ms-2">{errors.nombreUsuario}</div>
            )}
          </div>
          <div className="col-md-4 d-flex align-items-center p-0">
            <label htmlFor="contrasena" className="form-label2 me-2 mb-0">
              Contraseña: <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              className="form-control"
              value={formData.contrasena}
              onChange={handleChange}
            />
            {errors.contrasena && (
              <div className="text-danger ms-2">{errors.contrasena}</div>
            )}
          </div>
          <div className="col-md-4 d-flex align-items-center p-0">
            <label htmlFor="tipoUsuario" className="form-label2 me-2 mb-0">
              Tipo de usuario: <span className="text-danger">*</span>
            </label>
            <select
              id="tipoUsuario"
              name="tipoUsuario"
              className="form-control"
              value={formData.tipoUsuario}
              onChange={handleChange}
            >
              <option>Selecione una opcion</option>
              <option value="Usuario">Usuario</option>
              <option value="Administrador">Administrador</option>
            </select>
            {errors.tipoUsuario && (
              <div className="text-danger ms-2">{errors.tipoUsuario}</div>
            )}
          </div>
        </div>
        <div className="row my-2">
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success w-20" type="submit">
              Agregar usuario
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormularioUsuarios;

