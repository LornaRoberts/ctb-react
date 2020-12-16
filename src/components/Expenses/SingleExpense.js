import React, { Component } from 'react';
import './SingleExpense.css';
import Table from 'react-bootstrap/Table';
import EditButton from './EditButton';


class SingleExpense extends Component {

    render () {
        return (
          <div className="SingleExpense mx-auto">
          <Table>


    <tbody className="SingleExpense-body">
          <tr>
          <td className="SingleExpense-row">
                    <td className="SingleExpense-td" >
                    {this.props.expense.expense}{" "}
                    </td >
                    <td className="SingleExpense-td">
                    {this.props.expense.expenseCat} {" "}
                    </td>
                    <td className="SingleExpense-td">
                    {'£'}{this.props.expense.expenseCost.toFixed(2)}{" "}
                    </td>
                    <td className="EditButton">
                    <EditButton expense={this.props.expense} />
                    </td>
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </div>
        )
      };
}
export default SingleExpense;
