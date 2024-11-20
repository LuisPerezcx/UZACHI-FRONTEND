import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrincipalAdmin } from './pages/PrincipalAdmin';
import { ReportesInternos } from './pages/ReportesInternos';
import { ReportesPage } from './pages/ReportsPageSemarnat';
import { GestionTransporte } from './components/GestionTransporte';
import { Formulario3 } from './pages/Formulario3';
import { Formulario } from './pages/Formulario';
import { CalculadoraEspecial } from './components/Calculadora/CalculadoraEspecial';
import { CalculadoraEstandar } from './components/Calculadora/CalculadoraEstandar';
import { Calculadoras } from './pages/Calculadoras';
import ClientesFrecuentes from './pages/ClientesFrecuentes/ClientesFrecuentes';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalAdmin />} />
      <Route path="/ReportesInternos" element={<ReportesInternos />} />
      <Route path='/ReportesSemarnat' element={<ReportesPage />}/>
      <Route path='/GestionTransporte' element={<GestionTransporte/>} />
      <Route path='/ClientesFrecuentes' element={<ClientesFrecuentes/>} />

      <Route path='/Formulario' element={<Formulario/>} />
      <Route path='/Formulario3' element={<Formulario3/>} />

    </Routes>
  );
};

export default AppRoutes;
