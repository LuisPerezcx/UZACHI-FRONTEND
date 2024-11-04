import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
