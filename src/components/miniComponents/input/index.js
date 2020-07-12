import React from 'react';


function Input({placeholder}){
    return(
        <div>
            <input class="w-full mt-3 rounded-sm border border-gray-400 focus:outline-none focus:border-blue-500" placeholder={placeholder}/>
        </div>
    )
}

export default Input;