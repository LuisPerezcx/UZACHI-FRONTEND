import React, { useState } from "react";

const FormularioUsuarios = ({ usuario }) => {
  const [errors, setErrors] = useState({});
  const [usuarios, setUsuarios] = useState([]); 

  const validate = (values) => {
    const errors = {};
    if (!values.nombreUsuario || values.nombreUsuario.trim() === "") {
      errors.nombreUsuario = "El nombre de usuario es obligatorio.";
    }
    if (!values.contrasena || values.contrasena.trim() === "") {
      errors.contrasena = "La contraseña es obligatoria.";
    } else if (values.contrasena.length < 5) {
      errors.contrasena = "La contraseña debe tener al menos 6 caracteres.";
    }
    if (!values.tipoUsuario || values.tipoUsuario === "Selecione una opcion") {
      errors.tipoUsuario = "Debes seleccionar un tipo de usuario.";
    }
    return errors;
  };

  const addUser = (event) => {
    event.preventDefault();
    const values = {
      nombreUsuario: event.target.form[0].value,
      contrasena: event.target.form[1].value,
      tipoUsuario: event.target.form[2].value,
    };

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = { id: Date.now(), ...values };

    setUsuarios([...usuarios, newUser]); 
    usuario(newUser); 
    setErrors({}); 
    alert("Usuario agregado exitosamente.");
  };

  return (
    <>
      <form className="gx-2 align-items-center">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center p-0">
            <label htmlFor="nombre" className="form-label2 me-2 mb-0">
              Nombre usuario:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
            />
            {errors.nombreUsuario && (
              <div className="text-danger ms-2">{errors.nombreUsuario}</div>
            )}
          </div>
          <div className="col-md-4 d-flex align-items-center p-0">
            <label htmlFor="contrasena" className="form-label2 me-2 mb-0">
              Contraseña:
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              className="form-control"
            />
            {errors.contrasena && (
              <div className="text-danger ms-2">{errors.contrasena}</div>
            )}
          </div>
          <div className="col-md-4 d-flex align-items-center p-0">
            <label htmlFor="tipo" className="form-label2 me-2 mb-0">
              Tipo de usuario:
            </label>
            <select
              id="tipo"
              name="tipo"
              defaultValue={"Selecione una opcion"}
              className="form-control"
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
            <button
              className="btn btn-success w-20"
              style={{ marginLeft: 0 }}
              onClick={addUser}
            >
              Agregar usuario
            </button>
          </div>
        </div>
      </form>

      <div className="mt-4">
        <h3>Usuarios Registrados:</h3>
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>
              {u.nombreUsuario} - {u.tipoUsuario}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FormularioUsuarios;
