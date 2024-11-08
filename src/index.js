import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Footer from './components/Footer';

// src/index.js o src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import ReportsPage from './pages/ReportsPageSemarnat';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
