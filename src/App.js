import './App.css';
import NewSpend from './components/Spends/new';
import SingleSpend from './components/Spends/listofspends';
import TSTP from './components/Spends/totalspendsthisperiod';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TSTP />
        <NewSpend />
        <SingleSpend />
      </header>
    </div>
  );
}

export default App;
