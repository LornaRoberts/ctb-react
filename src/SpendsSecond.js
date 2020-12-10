import SingleSpend from './Spends/SingleSpend';
import NewSpend from './Spends/new';
import React from 'react';

class Spends extends React.Component {

    render () {
        return (
            <div className="Spends">
                <SingleSpend />
            </div>
        )
    }
}

export default Spends;
