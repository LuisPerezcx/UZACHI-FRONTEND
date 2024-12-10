import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListadoClientes from "./Components/ListadoClientes";
import FormularioCliente from "./Components/FormularioCliente";
import NavAdmin from "../../components/NavAdmin";
import { Footer } from "../../components/Footer";
import { BreadCrumb } from "../../components/BreadCrumb";

const ClientesFrecuentes = () => {
  const links = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    {url: '/ClientesFrecuentes', label: 'Gestion de clientes frecuentes'}
  ];
  return (
    <div>
      <NavAdmin></NavAdmin>
      <BreadCrumb links={links} />
      <h2 className="text-center mb-4 size-font-title">Gestion de clientes frecuentes</h2>
      <ListadoClientes />

      <Footer></Footer>
    </div>
  );
};

export default ClientesFrecuentes;
