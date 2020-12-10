import React, { Component } from 'react';
import './SingleSpend.css';
import Table from 'react-bootstrap/Table'


class SingleSpend extends Component {

    render () {
        return (
          <div>
          <Table>


    <tbody key={this.props.spend._id} className="SingleSpend">
          <tr>
          <td className="SingleSpend-row">
                    {" "}{(this.props.spend.dateSpent.split("T")[0]).slice(-2)}/
                    {(this.props.spend.dateSpent.split("T")[0]).slice(-5, -3)}/
                    {(this.props.spend.dateSpent.split("T")[0]).slice(0, 4)}{" "}
                    </td>
                    <td className="SingleSpend-row">
                    {this.props.spend.itemSpent}{" "}
                    </td >
                    <td className="SingleSpend-row">
                    {this.props.spend.itemCat} {" "}
                    </td>
                    <td className="SingleSpend-row">
                    {'£'}{this.props.spend.itemCost}{" "}
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </div>
        )
      };
}
export default SingleSpend;
