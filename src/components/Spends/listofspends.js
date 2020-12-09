import React, { Component } from 'react';
import Newspend from './new.js';

class SingleSpend extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
    };
}
    componentDidMount() {
          fetch(`http://localhost:3080/spends`, {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                items: result
              })
            },
            (error) => {
                throw error;
            }
          )
    }
    render () {
      const { items } = this.state;
      console.log(items);
        return (
          <div>
          <li key={this.props.spends._id}>
                     <span className="ListofSpends">{this.props.spends.itemSpent}<br></br>
                     {this.props.spends.itemCost}{" "}
                    @{" "}{(this.props.spends.date.split("T")[1]).slice(0,5)},
                    {" "}{(this.props.spends.date.split("T")[0]).slice(-2)}/
                    {(this.props.spends.split("T")[0]).slice(-5, -3)}/
                    {(this.props.spends.split("T")[0]).slice(0, 4)}</span><br></br>
                    </li>
                    </div>
        )
      };
}
export default SingleSpend;
