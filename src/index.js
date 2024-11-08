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
import { Usuario } from './components/Usuario';
import { ModificarUsuario } from './components/ModificarUsuario';
import { EliminarUsuario } from './components/EliminarUsuario';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Usuario />,
      children: [
        { path: "/usuario", element: <Usuario /> },
        { path: "/usuario/modificar/:id", element: <ModificarUsuario /> },
        { path: "/usuario/eliminar/:id", element: <EliminarUsuario /> }
      ]
    }
  ])
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
        <React.StrictMode>
      <RouterProvider router={router} />
    </BrowserRouter>
    </React.StrictMode>
  );
