import SingleSpend from './Spends/SingleSpend';
import NewSpend from './Spends/new';
import React from 'react';

class Spends extends React.Component {

    render () {
        return (
            <div className="singleSpend">
                <SingleSpend />
                button with props for dateSpent: date, itemSpent: spend, itemCat: cat, itemCost: cost
            </div>
        )
    }
}

export default Spends;
