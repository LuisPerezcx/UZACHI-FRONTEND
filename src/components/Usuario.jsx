import React from "react";
import { useEffect, useState } from "react";
import { ArrowRight, Pencil, Trash } from "react-bootstrap-icons";
import { json, Link, useNavigate, useOutletContext } from "react-router-dom";
import "./usuario.css";

export const Usuario = () => {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombreUsuario: "LuisDavid",
      contrasena: "loboSolitario",
      tipoUsuario: "Usuario",
    },
    {
      id: 2,
      nombreUsuario: "Luis Hernandez",
      contrasena: "12345678",
      tipoUsuario: "Administrador",
    },
    {
      id: 3,
      nombreUsuario: "Efren David",
      contrasena: "87654321",
      tipoUsuario: "Usuario",
    },
  ]);

  const [usuario, setUsuario] = useState({});
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("administrador");


 
  return (
    <>
      <div className="container">
        <h1>AGREGAR USUARIOS</h1>
        <div className="form-group">
          <label for="nombre">Nombre usuario:</label>
          <input type="text" id="nombre" name="nombre" />
          <label for="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" />
          <label for="tipo">Tipo de usuario:</label>
          <select id="tipo" name="tipo">
            <option value="" selected>
              Selecione una opcion
            </option>
            <option value="Usuario">Usuario</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        <button className="btn">Agregar usuario</button>

        <div className="form-wrapper">
          <div className="form-containertable">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Nombre Usuario</th>
                  <th>contraseña</th>
                  <th>Tipo Usuario</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((m) => (
                  <tr key={m.id}>
                    <td>
                      {" "}
                      <Link to={`/usuario/eliminar/${m.id}`}>
                        {" "}
                        <Trash />{" "}
                      </Link>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to={`/usuario/modificar/${m.id}`}>
                        {" "}
                        <Pencil />{" "}
                      </Link>{" "}
                    </td>
                    <td>{m.nombreUsuario}</td>
                    <td>{m.contrasena}</td>
                    <td>{m.tipoUsuario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};


