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
import { LoginForm } from './components/Login/LoginForm';
import { Login } from './pages/Login';
import { GestionComunidades } from './components/Comunidades/GestionComunidades';
import { AgregarComunidades } from './pages/Comunidades/AgregarComunidades';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalAdmin />} />
      <Route path="/ReportesInternos" element={<ReportesInternos />} />
      <Route path='/ReportesSemarnat' element={<ReportesPage />}/>
      <Route path='/GestionTransporte' element={<GestionTransporte/>} />
      <Route path='/Formulario' element={<Formulario/>} />
      <Route path='/Formulario3' element={<Formulario3/>} />
      <Route path='/prueba' element={<AgregarComunidades/>} />
      <Route path='/AgregarComunidades' element={<AgregarComunidades/>} />

    </Routes>
  );
};

export default AppRoutes;
