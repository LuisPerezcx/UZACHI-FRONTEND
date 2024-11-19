import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrincipalAdmin } from './pages/PrincipalAdmin';
import { ReportesInternos } from './pages/ReportesInternos';
import { ReportesPage } from './pages/ReportsPageSemarnat';
import { GestionTransporte } from './pages/GestionTransporte';
import { CalculadoraEspecial } from './components/Calculadora/CalculadoraEspecial';
import { CalculadoraEstandar } from './components/Calculadora/CalculadoraEstandar';
import { Calculadoras } from './pages/Calculadoras';
import Footer from './components/Footer';
import Login from './pages/Login';
import LoginForm from './components/Login/LoginForm';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalAdmin />} />
      <Route path="/ReportesInternos" element={<ReportesInternos />} />
      <Route path='/ReportesSemarnat' element={<ReportesPage />}/>
      <Route path='/GestionTransporte' element={<GestionTransporte/>} />
      <Route path='/prueba' element={<Login/>} />
    </Routes>
  );
};

export default AppRoutes;
