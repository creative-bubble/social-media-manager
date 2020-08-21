import React from 'react';
import { Link } from 'react-router-dom';

const DashBarLinks = ({isOpenNav,toggleNav}) => {
    return(
        <>
            {/* mobile button */}
            <div className="md:hidden  w-full bg-gray-200 shadow-md">
                    <button className="z-10 text-black w-12 h-12 hover:bg-gray-300 focus:outline-none"
                                onClick={toggleNav}>
                                {isOpenNav
                                ?
                                <i className="fa fa-window-close-o" aria-hidden="true"></i>
                                :
                                <i className="fa fa-bars" aria-hidden="true"></i>
                                }
                    </button>
            </div>

            {/* dashboard links */}
            <div  className={isOpenNav?"w-full h-full md:w-40 overflow-auto whitespace-no-wrap border shadow-inner"
                                        :"hidden w-full h-full md:block md:w-40 overflow-auto whitespace-no-wrap bg-gray-200 border shadow-inner"}>
                    <div className="text-center pt-6">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="text-center pt-6">
                        <ul>
                            <li className="block py-2 hover:bg-gray-300 hover:text-red-700">
                                <a href="#home">Organization</a>
                            </li>
                            <li className="block py-2 hover:bg-gray-300  hover:text-red-700">
                                <Link to="/group">Groups</Link>
                            </li>
                            <li className="block py-2 hover:bg-gray-300 hover:text-red-700">
                                <a href="#home">Roles</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </>
    );
}

export default DashBarLinks;