import React, { Component } from 'react';
import New from 'new.js';

class SingleSpend extends Component {
    this.state = {
        items: [],
    };
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
        return (
            <div className="postBorder">
                <li key={this.state._id}>
                     {this.state.dateSpent}<br></br>
                     {this.state.itemSpent}{" "}
                     {this.state.itemCat}{" "}
                     {this.state.itemCost}{" "}
                </li>
            </div>
        )
        }
}
export default SingleSpend;
