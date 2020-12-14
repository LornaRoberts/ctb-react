import React from 'react';
import SingleExpense from './SingleExpense';


class ListOfExpenses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            show: false
        };

    }


    componentDidMount() {

          fetch(`http://localhost:3080/expenses/user/${this.props.userId}`, {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.expense.sort((a, b) => {
                  if (a.expenseDate > b.expenseDate) return -1;
                  if (a.expenseDate < b.expenseDate) return 1;
                  return 0;
                })
              });
              return result.expense;
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    render () {

        const { error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="main">
                <h1 className="postHeading">Expenses</h1>
                <div className="postBackground">
                    <ul>
                        {items.map(expense => (
                         < SingleExpense key={expense._id} expense={expense} />
                        ))}
                    </ul>
                </div>
                </div>
            );
        }
    }

}
export default ListOfExpenses;
