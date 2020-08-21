import React from 'react';
import DashBarLinks from './dashboard-bar';

function Controls(prop){
    const [isOpenNav, toggleNav] = React.useReducer(isOpenNav => !isOpenNav, false);
    return(
        <>
            <div className="flex flex-col md:flex-row h-90vh border-2 border-blue-500">
                
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