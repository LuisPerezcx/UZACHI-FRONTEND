import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrincipalAdmin } from './pages/PrincipalAdmin';
import { ReportesInternos } from './pages/ReportesInternos';
import { ReportesPage } from './pages/ReportsPageSemarnat';
import { GestionTransporte } from './pages/GestionTransporte';
import Formulario3 from './pages/Formulario3';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalAdmin />} />
      <Route path="/ReportesInternos" element={<ReportesInternos />} />
      <Route path='/ReportesSemarnat' element={<ReportesPage />}/>
      <Route path='/GestionTransporte' element={<GestionTransporte/>} />
      <Route path='/Formulario3' element={<Formulario3/>} />

    </Routes>
  );
};

export default AppRoutes;
