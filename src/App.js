import './App.css';
import NewSpend from './components/Spends/new';
import SingleSpend from './components/Spends/listofspends';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewSpend />
        <SingleSpend />
      </header>
    </div>
  );
}

export default App;
