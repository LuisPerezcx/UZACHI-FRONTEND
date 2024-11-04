import React from 'react';
import { Breadcrumb } from 'react-bootstrap'; // Make sure to import Breadcrumb
import TablaTransporte from '../components/TablaTransporte';
import { FormularioTransporte } from '../components/FormularioTransporte';

export const GestionTransporte = () => {
  return (
    <div>
      {/*<Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item href="#" className="custom-breadcrumb-item">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active className="custom-breadcrumb-item">Gestion de transporte </Breadcrumb.Item>
      </Breadcrumb>*/}
      
      <div className="container my-5">
        <h2 className="text-center mb-4">Gestión de Transporte</h2>
      </div>
      <TablaTransporte />
       
       <FormularioTransporte/>
    </div>
  );
};
