import React from 'react';
import Navbar from '../../../layout/navbar/index';
import DashBarLinks from './dashboard-bar';

function Controls(prop){
    const [isOpenNav, toggleNav] = React.useReducer(isOpenNav => !isOpenNav, false);
    return(
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row h-90vh">
                
                <DashBarLinks  isOpenNav={isOpenNav} toggleNav={toggleNav}/>

                {/* content */}
                <div className={isOpenNav?"hidden md:block w-full h-full"
                                        :"w-full h-full"}>
                    <div className="relative flex flex-col w-full h-full overflow-auto whitespace-no-wrap bg-gray-200">
                                    {prop.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Controls;