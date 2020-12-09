import React, { Component } from 'react';


class SingleSpend extends Component {

    render () {
        return (
          <div>
          <li key={this.props.spend._id}>
                     <span className="ListofSpends">{this.props.spend.itemSpent}<br></br>
                     Item Cost: {this.props.spend.itemCost}{" "} <br/>
                     Item Category: {this.props.spend.itemCat} <br/>
                     Date Logged: {(this.props.spend.dateLogged.split("T")[1]).slice(0,5)},
                    {" "}{(this.props.spend.dateLogged.split("T")[0]).slice(-2)}/
                    {(this.props.spend.dateLogged.split("T")[0]).slice(-5, -3)}/
                    {(this.props.spend.dateLogged.split("T")[0]).slice(0, 4)}</span><br></br>
                    </li>
                    </div>
        )
      };
}
export default SingleSpend;
