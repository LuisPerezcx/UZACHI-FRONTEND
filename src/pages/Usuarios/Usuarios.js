import React from "react";
import { useEffect, useState } from "react";
import "../Usuarios/Components/Usuarios.css";
import { Footer } from "../../components/Footer";
import { FormularioUsuarios } from "../Usuarios/Components/FormularioUsuarios";
import { TablaUsuarios } from "../Usuarios/Components/TablaUsuarios";

export const Usuario = () => {
  const [usuario, setUsuario] = useState({});
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("administrador");

  const addUser = (data) => {
    setUsuario(data);
    console.log(data);
  };

  return (
    <>
      <div className="container my-5">
        <div className="text-center mb-4">
          <h1>AGREGAR USUARIOS</h1>
        </div>
        <div className=" p-0 mb-4">
          <FormularioUsuarios usuario={addUser} />
          <TablaUsuarios user={usuario} />
        </div>
      </div>
      <Footer />
    </>
  );
};
