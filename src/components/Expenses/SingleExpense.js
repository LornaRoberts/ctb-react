import React, { Component } from 'react';
import './SingleExpense.css';
import Table from 'react-bootstrap/Table';
import EditButton from './EditButton';


class SingleExpense extends Component {

    render () {
        return (
          <div>
          <Table>


    <tbody className="SingleExpense">
          <tr>
          <td className="SingleExpense-row">
                    {" "}{(this.props.expense.expenseDate.split("T")[0]).slice(-2)}/
                    {(this.props.expense.expenseDate.split("T")[0]).slice(-5, -3)}/
                    {(this.props.expense.expenseDate.split("T")[0]).slice(0, 4)}{" "}
                    </td>
                    <td className="SingleExpense-row">
                    {this.props.expense.expense}{" "}
                    </td >
                    <td className="SingleExpense-row">
                    {this.props.expense.expenseCat} {" "}
                    </td>
                    <td className="SingleExpense-row">
                    {'£'}{this.props.expense.expenseCost}{" "}
                    </td>
                    <td>
                    <EditButton expense={this.props.expense} />
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </div>
        )
      };
}
export default SingleExpense;
