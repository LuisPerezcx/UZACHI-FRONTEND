import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrincipalAdmin } from './pages/PrincipalAdmin';
import { ReportesInternos } from './pages/ReportesInternos/ReportesInternos';
import { ReportesPage } from './pages/ReportesSemarnat/ReportsPageSemarnat';
import { GestionTransporte } from './pages/Transporte/GestionTransporte';
import { Usuario } from './pages/Usuarios/Usuarios';
import { Formulario3 } from './pages/Formulario/Components/Formulario3';
import { Formulario } from './pages/Formulario/Formulario';
import { AgregarComunidades } from './pages/Comunidades/AgregarComunidades';
import ClientesFrecuentes from './pages/ClientesFrecuentes/ClientesFrecuentes';
import FoliosAsignados from './pages/FoliosAsignados/FoliosAsigandos';
import { Calculadoras } from './pages/Calculadoras';
import { HistorialMovimientos } from './pages/HistorialMovimientos/HistorialMovimientos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalAdmin />} />
      <Route path="/ReportesInternos" element={<ReportesInternos />} />
      <Route path='/ReportesSemarnat' element={<ReportesPage />}/>
      <Route path='/GestionTransporte' element={<GestionTransporte/>} />
      <Route path='/ClientesFrecuentes' element={<ClientesFrecuentes/>} />
      <Route path='/Usuarios' element={<Usuario/>} />
      <Route path='/Formulario' element={<Formulario/>} />
      <Route path='/Formulario3' element={<Formulario3/>} />
      <Route path='/prueba' element={<HistorialMovimientos/>} />
      <Route path='/AgregarComunidades' element={<AgregarComunidades/>} />
      <Route path='/FoliosAsignados' element={<FoliosAsignados/>} />
      <Route path='/HistorialMovimientos' element={<HistorialMovimientos/>} />

    </Routes>
  );
};

export default AppRoutes;
