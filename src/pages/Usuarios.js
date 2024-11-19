import React from "react";
import { useEffect, useState } from "react";
import { ArrowRight, Pencil, Trash } from "react-bootstrap-icons";
import { json, Link, useNavigate, useOutletContext } from "react-router-dom";
import "./usuarios.css";
import Footer from "../components/Footer";

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
      <div className="container my-5">
        <div className="text-center mb-4">
          <h1>AGREGAR USUARIOS</h1>
        </div>
        <div className=" p-0 mb-4">
          <form className="gx-2 align-items-center">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center p-0">
                <label htmlFor="nombre" className="form-label me-2 mb-0">
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
                <label htmlFor="contrasena" className="form-label me-2 mb-0">
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
                <label htmlFor="tipo" className="form-label me-2 mb-0">
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
                <button className="btn btn-success w-20">Agregar usuario</button>
              </div>
            </div>
          </form>
        </div>

        <div className="table-responsive col-sm-11">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th colSpan={2}>Acciones</th>
                <th>Nombre Usuario</th>
                <th>Contraseña</th>
                <th>Tipo Usuario</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((m) => (
                <tr key={m.id}>
                  <td>
                    <Link to={`/usuario/eliminar/${m.id}`}>
                      <Trash />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/usuario/modificar/${m.id}`}>
                      <Pencil />
                    </Link>
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
      <Footer></Footer>
    </>
  );
};
