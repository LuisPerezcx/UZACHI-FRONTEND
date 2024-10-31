import logo from './logo.svg';
import './App.css';
import { NavAdmin } from './components/NavAdmin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>UZACHI</h1>
        <NavAdmin></NavAdmin>
      </header>
    </div>
  );
}

export default App;
