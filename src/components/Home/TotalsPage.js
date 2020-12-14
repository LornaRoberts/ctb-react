import React from 'react'
import TETP from '../Expenses/totalexpensesthisperiod'
import TSTP from '../Spends/totalspendsthisperiod';
import './TotalsPage.css'

function TotalsPage (props) {


    return (
        <div>
            <h1 className="TotalsPage">Totals</h1>
            <TSTP userId={props.userId}/>
            <TETP userId={props.userId}/>
        </div>
    )
}

export default TotalsPage;
