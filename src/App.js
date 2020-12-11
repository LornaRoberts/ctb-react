import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router >
        <Routes />
        </ Router >
      </header>
    </div>
  );
}

export default App;