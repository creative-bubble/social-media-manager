import React from 'react';

function Card(prop){
    return(
        <div className="w-12/12 mt-6 sm:w-3/12 sm:h-88">
            <div className="w-full relative sm:h-40">
                {prop.children}
            </div>
            <div className="mt-2 text-md sm:text-md sm:mt-10 text-purple-900 text-center font-Bebas">
                <h3>Fast Posting</h3>
                <span>Simple and Easy to use for any Devices</span>
                <span>with a simple click</span>
            </div>
        </div>
    )
}

export default Card;