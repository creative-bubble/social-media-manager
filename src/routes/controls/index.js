import React from 'react';
import { Route } from 'react-router-dom';
import Group from '../../pages/controls/group';
import Controls from '../../pages/controls/main';

function ControlRoutes(){
    return(
        <>
            <Route path='/controls'>
                <Controls />
            </Route>
             <Route path='/group'>
                <Group />
            </Route>
        </>
    )
}

export default ControlRoutes;