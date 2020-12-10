import React from 'react';
import SingleSpend from './SingleSpend';


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


    //   var retrievedObject = window.localStorage.getItem('user');
    //   if (retrievedObject) {
    //     var userJSON = {user_id: JSON.parse(retrievedObject)._id, user_name: JSON.parse(retrievedObject).name};
    //     this.setState({user_id: userJSON.user_id});
    //     this.setState({user_name: userJSON.user_name});
    //     this.setState({user: JSON.stringify(userJSON)})
    //   }
          fetch("http://localhost:3080/spends", {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.spends
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
                <h1 className="postHeading">Spends</h1>
                <div className="postBackground">
                    <ul>
                        {items.map(spend => (
                         < SingleSpend spend={spend} />
                        ))}
                    </ul>
                </div>
                </div>
            );
        }
    }

}
export default ListOfSpends;
