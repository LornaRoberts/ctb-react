import React from 'react'
import TETP from '../Expenses/totalexpensesthisperiod'
import TSTP from '../Spends/totalspendsthisperiod'
import TML from './totalMoneyLeft'
import MLPD from './moneyLeftPerDay'
import './TotalsPage.css'

function TotalsPage (props) {


    return (
        <div>
            
        <div className="TotalsPageBox">
            <TSTP userId={props.userId}/>
            <TETP userId={props.userId}/>
            <TML userId={props.userId}/>
            <MLPD userId={props.userId}/>
        </div>
        </div>
    )
}

export default TotalsPage;
