import Spends from './components/SpendsSecond';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarComponent from './components/NavBar';

export const Routes =() => {
    return (
        <div>
            <NavBarComponent/>
            <Switch>
            <Route exact path='/spends' component={Spends} />
            </Switch>
        </div>
    )
}