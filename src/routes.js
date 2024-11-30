import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrincipalAdmin } from './pages/PrincipalAdmin';
import { ReportesInternos } from './pages/ReportesInternos/ReportesInternos';
import { ReportesPage } from './pages/ReportsPageSemarnat';
import { GestionTransporte } from './components/GestionTransporte';
import { Usuario } from './pages/Usuarios/Usuarios';
import { Formulario3 } from './pages/Formulario/Components/Formulario3';
import { Formulario } from './pages/Formulario/Formulario';
import { AgregarComunidades } from './pages/Comunidades/AgregarComunidades';
import ClientesFrecuentes from './pages/ClientesFrecuentes/ClientesFrecuentes';
import { Login } from './pages/Login';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/PrincipalAdmin" element={<PrincipalAdmin />} />
      <Route path="/ReportesInternos" element={<ReportesInternos />} />
      <Route path='/ReportesSemarnat' element={<ReportesPage />}/>
      <Route path='/GestionTransporte' element={<GestionTransporte/>} />
      <Route path='/ClientesFrecuentes' element={<ClientesFrecuentes/>} />
      <Route path='/Usuarios' element={<Usuario/>} />
      <Route path='/Formulario' element={<Formulario/>} />
      <Route path='/Formulario3' element={<Formulario3/>} />
      <Route path='/AgregarComunidades' element={<AgregarComunidades/>} />
    </Routes>
  );
};

export default AppRoutes;
