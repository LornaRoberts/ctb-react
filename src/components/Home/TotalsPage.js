import React from 'react'
import TETP from '../Expenses/totalexpensesthisperiod'
import TSTP from '../Spends/totalspendsthisperiod'

function TotalsPage () {


    return (
        <div>
            <h1>Totals</h1>
            <TSTP />
            <TETP />
        </div>
    )
}

export default TotalsPage;