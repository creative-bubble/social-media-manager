import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Group from '../../containers/controls/group';


function ControlRoutes(){
    return(
        <Switch>
             <Route path='/group'>
                <Group />
            </Route>
        </Switch>
    )
}

export default ControlRoutes;