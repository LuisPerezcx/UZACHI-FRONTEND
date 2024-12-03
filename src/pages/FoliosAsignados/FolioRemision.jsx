import React, { useState } from "react";
import NavAdmin from '../../components/NavAdmin'
import { Footer } from '../../components/Footer'
import FormularioRemision from "./Components/FormularioRemision";

function FoliosRemision() {
  return (
    <div>
      <NavAdmin></NavAdmin>
      <div className="container my-4">
          <div className="col-md-12">
            <h2 className="text-center size-font-title">Asignacion de Folios remision</h2>
            <FormularioRemision/> 
          </div>
      </div>
      <Footer></Footer>
    </div>

    
  );
}

export default FoliosRemision;
