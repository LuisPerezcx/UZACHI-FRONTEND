  // src/App.js
  import React from 'react';
  import CommunityForm from './components/CommunityForm';
  import CommunityList from './components/CommunityList';
  import './App.css';

  function App() {
    return (
      <div className="App">
        <header className="header">
          <h1>UZACHI</h1>
          <nav>
            <a href="#">Catálogos</a>
            <a href="#">Historial</a>
            <a href="#">Contacto</a>
          </nav>
        </header>
        <div className="content">
          <h2>Asignar Folios Autorizados</h2>
          <CommunityForm/>
          <CommunityList/>
        </div>
        <footer className="footer">
          
        </footer>
      </div>
    );
  }

  export default App;
