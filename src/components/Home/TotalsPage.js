import React from 'react'
import TETP from '../Expenses/totalexpensesthisperiod'
import TSTP from '../Spends/totalspendsthisperiod'

function TotalsPage (props) {


    return (
        <div>
            <h1>Totals</h1>
            <TSTP userId={props.userId}/>
            <TETP />
        </div>
    )
}

export default TotalsPage;