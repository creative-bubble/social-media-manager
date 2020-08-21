import React from 'react';
import { Route } from 'react-router-dom';
import Group from '../../pages/controls/group';


function ControlRoutes(){
    return(
             <Route path='/group'>
                <Group />
            </Route>
    )
}

export default ControlRoutes;