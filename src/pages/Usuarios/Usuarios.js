import React from "react";
import NavAdmin from "../../components/NavAdmin";
import { Footer } from "../../components/Footer";
import { BreadCrumb } from "../../components/BreadCrumb";
import TablaUsuarios from "../Usuarios/Components/TablaUsuarios";

export const Usuario = () => {
  const links = [
    { url: "/PrincipalAdmin", label: "Inicio" },
    { url: "/Usuario", label: "Gestión de usuarios" },
  ];

  return (
    <>
      <NavAdmin />
      <div className="container my-5">
        <BreadCrumb links={links} />
        <div className="text-center mb-4">
          <h1>AGREGAR USUARIOS</h1>
        </div>
        <div className="p-0 mb-4">
          <TablaUsuarios />
        </div>
      </div>
      <Footer />
    </>
  );
};
