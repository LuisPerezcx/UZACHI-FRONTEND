import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// src/index.js o src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import ReportsPage from './pages/ReportsPageSemarnat';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /*<App />*/
    <ReportsPage></ReportsPage>
);
