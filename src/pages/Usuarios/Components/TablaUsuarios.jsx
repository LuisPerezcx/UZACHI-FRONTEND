import React, { useEffect, useState } from "react";
import { Pencil, Trash } from "react-bootstrap-icons";

import { Link } from "react-router-dom";

export const TablaUsuarios = ({ user }) => {
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

  useEffect(() => {
    if (user?.id) {
      setUsuarios((prevUsuarios) => [...prevUsuarios, user]);
    }
  }, [user]);

  return (
    <>
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
    </>
  )
}
