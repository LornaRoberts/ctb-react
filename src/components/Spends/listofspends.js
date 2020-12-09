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
      console.log(this.props);
        return (
            <div className="postBorder">
                <li key={this.props._id}>
                     {this.props.dateSpent}<br></br>
                     {this.props.itemSpent}{" "}
                     {this.props.itemCat}{" "}
                     {this.props.itemCost}{" "}
                </li>
            </div>
        )
        }
}
export default SingleSpend;
