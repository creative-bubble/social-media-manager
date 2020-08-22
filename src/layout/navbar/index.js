import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Hooks } from './hooks';

function Navbar(){
    const { isOpenNav, toggleNav, isOpenUser, toggleUser } = Hooks();
    return(
        <div className="bg-gray-900">
                <div id="naver" className="fixed w-full h-10vh pt-4 text-gray-300 bg-gray-900 z-10 flex flex-row sm:justify-center sm:relative sm:w-9/12 sm:mx-auto">
                        {/* sample site logo/name */}
                        <div className="ml-2 sm:ml-0 text-xs md:text-sm lg:text-lg sm:absolute sm:left-0">
                            #<span className="text-purple-600">Social</span> Media Manager
                        </div>

                        {/* button for link:mobile */}
                        <button className="absolute right-0 top-0 mt-4 mx-4 z-10 sm:hidden border border-blue-500 text-blue-500 w-8 h-8 hover:bg-blue-500 hover:text-gray-200 focus:outline-none"
                                onClick={toggleNav}>
                                {isOpenNav
                                   ?
                                  <i className="fa fa-window-close-o" aria-hidden="true"></i>
                                   :
                                  <i className="fa fa-bars" aria-hidden="true"></i>
                                }
                        </button>

                        {/* Links */}
                        <div id="nav-container" className={isOpenNav?'active bg-gray-900':"sm:static sm:flex sm:pt-0"}>
                            <nav className="text-gray-500 ml-2 sm:ml-0">
                                <ul className="text-xs md:text-base sm:grid sm:grid-flow-col sm:gap-8">
                                    <li className="border-b border-gray-900 cursor-pointer rounded hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-500 sm:rounded-none">
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li className="mt-1 sm:mt-0 border-b border-gray-900 cursor-pointer rounded hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-500 sm:rounded-none">
                                        <Link to="/group">Media</Link>
                                    </li>
                                    <li className="mt-1 sm:mt-0  border-b border-gray-900 cursor-pointer rounded hover:bg-gray-800 sm:hover:bg-transparent sm:hover:border-green-500 sm:rounded-none">
                                        <Link to="/about" >About</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* User button */}
                        <div className="w-12 pl-2 sm:pl-0 sm:absolute sm:right-0">
                            <button className="w-full border border-blue-500 bg-transparent text-blue-500 rounded-sm focus:outline-none hover:bg-blue-500 hover:text-gray-300"
                                    onClick={toggleUser}
                                    data-testid="user-button">
                                        USER
                            </button>

                            {isOpenUser?
                                <div className="w-48  mt-1 text-black bg-gray-100 flex flex-col rounded-md shadow-xl">
                                    <Link to="#" className="px-3 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={toggleUser}>Profile</Link>
                                    <Link to="#" className="px-3 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={toggleUser}>Settings</Link>
                                    <Link to="/controls" className="px-3 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={toggleUser}>Resources</Link>
                                </div>:''}
                        </div>
                    </div>
                    <div className="block sm:hidden w-full h-10vh">
                    </div>
            </div>   
    )
}

export default Navbar;