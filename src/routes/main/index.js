import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../../containers/home';
import Footer from '../../layout/footer';
import Controls from '../../containers/controls/main';
import ControlRoutes from '../controls'

function Routes(){
    return(
        <Switch>
            {/* Main Routes */}
            <Route exact path='/'>
                <div id="main-content" className="min-h-screen">
                    <Home />
                </div>
                <Footer />
            </Route>
            <Route path='/controls'>
                <Controls />
            </Route>
            
            {/* Control Routes */}
            <ControlRoutes />

        </Switch>
    )
}

export default Routes;