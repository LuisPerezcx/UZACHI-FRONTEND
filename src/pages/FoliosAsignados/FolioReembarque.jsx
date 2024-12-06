import React, { useState } from "react";
import NavAdmin from '../../components/NavAdmin'
import { Footer } from '../../components/Footer'
import { FormularioReembarque } from "./Components/FormularioReembarque";

function FoliosReembarque() {
  return (
    <div>
      <NavAdmin></NavAdmin>
      <div className="container my-4">
        <div className="col-md-12">
            <h2 className="text-center size-font-title">Asignacion de Folios Reembarque
            </h2>
            <FormularioReembarque/>
        </div>
      </div>
      <Footer></Footer>
    </div>

    
  );
}

export default FoliosReembarque;
