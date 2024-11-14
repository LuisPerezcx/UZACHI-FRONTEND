import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Usuario } from './pages/Usuarios';
import { ModificarUsuario } from './pages/ModificarUsuario';
import { EliminarUsuario } from './pages/EliminarUsuario';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Usuario />,
      children: [
        { path: "/usuario", element: <Usuario /> },
        { path: "/pages/modificar/:id", element: <ModificarUsuario /> },
        { path: "/pages/eliminar/:id", element: <EliminarUsuario /> }
      ]
    }
  ])
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  