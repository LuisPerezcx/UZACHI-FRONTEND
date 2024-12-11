import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrincipalAdmin } from './pages/PrincipalAdmin';
import { ReportesInternos } from './pages/Reportes/ReportesInternos';
import { ReportesSemarnat } from './pages/Reportes/ReportesSemarnat';
import { Usuario } from './pages/Usuarios/Usuarios';
import { Formulario3, InformacionSubproductosYSaldos } from './pages/Formulario/Components/InformacionSubproductosYSaldos';
import { Formulario } from './pages/Formulario/Formulario';
import { AgregarComunidades } from './pages/Comunidades/AgregarComunidades';
import {GestionTransporte} from '../src/pages/Transporte/GestionTransporte'
import ClientesFrecuentes from './pages/ClientesFrecuentes/ClientesFrecuentes';
import { Login } from './pages/Login';
import { Calculadoras } from './pages/Calculadoras';
import FolioReembarque from './pages/FoliosAsignados/FolioReembarque';
import FolioRemision from './pages/FoliosAsignados/FolioRemision';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/PrincipalAdmin" element={<PrincipalAdmin />} />
      <Route path="/ReportesInternos" element={<ReportesInternos />} />
      <Route path='/ReportesSemarnat' element={<ReportesSemarnat />}/>
      <Route path='/GestionTransporte' element={<GestionTransporte/>} />
      <Route path='/ClientesFrecuentes' element={<ClientesFrecuentes/>} />
      <Route path='/Usuarios' element={<Usuario/>} />
      <Route path='/Formulario' element={<Formulario/>} />
      <Route path='/Formulario3' element={<InformacionSubproductosYSaldos/>} />
      <Route path='/AgregarComunidades' element={<AgregarComunidades/>} />
      <Route path='/FolioReembarque' element={<FolioReembarque/>} />
      <Route path='/FolioRemision' element={<FolioRemision/>} />

    </Routes>
  );
};

export default AppRoutes;
