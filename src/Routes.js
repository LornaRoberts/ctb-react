import Spends from './components/Spends/index';
import Expenses from './components/Expenses/index';
import Home from './components/Home/index';
import Archive from './components/Archive/index';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarComponent from './components/navBar';

const Routes =() => {
    return (
        <div>
            <NavBarComponent/>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/spends' component={Spends} />
            <Route exact path='/expenses' component={Expenses} />
            <Route exact path='/archive' component={Archive} />
            </Switch>

        </div>
    )
}
export default Routes;
