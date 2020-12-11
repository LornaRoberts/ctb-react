import './App.css';
import NavBarComponent from './components/navBar';
import Spends from './components/Spends/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarComponent />
        <Spends />
        <Home />
      </header>
    </div>
  );
}

export default App;
