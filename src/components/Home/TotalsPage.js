import React from 'react'
import TETP from '../Expenses/totalexpensesthisperiod'
import TSTP from '../Spends/totalspendsthisperiod'
import TML from './totalMoneyLeft'
import MLPD from './moneyLeftPerDay'
import './TotalsPage.css'

function TotalsPage (props) {


    return (
        <div>
            <h1 className="TotalsPage">Totals</h1>
            <TSTP userId={props.userId}/>
            <TETP userId={props.userId}/>
            <TML userId={props.userId}/>
            <MLPD userId={props.userId}/>
        </div>
    )
}

export default TotalsPage;
