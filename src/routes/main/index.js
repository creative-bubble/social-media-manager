import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';
import ControlRoutes from '../controls'

function Routes(){
    return(
        <Switch>
            {/* Main Routes */}
            <Route exact path='/' component={Home} />
            
            {/* Control Routes */}
            <ControlRoutes />

        </Switch>
    )
}

export default Routes;