import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListadoClientes from "./Components/ListadoClientes";
import FormularioCliente from "./Components/FormularioCliente";

const ClientesFrecuentes = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">CLIENTES FRECUENTES</h2>
      <ListadoClientes />

      <FormularioCliente />
    </div>
  );
};

export default ClientesFrecuentes;
