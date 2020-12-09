import './App.css';
import SingleSpend from './components/Spends/listofspends';
import NavBarComponent from './navBar';
import NewSpend from './components/Spends/new.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBarComponent />
      <NewSpend />
        <SingleSpend />
      </header>
    </div>
  );
}

export default App;
