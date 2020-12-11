import ListOfExpenses from './listofexpenses';
import NewExpense from './new';
import Tetp from './totalexpensesthisperiod';

function Expenses() {
  return (
    <div className="App">
    <Tetp />
     <NewExpense />
      <ListOfExpenses />
    </div>
  );
}

export default Expenses;
