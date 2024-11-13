  import React from 'react';
  import CommunityForm from './components/CommunityForm';
  import CommunityList from './components/CommunityList';
  import './App.css';

  function AsignarFolios() {
    return (
      <div className="AsignarFolios">
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