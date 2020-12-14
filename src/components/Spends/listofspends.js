import React from 'react';
import SingleSpend from './SingleSpend';
import './listofspends.css';


class ListOfSpends extends React.Component {

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

          fetch(`http://localhost:3080/spends/user/${this.props.userId}`, {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.spends.sort((a, b) => {
                  if (a.dateSpent > b.dateSpent) return -1;
                  if (a.dateSpent < b.dateSpent) return 1;
                  return 0;
                })
              });
              return result.spends;
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
                <h1 className="postHeading" style={{color:'black'}}>Spends</h1>
                <div className="postBackground">
                    <ul id="list">
                        {items.map(spend => (
                         < SingleSpend key={spend._id} spend={spend} />
                        ))}
                    </ul>
                </div>
                </div>
            );
        }
    }

}
export default ListOfSpends;
