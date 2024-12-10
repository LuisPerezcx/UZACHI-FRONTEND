import React, { useState } from "react";
import NavAdmin from '../../components/NavAdmin'
import { Footer } from '../../components/Footer'
import { BreadCrumb } from '../../components/BreadCrumb';
import FormularioRemision from "./Components/FormularioRemision";

function FoliosRemision() {
  const links = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/GestionTransporte', label: 'Folio Remisión' }
  ];
  return (
    <div>
      <NavAdmin></NavAdmin>
      <BreadCrumb links={links} />
      <div className="container my-4">
          <div className="col-md-12">
            <h2 className="text-center size-font-title">Asignación de folios remisión</h2>
            <FormularioRemision/> 
          </div>
      </div>
      <Footer></Footer>
    </div>

    
  );
}

export default FoliosRemision;
