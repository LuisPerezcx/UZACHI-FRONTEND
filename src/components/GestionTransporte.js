import React from 'react';
import { Breadcrumb } from 'react-bootstrap'; // Make sure to import Breadcrumb
import TablaTransporte from './TablaTransporte';
import { FormularioTransporte } from './FormularioTransporte';
import NavAdmin from './NavAdmin';
import Footer from './Footer';

export const GestionTransporte = () => {
  return (
    <div>
      <NavAdmin></NavAdmin>

      <div className="container my-5">
        <h2 className="text-center mb-4">Gestión de Transporte</h2>
      </div>
      <TablaTransporte />
       
       <FormularioTransporte/>

       <Footer></Footer>
    </div>
  );
};
