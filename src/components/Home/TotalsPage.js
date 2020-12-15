import React from 'react'
import TETP from '../Expenses/totalexpensesthisperiod'
import TSTP from '../Spends/totalspendsthisperiod'
import TML from './totalMoneyLeft'

function TotalsPage (props) {


    return (
        <div>
            <h1>Totals</h1>
            <TSTP userId={props.userId}/>
            <TETP userId={props.userId}/>
            <TML userId={props.userId}/>
        </div>
    )
}

export default TotalsPage;
