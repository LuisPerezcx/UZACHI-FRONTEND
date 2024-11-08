import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrincipalAdmin } from './pages/PrincipalAdmin';
import { ReportesInternos } from './pages/ReportesInternos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalAdmin />} />
      <Route path="/ReportesInternos" element={<ReportesInternos />} />
    </Routes>
  );
};

export default AppRoutes;
