import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const FormularioUsuarios = ({ onAdd, editarUsuario }) => {
  const [formData, setFormData] = useState({
    nombreUsuario: "",
    contrasena: "",
    tipoUsuario: "Seleccione una opción",
  });

  const [errors, setErrors] = useState({});

  // Actualizar formulario si editarUsuario cambia
  useEffect(() => {
    if (editarUsuario) {
      setFormData(editarUsuario);
    } else {
      setFormData({
        nombreUsuario: "",
        contrasena: "",
        tipoUsuario: "Seleccione una opción",
      });
    }
  }, [editarUsuario]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    const validationErrors = {};
    if (!formData.nombreUsuario.trim()) {
      validationErrors.nombreUsuario = "Este campo es obligatorio.";
    }
    if (!formData.contrasena.trim()) {
      validationErrors.contrasena = "Este campo es obligatorio.";
    } else if (formData.contrasena.length < 6) {
      validationErrors.contrasena = "Debe tener al menos 6 caracteres.";
    }
    if (formData.tipoUsuario === "Seleccione una opción") {
      validationErrors.tipoUsuario = "Selecciona un tipo de usuario.";
    }
    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Swal.fire({
        title: "Datos incompletos",
        text: "Por favor, llena todos los campos requeridos.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (onAdd) {
      onAdd(formData); // Llama la función para agregar o actualizar usuario
      Swal.fire({
        title: editarUsuario ? "Usuario actualizado" : "Usuario agregado",
        text: `El usuario "${formData.nombreUsuario}" ha sido ${editarUsuario ? "actualizado" : "agregado"} exitosamente.`,
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      // Limpiar el formulario
      setFormData({
        nombreUsuario: "",
        contrasena: "",
        tipoUsuario: "Seleccione una opción",
      });
      setErrors({});
    }
  };

  return (
    <form className="gx-2 align-items-center" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="nombreUsuario" className="form-label">
            Nombre Usuario: <span className="text-danger">*</span>
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
            <div className="text-danger">{errors.nombreUsuario}</div>
          )}
        </div>
        <div className="col-md-4">
          <label htmlFor="contrasena" className="form-label">
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
            <div className="text-danger">{errors.contrasena}</div>
          )}
        </div>
        <div className="col-md-4">
          <label htmlFor="tipoUsuario" className="form-label">
            Tipo de Usuario: <span className="text-danger">*</span>
          </label>
          <select
            id="tipoUsuario"
            name="tipoUsuario"
            className="form-control"
            value={formData.tipoUsuario}
            onChange={handleChange}
          >
            <option>Seleccione una opción</option>
            <option value="Usuario">Usuario</option>
            <option value="Administrador">Administrador</option>
          </select>
          {errors.tipoUsuario && (
            <div className="text-danger">{errors.tipoUsuario}</div>
          )}
        </div>
      </div>

      {/* Botón de envío */}
      <div className="d-flex justify-content-center">
        <button className="btn btn-success" type="submit">
          {editarUsuario ? "Actualizar Usuario" : "Agregar Usuario"}
        </button>
      </div>
    </form>
  );
};

export default FormularioUsuarios;

