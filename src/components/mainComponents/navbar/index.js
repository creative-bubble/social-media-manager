import React from 'react';
import './styles.css';


function Navbar(){
    const [isOpen, toggle] = React.useReducer(isOpen => !isOpen, false);
    return(
        <div class="fixed w-full h-20 pt-4 text-gray-300 bg-gray-900 text-xs z-10 sm:relative">
            <div class="flex flex-col sm:flex-row sm:justify-center sm:relative sm:w-9/12 sm:mx-auto">
                <div class="ml-2 sm:ml-0 sm:text-md md:text-lg sm:absolute sm:left-0">
                    #<span class="text-purple-600">Social</span> Media Manager
                </div>

                <button class="fixed right-0 top-0 mt-4 mx-4 z-10 sm:hidden border border-blue-500 text-blue-500 w-12 hover:bg-blue-500 hover:text-gray-200 focus:outline-none"
                        onClick={toggle}>
                        {isOpen?'Close':'Open'}
                </button>

                <div id="nav-container" class={isOpen?'active bg-gray-900':"sm:static sm:flex sm:pt-0"}>
                    <nav class="text-xs text-gray-500 ml-2 sm:ml-0">
                        <ul class="sm:grid sm:grid-flow-col sm:gap-8">
                            <li class="border-b border-gray-900 cursor-pointer hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-400 rounded">
                                <a href="/" >Home</a>
                            </li>
                            <li class="mt-1 sm:mt-0 border-b border-gray-900 cursor-pointer hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-400 rounded">
                                <a href="/media">Media</a>
                            </li>
                            <li class="mt-1 sm:mt-0  border-b border-gray-900 cursor-pointer hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-400 rounded">
                                <a href="/about" >About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>   
    )
}

export default Navbar;