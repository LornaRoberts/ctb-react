import ListOfSpends from './listofspends';
import NewSpend from './new';
import TSTP from './totalspendsthisperiod'; 
function Spends() {
  return (
    <div className="App">
    <TSTP /> 
     <NewSpend />
      <ListOfSpends />
    </div>
  );
}

export default Spends;
