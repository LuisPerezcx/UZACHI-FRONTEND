import logo from './logo.svg';
import './App.css';
import { NavAdmin } from './components/NavAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavAdmin></NavAdmin>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>UZACHI</h1>
      </header>
    </div>
  );
}

export default App;
