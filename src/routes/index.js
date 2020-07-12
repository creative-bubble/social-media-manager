import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../containers/home';
import Controls from '../containers/controls'

function Routes(){
    return(
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/controls'>
                <Controls />
            </Route>
        </Switch>
    )
}

export default Routes;