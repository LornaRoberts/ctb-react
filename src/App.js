import './App.css';
import NavBarComponent from './components/navBar';
import Spends from './components/Spends/index';
import Expenses from './components/Expenses/index';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarComponent />
        <Spends />
        <Expenses />
      </header>
    </div>
  );
}

export default App;
