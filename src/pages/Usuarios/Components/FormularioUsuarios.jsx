import React from "react";

export const FormularioUsuarios = ({ usuario }) => {
  const addUser = (event) => {
    event.preventDefault();
    usuario({
      id: Date.now(),
      nombreUsuario: event.target.form[0].value,
      contrasena: event.target.form[1].value,
      tipoUsuario: event.target.form[2].value,
    });
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
          </div>
          <div className="col-md-4 d-flex align-items-center p-0">
            <label htmlFor="tipo" className="form-label2 me-2 mb-0">
              Tipo de usuario:
            </label>

            <select
              id="tipo"
              name="tipo"
              defaultValue={"Administrador"}
              className="form-control"
            >
              <option>Selecione una opcion</option>
              <option value="Usuario">Usuario</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>
        </div>
        <div className="row my-2">
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn btn-success w-20 "
              style={{ marginLeft: 0 }}
              onClick={addUser}
            >
              Agregar usuario
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

