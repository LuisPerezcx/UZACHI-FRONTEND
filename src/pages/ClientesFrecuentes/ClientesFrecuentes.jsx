import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListadoClientes from "./Components/ListadoClientes";
import FormularioCliente from "./Components/FormularioCliente";
import NavAdmin from "../../components/NavAdmin";
import { Footer } from "../../components/Footer";

const ClientesFrecuentes = () => {
  return (
    <div>
      <NavAdmin></NavAdmin>
      <h2 className="text-center mb-4">CLIENTES FRECUENTES</h2>
      <ListadoClientes />

      <Footer></Footer>
    </div>
  );
};

export default ClientesFrecuentes;
