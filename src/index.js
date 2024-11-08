import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import Login from './pages/Login';
import Footer from './components/Footer';
import { PrincipalAdmin } from './pages/PrincipalAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PrincipalAdmin></PrincipalAdmin>
    // <App />,
    // document.getElementsByTagName('root')
);
