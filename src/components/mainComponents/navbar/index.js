import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Navbar(){
    const [isOpenNav, toggleNav] = React.useReducer(isOpenNav => !isOpenNav, false);
    const [isOpenUser, toggleUser] = React.useReducer(isOpenUser => !isOpenUser, false);
    return(
        <div className="container-xl bg-gray-900">
                <div className="fixed w-full h-20 pt-4 text-gray-300 bg-gray-900 z-10 flex flex-row sm:justify-center sm:relative sm:w-9/12 sm:mx-auto">

                        {/* sample site logo/name */}
                        <div className="ml-2 sm:ml-0 text-xs md:text-sm lg:text-lg sm:absolute sm:left-0">
                            #<span className="text-purple-600">Social</span> Media Manager
                        </div>

                        {/* button for link:mobile */}
                        <button className="fixed right-0 top-0 mt-4 mx-4 z-10 sm:hidden border border-blue-500 text-blue-500 w-12 hover:bg-blue-500 hover:text-gray-200 focus:outline-none"
                                onClick={toggleNav}>
                                {isOpenNav?'Close':'Open'}
                        </button>

                        {/* Links */}
                        <div id="nav-container" className={isOpenNav?'active bg-gray-900':"sm:static sm:flex sm:pt-0"}>
                            <nav className="text-gray-500 ml-2 sm:ml-0">
                                <ul className="text-xs md:text-base sm:grid sm:grid-flow-col sm:gap-8">
                                    <li className="border-b border-gray-900 cursor-pointer hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-400 rounded">
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li className="mt-1 sm:mt-0 border-b border-gray-900 cursor-pointer hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-400 rounded">
                                        <Link to="/media">Media</Link>
                                    </li>
                                    <li className="mt-1 sm:mt-0  border-b border-gray-900 cursor-pointer hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-400 rounded">
                                        <Link to="/about" >About</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* User button */}
                        <div className="w-12 pl-2 sm:pl-0 sm:absolute sm:right-0">
                            <button className="w-full border border-blue-500 bg-transparent text-blue-500 rounded-sm focus:outline-none hover:bg-blue-500 hover:text-gray-300"
                                    onClick={toggleUser}>USER</button>

                            {isOpenUser?
                                <div className="w-48  mt-1 text-black bg-gray-100 flex flex-col rounded-md shadow-xl">
                                    <Link to="#" className="px-3 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={toggleUser}>Profile</Link>
                                    <Link to="#" className="px-3 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={toggleUser}>Settings</Link>
                                    <Link to="/controls" className="px-3 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={toggleUser}>IAM</Link>
                                </div>:''}
                        </div>

                    </div>
            </div>   
    )
}

export default Navbar;