import ListOfSpends from './listofspends';
import NewSpend from './new';
import Tstp from './totalspendsthisperiod';

function Spends() {
  return (
    <div className="App">
    <Tstp />
     <NewSpend />
      <ListOfSpends />
    </div>
  );
}

export default Spends;
