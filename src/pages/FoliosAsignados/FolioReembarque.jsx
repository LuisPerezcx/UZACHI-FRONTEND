import React, { useState } from "react";
import NavAdmin from '../../components/NavAdmin'
import { Footer } from '../../components/Footer'
import { BreadCrumb } from '../../components/BreadCrumb';

import { FormularioReembarque } from "./Components/FormularioReembarque";

function FoliosReembarque() {
  const links = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/GestionTransporte', label: 'Folio Reembarque' }
  ];
  return (
    <div>
      <NavAdmin></NavAdmin>
      <BreadCrumb links={links} />
      <div className="container my-4">
        <div className="col-md-12">
            <h2 className="text-center size-font-title">Asignación de folios reembarque
            </h2>
            <FormularioReembarque/>
        </div>
      </div>
      <Footer></Footer>
    </div> 
  );
}

export default FoliosReembarque;
